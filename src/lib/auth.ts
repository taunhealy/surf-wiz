import { Auth } from "@auth/core";
import type { AuthConfig } from "@auth/core";
import Google from "@auth/core/providers/google";

export const auth = new (Auth as any)({
  secret: import.meta.env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} as AuthConfig);
