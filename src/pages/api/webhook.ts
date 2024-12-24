import type { APIRoute } from "astro";
import { createHmac } from "crypto";
import { db } from "../../db";
import { subscriptions } from "../../db/schema";
import { eq } from "drizzle-orm";

function verifySignature(payload: string, signature: string) {
  const hmac = createHmac("sha256", process.env.LEMON_SQUEEZY_WEBHOOK_SECRET!);
  const digest = hmac.update(payload).digest("hex");
  return signature === digest;
}

export const POST: APIRoute = async ({ request }) => {
  const signature = request.headers.get("x-signature");
  const rawBody = await request.text();

  if (!signature || !verifySignature(rawBody, signature)) {
    return new Response("Invalid signature", { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const eventName = payload.meta.event_name;
  const userId = payload.meta.custom_data.userId;

  try {
    switch (eventName) {
      case "subscription_created":
      case "subscription_resumed":
        await db
          .insert(subscriptions)
          .values({
            userId,
            status: "active",
            lemonSqueezyId: payload.data.id,
          })
          .onConflictDoUpdate({
            target: subscriptions.userId,
            set: {
              status: "active",
              lemonSqueezyId: payload.data.id,
            },
          });
        break;
    }
  } catch (error) {
    console.error("Error handling webhook:", error);
    return new Response("Error handling webhook", { status: 500 });
  }

  return new Response("Webhook handled successfully", { status: 200 });
};
