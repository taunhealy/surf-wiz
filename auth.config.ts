import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";
import { DrizzleAdapter } from "./lib/auth-adapter";
import "dotenv/config";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error("Missing Google OAuth credentials");
}

export default defineConfig({
  adapter: DrizzleAdapter(),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  debug: true,
});
