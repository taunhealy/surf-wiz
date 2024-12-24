import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { PrismaClient } from "@prisma/client";
import {
  createCheckout,
  type Checkout,
  Lemonsqueezy,
} from "@lemonsqueezy/lemonsqueezy.js";

const prisma = new PrismaClient();
const lemonsqueezy = new Lemonsqueezy(process.env.LEMON_SQUEEZY_API_KEY!);

export const POST: APIRoute = async ({ request }) => {
  try {
    const session = await getSession(request);
    console.log("Session data:", session);

    if (!session?.user?.email) {
      return new Response(
        JSON.stringify({ error: "Authentication required", session }),
        { status: 401 }
      );
    }

    const user = await prisma.user.upsert({
      where: { email: session.user.email },
      create: {
        email: session.user.email,
        subscriptions: {
          create: {
            status: "pending",
          },
        },
      },
      update: {},
      include: {
        subscriptions: true,
      },
    });

    console.log("Store ID:", process.env.LEMON_SQUEEZY_STORE_ID);
    console.log("Variant ID:", process.env.LEMON_SQUEEZY_VARIANT_ID);

    const checkout = await lemonsqueezy.createCheckout({
      variantId: parseInt(process.env.LEMON_SQUEEZY_VARIANT_ID!),
      storeId: parseInt(process.env.LEMON_SQUEEZY_STORE_ID!),
      custom: {
        userId: user.id,
      },
      checkoutOptions: {
        billing_address: true,
      },
    });

    console.log("Checkout response:", JSON.stringify(checkout, null, 2));

    if (!checkout?.data?.attributes?.url) {
      throw new Error(
        `Failed to get checkout URL: ${JSON.stringify(checkout)}`
      );
    }

    return new Response(JSON.stringify({ url: checkout.data.attributes.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Failed to create checkout",
      }),
      { status: 500 }
    );
  }
};
