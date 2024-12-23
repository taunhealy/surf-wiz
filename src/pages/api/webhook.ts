import type { APIRoute } from "astro";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST: APIRoute = async ({ request }) => {
  const payload = await request.json();
  const eventName = payload.meta.event_name;

  try {
    switch (eventName) {
      case "subscription_created":
        await prisma.subscription.update({
          where: {
            userId: payload.meta.custom_data.user_id,
          },
          data: {
            status: "active",
          },
        });
        break;

      case "subscription_cancelled":
        await prisma.subscription.update({
          where: {
            userId: payload.meta.custom_data.user_id,
          },
          data: {
            status: "cancelled",
          },
        });
        break;
    }

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(null, { status: 500 });
  }
};
