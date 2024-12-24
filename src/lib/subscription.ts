import { db } from "../db";
import { subscriptions } from "../db/schema";
import { eq } from "drizzle-orm";

export async function getUserSubscription(userId: string) {
  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId),
  });
  return subscription;
}

export async function isUserSubscribed(userId: string) {
  const subscription = await getUserSubscription(userId);
  return subscription?.status === "active";
} 