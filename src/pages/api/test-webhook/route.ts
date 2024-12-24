import type { APIRoute } from "astro";
import { db } from "../../../db";
import { subscriptions } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { userId, action } = await request.json();
    
    if (!userId || !action) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const payload = {
      meta: {
        event_name: action === 'subscribe' ? 'subscription_created' : 'subscription_cancelled',
        custom_data: [userId]
      },
      data: {
        id: nanoid(),
        attributes: {
          variant_id: process.env.LEMON_SQUEEZY_VARIANT_ID
        }
      }
    };

    // Process the webhook payload
    if (action === 'subscribe') {
      await db.insert(subscriptions).values({
        id: nanoid(),
        userId: userId,
        status: "active",
        variantId: parseInt(process.env.LEMON_SQUEEZY_VARIANT_ID || "0"),
        lemonSqueezyId: payload.data.id,
      }).onConflictDoUpdate({
        target: subscriptions.userId,
        set: {
          status: "active",
          lemonSqueezyId: payload.data.id,
        },
      });
    } else {
      await db.update(subscriptions)
        .set({ status: "inactive" })
        .where(eq(subscriptions.userId, userId));
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Test webhook error:', error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 