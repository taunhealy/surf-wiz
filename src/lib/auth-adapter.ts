import type { Adapter } from "@auth/core/adapters";
import { db } from "../db";
import { and, eq } from "drizzle-orm";
import { users, accounts, sessions, subscriptions } from "../db/schema";
import { nanoid } from "nanoid";

export function DrizzleAdapter(): Adapter {
  return {
    async createUser(data) {
      const id = nanoid();
      await db.insert(users).values({
        id,
        email: data.email!,
        emailVerified: data.emailVerified,
        name: data.name,
        image: data.image,
      });
      const user = await db.query.users.findFirst({
        where: eq(users.id, id),
      });
      return user!;
    },

    async getUser(id) {
      const user = await db.query.users.findFirst({
        where: eq(users.id, id),
      });
      return user || null;
    },

    async getUserByEmail(email) {
      const user = await db.query.users.findFirst({
        where: eq(users.email, email),
      });
      return user || null;
    },

    async createSession(data) {
      await db.insert(sessions).values({
        id: nanoid(),
        sessionToken: data.sessionToken,
        userId: data.userId,
        expires: data.expires,
      });
      const session = await db.query.sessions.findFirst({
        where: eq(sessions.sessionToken, data.sessionToken),
      });
      return session!;
    },

    async getSessionAndUser(sessionToken) {
      const session = await db.query.sessions.findFirst({
        where: eq(sessions.sessionToken, sessionToken),
      });
      if (!session) return null;

      const user = await db.query.users.findFirst({
        where: eq(users.id, session.userId),
      });
      if (!user) return null;

      const subscription = await db.query.subscriptions.findFirst({
        where: eq(subscriptions.userId, user.id),
      });

      return {
        session,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          subscription: subscription ? { status: subscription.status } : undefined
        }
      };
    },

    async updateUser(data) {
      if (!data.id) throw new Error("User ID is required");
      
      await db
        .update(users)
        .set({
          name: data.name,
          email: data.email,
          image: data.image,
          emailVerified: data.emailVerified,
        })
        .where(eq(users.id, data.id));
        
      const user = await db.query.users.findFirst({
        where: eq(users.id, data.id),
      });
      
      if (!user) throw new Error("User not found");
      return user;
    },

    async linkAccount(data) {
      await db.insert(accounts).values({
        id: nanoid(),
        userId: data.userId,
        type: data.type,
        provider: data.provider,
        providerAccountId: data.providerAccountId,
        refreshToken: data.refresh_token,
        accessToken: data.access_token,
        expiresAt: data.expires_at,
        tokenType: data.token_type,
        scope: data.scope,
        idToken: data.id_token,
        sessionState: data.session_state,
      });
    },

    async deleteSession(sessionToken) {
      await db.delete(sessions).where(eq(sessions.sessionToken, sessionToken));
    },

    async getUserByAccount(provider_providerAccountId) {
      const account = await db.query.accounts.findFirst({
        where: eq(accounts.providerAccountId, provider_providerAccountId.providerAccountId),
        with: {
          user: true
        }
      });
      return account?.user ?? null;
    },

    async updateSession(session) {
      await db
        .update(sessions)
        .set({
          expires: session.expires,
          sessionToken: session.sessionToken,
        })
        .where(eq(sessions.sessionToken, session.sessionToken));

      const updatedSession = await db.query.sessions.findFirst({
        where: eq(sessions.sessionToken, session.sessionToken),
      });

      return updatedSession;
    }
  };
}
