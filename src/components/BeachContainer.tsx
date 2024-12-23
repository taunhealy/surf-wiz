import { useState } from "react";
import type { Beach } from "../types/beaches";
import type { WindData } from "../types/wind";
import SidebarFilter from "./SidebarFilter";
import BeachGrid from "./BeachGrid";

interface BeachContainerProps {
  initialBeaches: Beach[];
  windData: WindData | null;
}

export default function BeachContainer({
  initialBeaches,
  windData,
}: BeachContainerProps) {
  const [filteredBeaches, setFilteredBeaches] = useState(initialBeaches);

  function isBeachSuitable(beach: Beach, conditions: WindData) {
    const hasGoodWind = beach.optimalWindDirections.includes(
      conditions.wind.direction
    );

    const swellDeg = parseInt(conditions.swell.direction);
    const hasGoodSwellDirection =
      swellDeg >= beach.optimalSwellDirections.min &&
      swellDeg <= beach.optimalSwellDirections.max;

    const hasGoodSwellHeight =
      conditions.swell.height >= beach.waveSize.min &&
      conditions.swell.height <= beach.waveSize.max;

    let score = 0;
    if (hasGoodWind) score += 2;
    if (hasGoodSwellDirection) score += 1;
    if (hasGoodSwellHeight) score += 1;

    return {
      suitable: score > 2,
      score: score,
    };
  }

  return (
    <div className="beach-container">
      <aside className="sidebar">
        <SidebarFilter
          beaches={initialBeaches}
          onFilterChange={setFilteredBeaches}
        />
      </aside>
      <main className="main-content">
        <div className="wind-card">
          <div className="conditions">
            <div className="condition-item">
              <label>Wind Direction:</label>
              <span>{windData ? windData.wind.direction : "Loading..."}</span>
            </div>
            <div className="condition-item">
              <label>Wave Height:</label>
              <span>{windData ? `${windData.swell.height}m` : ""}</span>
            </div>
            <div className="condition-item">
              <label>Swell Direction:</label>
              <span>
                {windData
                  ? `${windData.swell.direction}° (${windData.swell.cardinalDirection})`
                  : "Loading..."}
              </span>
            </div>
          </div>
          <div className="timestamp">
            {windData
              ? `Last updated: ${new Date(windData.timestamp).toLocaleString()}`
              : ""}
          </div>
          <form method="GET">
            <button type="submit">Refresh</button>
          </form>
        </div>

        <BeachGrid
          beaches={filteredBeaches}
          windData={windData}
          isBeachSuitable={isBeachSuitable}
        />
      </main>

      <style jsx>{`
        .beach-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .sidebar {
          width: 300px;
          flex-shrink: 0;
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .main-content {
          flex: 1;
          min-width: 0;
        }

        .wind-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .conditions {
          display: flex;
          justify-content: space-around;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .condition-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .condition-item label {
          font-size: 0.875rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .condition-item span {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
        }

        .timestamp {
          text-align: center;
          color: #666;
          font-size: 0.875rem;
          margin: 1rem 0;
        }

        button {
          display: block;
          margin: 0 auto;
          background: #3498db;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        button:hover {
          background: #2980b9;
        }

        @media (max-width: 768px) {
          .beach-container {
            flex-direction: column;
            padding: 1rem;
          }

          .sidebar {
            width: auto;
            position: static;
          }

          .conditions {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
