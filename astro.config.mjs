import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import auth from "auth-astro";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [react(), auth()],
  output: "server",
  adapter: vercel(),
  vite: {
    build: {
      minify: false,
    },
    logLevel: "info",
  },
});
