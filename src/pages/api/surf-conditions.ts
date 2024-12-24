import type { APIRoute } from "astro";
import axios from "axios";
import * as cheerio from "cheerio";
import { HARDCODED_WIND_DATA } from "../../types/wind";

export const GET: APIRoute = async () => {
  try {
    // Return hardcoded data for now
    return new Response(JSON.stringify({
      data: HARDCODED_WIND_DATA,
      timestamp: Date.now()
    }));

    // Keep scraping code commented out for future use
    /*
    console.log("Fetching new data from swell.co.za...");
    const response = await axios.get("https://swell.co.za/ct/simple");
    const html = response.data;
    const $ = cheerio.load(html);

    // Get wind direction
    const windDirection = $(
      'div[style*="display:block"][style*="width: 49px"][style*="background-color: white"]'
    )
      .first()
      .text()
      .trim();

    // Get wave height
    const waveHeight =
      parseFloat(
        $(
          'div[style*="background-color: rgb(174, 174, 174)"][style*="color: rgb(46, 46, 46)"]'
        )
          .eq(1)
          .text()
          .trim()
      ) || 0;

    // Get swell period
    const swellPeriod =
      parseFloat(
        $(
          'div[style*="background-color: rgb(255, 202, 0)"][style*="color: rgb(0, 0, 0)"]'
        )
          .eq(1)
          .text()
          .trim()
      ) || 0;

    // Get swell direction
    const swellDirectionSelector =
      'div[style*="display:block"][style*="width: 49px"][style*="height:20px"][style*="line-height:20px"][style*="text-align: center"][style*="float:left"][style*="background-color: rgb(255, 154, 0)"][style*="color: rgb(0,0,0)"]';
    const swellDirectionElement = $(swellDirectionSelector).first();
    */

  } catch (error) {
    console.error("Error fetching surf conditions:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch surf conditions" }),
      { status: 500 }
    );
  }
};
