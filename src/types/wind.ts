export const HARDCODED_WIND_DATA = {
  wind: {
    direction: "SE",
    cardinalDirection: "SE",
    speed: 0,
  },
  swell: {
    height: 2.3,
    period: 12,
    direction: "251",
    cardinalDirection: "WSW",
  },
  timestamp: "2024-12-24T02:59:26.000Z",
};

export interface WindData {
  wind: {
    direction: string;
    cardinalDirection: string;
    speed: number;
  };
  swell: {
    height: number;
    period: number;
    direction: string;
    cardinalDirection: string;
  };
  timestamp: string;
}
