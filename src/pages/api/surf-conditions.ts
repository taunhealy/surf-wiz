import type { APIRoute } from "astro";
import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs/promises";
import * as path from "path";

const CACHE_FILE = path.join(process.cwd(), "cache", "surf-conditions.json");
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

async function readCache() {
  try {
    const data = await fs.readFile(CACHE_FILE, "utf-8");
    const cache = JSON.parse(data);

    if (Date.now() - cache.timestamp < CACHE_DURATION) {
      return cache.data;
    }
  } catch (error) {
    // Cache doesn't exist or is invalid
  }
  return null;
}

async function writeCache(data: any) {
  try {
    await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
    await fs.writeFile(
      CACHE_FILE,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  } catch (error) {
    console.error("Failed to write cache:", error);
  }
}

function degreesToCardinal(degrees: number): string {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round((degrees % 360) / 22.5);
  return directions[index % 16];
}

export const GET: APIRoute = async () => {
  try {
    // Try to get cached data first
    const cachedData = await readCache();
    if (cachedData) {
      return new Response(JSON.stringify(cachedData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=86400", // 24 hours
        },
      });
    }

    // If no cache, fetch new data
    const response = await axios.get("https://swell.co.za/ct/simple");
    const html = response.data;
    const $ = cheerio.load(html);

    // Get wind direction from the specific div
    const windDirection = $(
      'div[style*="display:block"][style*="width: 49px"][style*="background-color: white"]'
    )
      .first()
      .text()
      .trim();

    // Get wave height from the grey background div
    const waveHeight =
      parseFloat(
        $(
          'div[style*="background-color: rgb(174, 174, 174)"][style*="color: rgb(46, 46, 46)"]'
        )
          .eq(1) // Use the second element
          .text()
          .trim()
      ) || 0;

    // Get swell period from the orange background div
    const swellPeriod =
      parseFloat(
        $(
          'div[style*="background-color: rgb(255, 202, 0)"][style*="color: rgb(0, 0, 0)"]'
        )
          .eq(1) // Use the second element, just like wave height
          .text()
          .trim()
      ) || 0;

    // Get swell direction from the orange background div
    console.log("Starting swell direction scraping...");

    const swellDirectionSelector =
      'div[style*="display:block"][style*="width: 49px"][style*="height:20px"][style*="line-height:20px"][style*="text-align: center"][style*="float:left"][style*="background-color: rgb(255, 154, 0)"][style*="color: rgb(0,0,0)"]';
    console.log("Using selector:", swellDirectionSelector);

    const swellDirectionElement = $(swellDirectionSelector).first();
    console.log("Found element:", swellDirectionElement.length > 0);
    console.log("Element HTML:", swellDirectionElement.prop("outerHTML"));

    const swellDirection = swellDirectionElement.text().trim().replace("°", "");
    const swellDirectionDegrees = parseInt(swellDirection) || 0;
    const swellDirectionCardinal = degreesToCardinal(swellDirectionDegrees);

    console.log("Raw text:", swellDirectionElement.text());
    console.log("Trimmed text:", swellDirectionElement.text().trim());
    console.log("Final swell direction:", swellDirection);

    console.log("Scraped swell direction:", swellDirection);

    const data = {
      wind: {
        direction: windDirection || "Unknown",
        cardinalDirection: windDirection,
        speed: 0,
      },
      swell: {
        height: waveHeight,
        period: swellPeriod,
        direction: swellDirection || "Unknown",
        cardinalDirection: swellDirectionCardinal,
      },
      timestamp: new Date().toISOString(),
    };

    // Cache the new data
    await writeCache(data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=86400", // 24 hours
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
