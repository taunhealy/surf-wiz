interface CachedData<T> {
  data: T;
  timestamp: number;
}

export function getCachedData<T>(key: string): T | null {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const parsedCache: CachedData<T> = JSON.parse(cached);
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // Check if cache is older than 24 hours
    if (now - parsedCache.timestamp > oneDay) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedCache.data;
  } catch {
    return null;
  }
}

export function setCachedData<T>(key: string, data: T): void {
  const cacheData: CachedData<T> = {
    data,
    timestamp: new Date().getTime(),
  };
  localStorage.setItem(key, JSON.stringify(cacheData));
}
