import { useState, useEffect } from "react";
import type { Beach } from "../types/beaches";
import type { WindData } from "../types/wind";
import SidebarFilter from "./SidebarFilter";
import BeachGrid from "./BeachGrid";

interface BeachContainerProps {
  initialBeaches: Beach[];
  windData: WindData | null;
  isSubscribed: boolean;
}

export default function BeachContainer({
  initialBeaches,
  windData: initialWindData,
  isSubscribed,
}: BeachContainerProps) {
  const [filteredBeaches, setFilteredBeaches] = useState(initialBeaches);
  const [windData, setWindData] = useState(initialWindData);
  const [isLoading, setIsLoading] = useState(false);
  const [minPoints, setMinPoints] = useState(0);

  useEffect(() => {
    if (windData) {
      const sortedBeaches = initialBeaches
        .map((beach) => ({
          beach,
          score: isBeachSuitable(beach, windData).score,
        }))
        .sort((a, b) => b.score - a.score)
        .map(({ beach }) => beach);

      setFilteredBeaches(sortedBeaches);
    }
  }, []);

  async function refreshData(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/surf-conditions");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const newData = await response.json();
      setWindData(newData);

      // Store the new data in localStorage
      localStorage.setItem("windData", JSON.stringify(newData));
      localStorage.setItem("windDataTimestamp", Date.now().toString());

      // Sort beaches immediately after getting new wind data
      const sortedBeaches = initialBeaches
        .map((beach) => ({
          beach,
          score: isBeachSuitable(beach, newData).score,
        }))
        .sort((a, b) => b.score - a.score)
        .map(({ beach }) => beach);

      setFilteredBeaches(sortedBeaches);
    } catch (error) {
      console.error("Failed to fetch wind data:", error);
    } finally {
      setIsLoading(false);
    }
  }

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

  const handleFilteredBeaches = (beaches: Beach[]) => {
    if (!windData) {
      setFilteredBeaches(beaches);
      return;
    }

    // Apply all filters and sort in one pass
    const filteredAndSorted = beaches
      // First map to include scores
      .map((beach) => ({
        beach,
        score: isBeachSuitable(beach, windData).score,
      }))
      // Then filter by minimum points (star rating)
      .filter(({ score }) => minPoints === 0 || score >= minPoints)
      // Sort by score (highest to lowest)
      .sort((a, b) => b.score - a.score)
      // Finally, extract just the beaches
      .map(({ beach }) => beach);

    setFilteredBeaches(filteredAndSorted);
  };

  // Limit beaches for non-subscribed users
  const displayedBeaches = isSubscribed
    ? filteredBeaches
    : filteredBeaches.slice(0, 1);

  function handleSubscribe() {
    // Replace with your actual LemonSqueezy product URL
    window.location.href =
      "https://yeeewww.lemonsqueezy.com/buy/cd727ca6-185c-4850-a41d-2c595438be62";
  }

  return (
    <div className="beach-container">
      <aside className="sidebar">
        <SidebarFilter
          beaches={initialBeaches}
          onFilterChange={handleFilteredBeaches}
          minPoints={minPoints}
          onMinPointsChange={setMinPoints}
        />
      </aside>
      <main className="main-content">
        <BeachGrid
          beaches={displayedBeaches}
          windData={windData}
          isBeachSuitable={isBeachSuitable}
        />
        {!isSubscribed && filteredBeaches.length > 1 && (
          <div className="subscription-prompt">
            <p>Subscribe to see {filteredBeaches.length - 1} more surf spots</p>
            <button onClick={handleSubscribe} className="subscribe-btn">
              Subscribe for $3/month
            </button>
          </div>
        )}
      </main>
      <aside className="wind-sidebar">
        <div className="wind-card">
          <div className="conditions">
            <div className="condition-item">
              <label>Wind Direction:</label>
              <div className="value-container">
                <span>
                  {isLoading
                    ? "Updating..."
                    : windData
                    ? windData.wind.direction
                    : "Loading..."}
                </span>
              </div>
            </div>
            <div className="condition-item">
              <label>Wave Height:</label>
              <div className="value-container">
                <span>
                  {isLoading
                    ? "Updating..."
                    : windData
                    ? `${windData.swell.height}m`
                    : ""}
                </span>
                {windData && (
                  <span className="rating">
                    {"⭐".repeat(Math.min(Math.ceil(windData.swell.height), 4))}
                  </span>
                )}
              </div>
            </div>
            <div className="condition-item">
              <label>Swell Direction:</label>
              <div className="value-container">
                <span>
                  {isLoading
                    ? "Updating..."
                    : windData
                    ? `${windData.swell.direction}° (${windData.swell.cardinalDirection})`
                    : "Loading..."}
                </span>
              </div>
            </div>
          </div>
          <div className="timestamp">
            {windData
              ? `Last updated: ${new Date(windData.timestamp).toLocaleString()}`
              : ""}
          </div>
          <form onSubmit={refreshData}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Refreshing..." : "Refresh"}
            </button>
          </form>
        </div>
      </aside>

      <style>
        {`
          .beach-container {
            display: grid;
            grid-template-columns: 300px 1fr 300px;
            gap: 2rem;
            padding: 2rem;
            max-width: 1600px;
            margin: 0 auto;
            position: relative;
          }

          .sidebar {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            height: fit-content;
            position: sticky;
            top: 2rem;
          }

          .wind-sidebar {
            position: sticky;
            top: 2rem;
            height: fit-content;
          }

          .main-content {
            min-width: 0;
          }

          .wind-card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .conditions {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
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
            width: 100%;
            background: #3498db;
            color: white;
            border: none;
            padding: 0.75rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: background-color 0.2s;
          }

          button:hover {
            background: #2980b9;
          }

          button:disabled {
            background: #bdc3c7;
            cursor: not-allowed;
          }

          @media (max-width: 1200px) {
            .beach-container {
              grid-template-columns: 1fr;
            }

            .sidebar,
            .wind-sidebar {
              position: static;
              width: 100%;
            }

            .wind-card {
              margin-bottom: 2rem;
            }

            .conditions {
              flex-direction: row;
              justify-content: space-around;
            }
          }

          .value-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
          }

          .rating {
            font-size: 0.8rem;
            color: #f1c40f;
            letter-spacing: 0.1em;
          }
        `}
      </style>
    </div>
  );
}
