import type { APIRoute } from "astro";
import { HARDCODED_WIND_DATA } from "../../types/wind";

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify(HARDCODED_WIND_DATA), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch surf conditions" }),
      { status: 500 }
    );
  }
};
