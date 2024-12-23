import type { Beach } from "../types/beaches";
import type { WindData } from "../types/wind";
import BeachCard from "./BeachCard";

interface BeachGridProps {
  beaches: Beach[];
  windData: WindData | null;
  isBeachSuitable: (beach: Beach, conditions: WindData) => any;
}

export default function BeachGrid({
  beaches,
  windData,
  isBeachSuitable,
}: BeachGridProps) {
  return (
    <div className="beach-grid">
      {beaches.map((beach) => (
        <BeachCard
          key={beach.name}
          beach={beach}
          windData={windData}
          isBeachSuitable={isBeachSuitable}
        />
      ))}
    </div>
  );
}   
