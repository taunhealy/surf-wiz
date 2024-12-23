export type WaveSize = "xs" | "s" | "sm" | "m" | "ml" | "l" | "xl" | "xxl";

export function categorizeWaveSize(height: number, period: number): WaveSize {
  // Combine height and period to determine wave size
  const powerIndex = height * (period / 8);

  if (powerIndex < 1) return "xs"; // Extra Small: < 1m
  if (powerIndex < 1.5) return "s"; // Small: 1-1.5m
  if (powerIndex < 2) return "sm"; // Small-Medium: 1.5-2m
  if (powerIndex < 2.5) return "m"; // Medium: 2-2.5m
  if (powerIndex < 3) return "ml"; // Medium-Large: 2.5-3m
  if (powerIndex < 4) return "l"; // Large: 3-4m
  if (powerIndex < 5) return "xl"; // Extra Large: 4-5m
  return "xxl"; // XXL: 5m+
}

export function getWaveSizeLabel(size: WaveSize): string {
  const labels = {
    xs: "Extra Small",
    s: "Small",
    sm: "Small-Medium",
    m: "Medium",
    ml: "Medium-Large",
    l: "Large",
    xl: "Extra Large",
    xxl: "XXL",
  };
  return labels[size];
}

export function isWaveSizeInRange(
  currentSize: WaveSize,
  range: { min: WaveSize; max: WaveSize }
): boolean {
  const waveSizes: WaveSize[] = ["xs", "s", "sm", "m", "ml", "l", "xl", "xxl"];
  const minIndex = waveSizes.indexOf(range.min);
  const maxIndex = waveSizes.indexOf(range.max);
  const currentIndex = waveSizes.indexOf(currentSize);

  return currentIndex >= minIndex && currentIndex <= maxIndex;
}
