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
