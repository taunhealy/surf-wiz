import { useState } from "react";
import type { Beach } from "../types/beaches";

interface SidebarFilterProps {
  beaches: Beach[];
  onFilterChange: (filteredBeaches: Beach[]) => void;
}

export default function SidebarFilter({
  beaches,
  onFilterChange,
}: SidebarFilterProps) {
  const [filters, setFilters] = useState({
    difficulty: [] as string[],
    crimeLevel: [] as string[],
    sharkRisk: [] as string[],
    maxDistance: 100,
    waveType: [] as string[],
    maxWaveHeight: 3,
  });

  // Get unique wave types from beach data
  const waveTypes = [...new Set(beaches.map((beach) => beach.waveType))];

  const handleFilterChange = (newFilters: typeof filters) => {
    console.log("Filter change:", newFilters); // Debug log
    let filteredBeaches = [...beaches];

    // Apply difficulty filter
    if (newFilters.difficulty.length > 0) {
      filteredBeaches = filteredBeaches.filter((beach) =>
        newFilters.difficulty.includes(beach.difficulty)
      );
    }

    // Apply crime level filter
    if (newFilters.crimeLevel.length > 0) {
      filteredBeaches = filteredBeaches.filter((beach) =>
        newFilters.crimeLevel.includes(beach.crimeLevel)
      );
    }

    // Apply shark risk filter
    if (newFilters.sharkRisk.length > 0) {
      filteredBeaches = filteredBeaches.filter((beach) =>
        newFilters.sharkRisk.includes(beach.sharkRisk)
      );
    }

    // Apply distance filter
    filteredBeaches = filteredBeaches.filter(
      (beach) => beach.distanceFromCT <= newFilters.maxDistance
    );

    // Apply wave type filter
    if (newFilters.waveType.length > 0) {
      filteredBeaches = filteredBeaches.filter((beach) =>
        newFilters.waveType.includes(beach.waveType)
      );
    }

    // Apply wave height filter
    filteredBeaches = filteredBeaches.filter(
      (beach) => beach.waveSize.max <= newFilters.maxWaveHeight
    );

    console.log("Filtered beaches count:", filteredBeaches.length); // Debug log
    onFilterChange(filteredBeaches);
  };

  const updateFilters = (key: keyof typeof filters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    handleFilterChange(newFilters);
  };

  return (
    <div className="sidebar">
      <h2>Filter Surf Spots</h2>

      <div className="filter-section">
        <h3>Difficulty</h3>
        {["Beginner", "Intermediate", "Advanced"].map((level) => (
          <label key={level}>
            <input
              type="checkbox"
              checked={filters.difficulty.includes(level)}
              onChange={(e) => {
                const newDifficulty = e.target.checked
                  ? [...filters.difficulty, level]
                  : filters.difficulty.filter((d) => d !== level);
                updateFilters("difficulty", newDifficulty);
              }}
            />
            {level}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3>Safety</h3>
        <div>
          <h4>Crime Level</h4>
          {["Low", "Medium", "High"].map((level) => (
            <label key={level}>
              <input
                type="checkbox"
                checked={filters.crimeLevel.includes(level)}
                onChange={(e) => {
                  const newCrimeLevels = e.target.checked
                    ? [...filters.crimeLevel, level]
                    : filters.crimeLevel.filter((l) => l !== level);
                  updateFilters("crimeLevel", newCrimeLevels);
                }}
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Distance from Cape Town</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.maxDistance}
          onChange={(e) =>
            updateFilters("maxDistance", parseInt(e.target.value))
          }
        />
        <span>{filters.maxDistance}km</span>
      </div>

      <div className="filter-section">
        <h3>Wave Type</h3>
        {waveTypes.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={filters.waveType.includes(type)}
              onChange={(e) => {
                const newWaveTypes = e.target.checked
                  ? [...filters.waveType, type]
                  : filters.waveType.filter((t) => t !== type);
                updateFilters("waveType", newWaveTypes);
              }}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3>Maximum Wave Height</h3>
        <input
          type="range"
          min="0"
          max="3"
          step="0.5"
          value={filters.maxWaveHeight}
          onChange={(e) =>
            updateFilters("maxWaveHeight", parseFloat(e.target.value))
          }
        />
        <span>{filters.maxWaveHeight}m</span>
      </div>
    </div>
  );
}
