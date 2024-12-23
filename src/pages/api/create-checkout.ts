import type { APIRoute } from "astro";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { getSession } from "@astro-auth/core";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST: APIRoute = async ({ request }) => {
  try {
    const session = await getSession(request);
    if (!session?.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const checkout = await createCheckout(
      process.env.LEMON_SQUEEZY_API_KEY!,
      process.env.LEMON_SQUEEZY_STORE_ID!,
      {
        data: {
          type: "checkouts",
          attributes: {
            checkout_data: {
              email: session.user.email,
              custom: {
                user_id: session.user.id,
              },
            },
            product_options: {
              name: "Surf Spots Premium",
              description: "Access to all surf spots and conditions",
              receipt_button_text: "View Surf Spots",
              redirect_url: "http://localhost:3000/success",
              receipt_thank_you_note: "Thanks for subscribing!",
            },
          },
          relationships: {
            store: {
              data: {
                type: "stores",
                id: process.env.LEMON_SQUEEZY_STORE_ID!,
              },
            },
            variant: {
              data: {
                type: "variants",
                id: process.env.LEMON_SQUEEZY_VARIANT_ID!,
              },
            },
          },
        },
      }
    );

    // Store initial subscription record
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        subscription: {
          create: {
            status: "pending",
            variantId: parseInt(process.env.LEMON_SQUEEZY_VARIANT_ID!),
            checkoutUrl: checkout.data?.data?.attributes?.url,
          },
        },
      },
    });

    if (!checkout.data?.data?.attributes?.url) {
      throw new Error("Failed to get checkout URL");
    }

    return new Response(
      JSON.stringify({ url: checkout.data.data.attributes.url }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create checkout" }),
      { status: 500 }
    );
  }
};
