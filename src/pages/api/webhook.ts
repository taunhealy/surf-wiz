import type { APIRoute } from "astro";
import { PrismaClient } from "@prisma/client";
import { createHmac } from "crypto";

const prisma = new PrismaClient();

// Verify LemonSqueezy webhook signature
function verifySignature(payload: string, signature: string) {
  const hmac = createHmac("sha256", process.env.LEMON_SQUEEZY_WEBHOOK_SECRET!);
  const digest = hmac.update(payload).digest("hex");
  return signature === digest;
}

export const POST: APIRoute = async ({ request }) => {
  const signature = request.headers.get("x-signature");
  const rawBody = await request.text();
          data: {
  if (!signature || !verifySignature(rawBody, signature)) {
    return new Response("Invalid signature", { status: 401 });
        });
        break;
  const payload = JSON.parse(rawBody);
  const eventName = payload.meta.event_name;
  const userId = payload.meta.custom_data.userId;
          where: {
  try {
    switch (eventName) {
      case "subscription_created":
      case "subscription_resumed":
        await prisma.subscription.upsert({
          where: { userId },
          create: {
            userId,
            status: "active",
            lemonSqueezyId: payload.data.id,
          },
          update: {
            status: "active",
            lemonSqueezyId: payload.data.id,
