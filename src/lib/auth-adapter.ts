import type { Adapter } from "@auth/core/adapters";
import { and, eq } from "drizzle-orm";
import { db } from "../db";
import { users, accounts, sessions } from "../db/schema";
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
      await db.insert(sessions).values(data);
      const session = await db.query.sessions.findFirst({
        where: eq(sessions.sessionToken, data.sessionToken),
      });
      return session!;
    },

    async getSessionAndUser(sessionToken) {
      const session = await db.query.sessions.findFirst({
        where: eq(sessions.sessionToken, sessionToken),
        with: {
          user: true,
        },
      });
      if (!session) return null;
      return {
        session,
        user: session.user,
      };
    },

    // Add other required adapter methods...
  };
}
