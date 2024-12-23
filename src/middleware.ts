import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    const response = await fetch("/api/auth/session", {
      headers: context.request.headers,
    });

    if (response.ok) {
      const session = await response.json();
      context.locals.session = session;
      context.locals.user = session?.user ?? null;
    } else {
      context.locals.session = null;
      context.locals.user = null;
    }
  } catch (error) {
    console.error("Auth error:", error);
    context.locals.session = null;
    context.locals.user = null;
  }

  return next();
});
