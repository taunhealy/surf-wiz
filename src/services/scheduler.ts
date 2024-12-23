import { PrismaClient } from "@prisma/client";
import cron from "node-cron";
import axios from "axios";
import cheerio from "cheerio";

const prisma = new PrismaClient();

export function startScheduler() {
  // Run every day at 1 AM
  cron.schedule("0 1 * * *", async () => {
    try {
      const conditions = await fetchSurfConditions();
      await prisma.surfConditions.create({
        data: conditions,
      });
      console.log("Updated surf conditions successfully");
    } catch (error) {
      console.error("Failed to update surf conditions:", error);
    }
  });
}

async function fetchSurfConditions() {
  // Reuse your existing scraping logic from surf-conditions.ts
  const response = await axios.get("https://swell.co.za/ct/simple");
  const html = response.data;
  const $ = cheerio.load(html);

  // Your existing scraping code here
  // Reference lines 30-86 from surf-conditions.ts
}
