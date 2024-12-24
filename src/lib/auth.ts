import { Auth } from "@auth/core";
import Google from "@auth/core/providers/google";
import type { AuthConfig } from "@auth/core/types";

export const authConfig: AuthConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  trustHost: true,
  debug: true,
  pages: {
    signIn: "/login",
    error: "/error",
  },
};

export const auth = async (request: Request) => {
  return await Auth(request, authConfig);
};
