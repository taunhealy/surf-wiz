import type { APIRoute } from 'astro';
import axios from 'axios';
import * as cheerio from 'cheerio';

// Simple in-memory cache
let cache = {
  data: null as any,
  timestamp: 0
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export const GET: APIRoute = async () => {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cache.data && (now - cache.timestamp) < CACHE_DURATION) {
      return new Response(JSON.stringify(cache.data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Fetch new data
    const response = await axios.get('https://swell.co.za/ct/simple');
    const html = response.data;
    const $ = cheerio.load(html);
    
    const windDirection = $('div[style*="display:block"][style*="width: 49px"]')
      .first()
      .text()
      .trim();

    // Update cache
    cache = {
      data: {
        direction: windDirection,
        timestamp: new Date().toISOString()
      },
      timestamp: now
    };

    return new Response(JSON.stringify(cache.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Failed to fetch wind direction'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 