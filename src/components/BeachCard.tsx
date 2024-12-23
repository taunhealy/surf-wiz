import type { Beach } from "../types/beaches";
import type { WindData } from "../types/wind";

interface BeachCardProps {
  beach: Beach;
  windData: WindData | null;
  isBeachSuitable: (beach: Beach, conditions: WindData) => any;
}

export default function BeachCard({
  beach,
  windData,
  isBeachSuitable,
}: BeachCardProps) {
  const suitability = windData ? isBeachSuitable(beach, windData) : null;

  return (
    <div className={`beach-card ${suitability?.suitable ? "suitable" : ""}`}>
      <h3>{beach.name}</h3>

      <div className="status">
        {suitability && (
          <div className="score">
            {suitability.score === 4
              ? "🏄‍♂️ PERFECT!"
              : suitability.score === 3
              ? "🏄‍♂️ Great"
              : suitability.score === 2
              ? "👍 Good"
              : suitability.score === 1
              ? "🤔 Fair"
              : "⚠️ Poor"}
            <span className="stars">{"⭐".repeat(suitability.score)}</span>
          </div>
        )}
      </div>

      <div className="details">
        <p>
          <strong>Wave Size:</strong> {beach.waveSize.min}-{beach.waveSize.max}m
        </p>
        <p>
          <strong>Difficulty:</strong> {beach.difficulty}
        </p>
        <p>
          <strong>Wave Type:</strong> {beach.waveType}
        </p>
        <p>
          <strong>Crime Risk:</strong>{" "}
          {beach.crimeLevel === "High"
            ? "💀"
            : beach.crimeLevel === "Medium"
            ? "⚠️"
            : "👮"}
        </p>
        <p>
          <strong>Shark Risk:</strong>{" "}
          {beach.sharkRisk === "High"
            ? "🦈🦈🦈"
            : beach.sharkRisk === "Medium"
            ? "🦈🦈"
            : "🦈"}
        </p>
        <p>
          <strong>Distance:</strong> {beach.distanceFromCT}km
        </p>
      </div>

      <style>{`
        .beach-card {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .beach-card.suitable {
          background: #e6ffe6;
        }

        .beach-card:hover {
          transform: translateY(-2px);
        }

        .status {
          margin: 0.5rem 0;
          font-weight: 500;
        }

        .score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stars {
          font-size: 0.8rem;
        }

        .details {
          margin-top: 1rem;
          font-size: 0.9rem;
        }

        .details p {
          margin: 0.25rem 0;
        }
      `}</style>
    </div>
  );
}
