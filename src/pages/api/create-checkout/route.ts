import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { db } from "../../../db";
import { subscriptions } from "../../../db/schema";
import axios from "axios";
import { randomUUID } from "crypto";

export const POST: APIRoute = async ({ request }) => {
  let session;
  try {
    session = await getSession(request);
    
    if (!session?.user?.id || !session?.user?.email) {
      console.error('No session, user ID, or email found:', session);
      return new Response(JSON.stringify({ error: "Unauthorized" }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!process.env.LEMON_SQUEEZY_API_KEY || !process.env.LEMON_SQUEEZY_STORE_ID || !process.env.LEMON_SQUEEZY_VARIANT_ID) {
      console.error('Missing required environment variables');
      return new Response(JSON.stringify({ error: "Server configuration error" }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const userId = session.user.id;
    console.log('Creating checkout for user:', userId, 'with email:', session.user.email);

    const payload = {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: session.user.email,
            custom: [userId]
          }
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID
            }
          },
          variant: {
            data: {
              type: "variants",
              id: process.env.LEMON_SQUEEZY_VARIANT_ID
            }
          }
        }
      }
    };

    const checkout = await axios.post(
      "https://api.lemonsqueezy.com/v1/checkouts",
      payload,
      { 
        headers: { 
          'Authorization': `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        } 
      }
    );

    if (!checkout.data?.data?.attributes?.url) {
      console.error('Invalid checkout response:', checkout.data);
      throw new Error('Invalid checkout response');
    }

    await db.insert(subscriptions).values({
      id: randomUUID(),
      userId,
      status: 'pending',
      checkoutUrl: checkout.data.data.attributes.url,
      lemonSqueezyId: checkout.data.data.id,
      variantId: parseInt(process.env.LEMON_SQUEEZY_VARIANT_ID)
    }).onConflictDoUpdate({
      target: subscriptions.userId,
      set: {
        status: 'pending',
        checkoutUrl: checkout.data.data.attributes.url,
        lemonSqueezyId: checkout.data.data.id,
      }
    });

    return new Response(
      JSON.stringify({ url: checkout.data.data.attributes.url }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error('Checkout creation error:', {
      session,
      error: error.response?.data || error.message || error
    });
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to create checkout',
        details: error.response?.data?.errors || error.message 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
