export interface Beach {
  name: string;
  region: "Western Cape" | "Eastern Cape" | "unknown";
  location: string;
  distanceFromCT: number;
  optimalWindDirections: string[];
  optimalSwellDirections: {
    min: number;
    max: number;
  };
  bestSeasons: string[];
  optimalTide:
    | "Low"
    | "Mid"
    | "High"
    | "All"
    | "Low to Mid"
    | "Mid to High"
    | "unknown";
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  waveType: string;
  waveSize: {
    min: number;
    max: number;
  };
  idealSwellPeriod: {
    min: number;
    max: number;
  };
  waterTemp: {
    summer: number;
    winter: number;
  };
  hazards: string[];
  crimeLevel: "Low" | "Medium" | "High";
  sharkRisk: "Low" | "Medium" | "High";
}

export const beachData: Beach[] = [
  {
    name: "Muizenberg",
    region: "Western Cape",
    location: "Muizenberg",
    distanceFromCT: 25,
    optimalWindDirections: ["NW", "N", "NE"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description: "Gentle beach break, perfect for beginners",
    difficulty: "Beginner",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 20,
      winter: 15,
    },
    hazards: ["Rip currents", "Crowds", "Sharks"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "Long Beach",
    region: "Western Cape",
    location: "Kommetjie",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "SSE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description: "Consistent waves, good for all levels",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Strong currents", "Sharks"],
    crimeLevel: "Low",
    sharkRisk: "Medium",
  },
  {
    name: "Llandudno",
    region: "Western Cape",
    location: "Llandudno",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "SSE", "E"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "unknown",
    description: "Powerful waves in beautiful setting",
    difficulty: "Advanced",
    waveType: "Beach Break",
    waveSize: {
      min: 0.6,
      max: 1.2,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rip currents", "Rocks", "Strong currents", "Sharks"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Big Bay",
    region: "Western Cape",
    location: "Big Bay",
    distanceFromCT: 35,
    optimalWindDirections: ["SE", "SSE", "S"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid",
    description: "Popular spot with multiple peaks",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Wind chop", "Kitesurfers"],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Dunes",
    region: "Western Cape",
    location: "Dunes",
    distanceFromCT: 40,
    optimalWindDirections: ["SSE", "SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description: "Fast waves with hollow sections",
    difficulty: "Advanced",
    waveType: "Beach Break",
    waveSize: {
      min: 0.6,
      max: 1.2,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rip currents", "Strong currents", "Shallow sandbanks"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "Scarborough",
    region: "Western Cape",
    location: "Scarborough",
    distanceFromCT: 35,
    optimalWindDirections: ["SE", "E", "NE"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid to High",
    description:
      "Powerful beach break with hollow waves, best at mid to low tide",
    difficulty: "Advanced",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Strong currents", "Sharks", "Remote location"],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Dungeons",
    region: "Western Cape",
    location: "Dungeons",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "SSE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Famous big wave spot, only for experienced surfers. Breaks best at 15-30ft",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: [
      "Big waves",
      "Strong currents",
      "Sharks",
      "Rocks",
      "Remote location",
    ],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Glen Beach",
    region: "Western Cape",
    location: "Glen Beach",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "SSE", "S"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid",
    description:
      "Wedgy peaks between Camps Bay and Clifton, works best with bigger swells",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Rocks", "Wind chop"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Kalk Bay Reef",
    region: "Western Cape",
    location: "Kalk Bay Reef",
    distanceFromCT: 35,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description: "Right-hand reef break, can get very hollow and powerful",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 0.6,
      max: 1.2,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Strong currents", "Sharks", "Shallow reef"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "Crayfish Factory",
    region: "Western Cape",
    location: "Crayfish Factory",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid",
    description:
      "Long right-hander that works best on bigger swells, relatively consistent",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Strong currents", "Remote location"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Betty's Bay",
    region: "Western Cape",
    location: "Betty's Bay",
    distanceFromCT: 95,
    optimalWindDirections: ["W", "NW"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Multiple peaks with both lefts and rights. Best during winter swells. Watch out for sharks.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Sharks", "Rip currents", "Remote location"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Pringle Bay",
    region: "Western Cape",
    location: "Pringle Bay",
    distanceFromCT: 85,
    optimalWindDirections: ["NW", "W", "SW"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid",
    description:
      "Protected bay offering good waves when the swell is big. Works best at mid to high tide.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Strong currents", "Remote location"],
    crimeLevel: "Low",
    sharkRisk: "Medium",
  },
  {
    name: "Elands Bay",
    region: "Western Cape",
    location: "Elands Bay",
    distanceFromCT: 220,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "World-class left-hand point break. Long walls and barrel sections on bigger swells.",
    difficulty: "Advanced",
    waveType: "Point Break",
    waveSize: {
      min: 0.6,
      max: 1.2,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Strong currents", "Remote location", "Sharks"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "Derdesteen",
    region: "Western Cape",
    location: "Derdesteen",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "SSE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Consistent beach break with multiple peaks. Good for all tides. Popular with locals.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Strong currents", "Wind chop"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Melkbos",
    region: "Western Cape",
    location: "Melkbos",
    distanceFromCT: 35,
    optimalWindDirections: ["SE", "SSE", "S"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Long stretch of beach with multiple peaks. Good for beginners when small, can handle size.",
    difficulty: "Beginner",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Wind chop", "Strong currents"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Kogel Bay",
    region: "Western Cape",
    location: "Kogel Bay",
    distanceFromCT: 75,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Powerful waves with multiple peaks along the bay. Infamous for sharks but quality waves.",
    difficulty: "Advanced",
    waveType: "Beach Break",
    waveSize: {
      min: 0.6,
      max: 1.2,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Sharks", "Strong currents", "Rip currents", "Remote location"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "Strand",
    region: "Western Cape",
    location: "Strand",
    distanceFromCT: 50,
    optimalWindDirections: ["W", "NW"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Long beach with multiple peaks. Protected from summer SE winds. Good for learners.",
    difficulty: "Beginner",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Wind chop", "Crowds"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Langebaan",
    region: "Western Cape",
    location: "Langebaan",
    distanceFromCT: 120,
    optimalWindDirections: ["S", "SW"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Lagoon waves, perfect for beginners. Only works on big WNW swells pushing into the lagoon.",
    difficulty: "Beginner",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Wind chop", "Kitesurfers", "Shallow sandbanks"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Witsands",
    region: "Western Cape",
    location: "Witsands",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Beach break with multiple peaks. Can get very good with winter groundswells.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Wind chop", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Hermanus",
    region: "Western Cape",
    location: "Hermanus",
    distanceFromCT: 120,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Several spots including reef and beach breaks. Best during winter months.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Sharks", "Rocks", "Strong currents"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Kommetjie",
    region: "Western Cape",
    location: "Kommetjie",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid",
    description:
      "Long right-hander with multiple sections. Works best on SW swells. Popular local spot.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Strong currents", "Rip currents"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Outer Kom",
    region: "Western Cape",
    location: "Outer Kom",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Powerful reef break that handles big swells. Long paddle out. Best at low tide.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Strong currents", "Big waves", "Sharks"],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Inner Kom",
    region: "Western Cape",
    location: "Inner Kom",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Protected point break, works well when Outer Kom is too big. Good for longboarding.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Rip currents", "Crowds"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Noordhoek",
    region: "Western Cape",
    location: "Noordhoek",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E", "NE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Long beach with multiple peaks. Best on bigger swells. Watch out for rips.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Strong currents", "Remote location", "Sharks"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Clovelly",
    region: "Western Cape",
    location: "Clovelly",
    distanceFromCT: 35,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Right-hand point break in False Bay. Works best in winter with NW winds.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Rip currents", "Wind chop"],
    crimeLevel: "Low",
    sharkRisk: "Medium",
  },
  {
    name: "Stilbaai",
    region: "Western Cape",
    location: "Stilbaai",
    distanceFromCT: 30,
    optimalWindDirections: ["SW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid",
    description:
      "Right-hand point break. Long walls and occasional barrels. Best at mid tide.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Strong currents", "Remote location", "Very Sharky"],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Misty Cliffs",
    region: "Western Cape",
    location: "Misty Cliffs",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low to Mid",
    description:
      "Heavy beach break with hollow waves. Best at low to mid tide. Strong currents.",
    difficulty: "Advanced",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Strong currents", "Rocks", "Remote location", "Sharks"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Buffels Bay",
    region: "Western Cape",
    location: "Buffels Bay",
    distanceFromCT: 35,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Protected bay with gentle waves. Good for beginners and longboarding.",
    difficulty: "Beginner",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Rocks", "Remote location"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Hawston 💀🔫",
    region: "Western Cape",
    location: "Hawston",
    distanceFromCT: 35,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Powerful reef break near Hermanus. Works best in winter swells. High crime risk area.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Strong currents", "Sharks", "Remote location"],
    crimeLevel: "High",
    sharkRisk: "High",
  },
  {
    name: "Yzerfontein",
    region: "Western Cape",
    location: "Yzerfontein",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Beach break with multiple peaks. Can handle big swells. Best in morning offshore.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: [
      "Rip currents",
      "Wind chop",
      "Strong currents",
      "Remote location",
    ],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Off The Wall",
    region: "Western Cape",
    location: "Off The Wall",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Right-hand reef break next to Kommetjie. Fast, hollow waves. Best at low tide.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Strong currents", "Shallow reef", "Sharks"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Horse Trails",
    region: "Western Cape",
    location: "Horse Trails",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Right-hand point break near Noordhoek. Works on bigger swells. Long walk required.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Remote location", "Rip currents", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Cemetery",
    region: "Western Cape",
    location: "Cemetery",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Right-hand point break in Kalk Bay. Works best in winter with clean groundswells.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Strong currents", "Shallow reef"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Caves",
    region: "Western Cape",
    location: "Caves",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Heavy reef break near Crayfish Factory. Only works on big swells. Expert only.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Strong currents", "Big waves", "Remote location"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "The Hoek",
    region: "Western Cape",
    location: "The Hoek",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid to High",
    description:
      "Right-hand point break. Long walls on bigger swells. Best at mid to high tide.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Strong currents", "Rip currents"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Sunset Reef",
    region: "Western Cape",
    location: "Sunset Reef",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "SSE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Big wave reef break. Only works on large swells. Long paddle out required.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Big waves", "Strong currents", "Sharks", "Remote location"],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Doodles",
    region: "Western Cape",
    location: "Doodles",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "SSE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid",
    description:
      "Beach break peaks between Blouberg and Big Bay. Best at mid tide.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Wind chop", "Kitesurfers"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Silverstroom",
    region: "Western Cape",
    location: "Silverstroom",
    distanceFromCT: 35,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Remote beach break north of Melkbos. Multiple peaks. Best in morning.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Remote location", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Boneyards",
    region: "Western Cape",
    location: "Boneyards",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Heavy reef break near Kommetjie. Fast, shallow waves. Expert only.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Shallow reef", "Strong currents", "Sharks"],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Farmers",
    region: "Western Cape",
    location: "Farmers",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Right-hand point break near Noordhoek. Long walk through private property required.",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Remote location", "Rocks", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Nine Miles",
    region: "Western Cape",
    location: "Nine Miles",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Remote beach break with multiple peaks. Long drive and walk required.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Remote location", "Rip currents", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Krans",
    region: "Western Cape",
    location: "Krans",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Heavy reef break. Only works on large swells. Sharp rocks and strong currents.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Strong currents", "Big waves", "Remote location"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "Rivermouth",
    region: "Western Cape",
    location: "Rivermouth",
    distanceFromCT: 35,
    optimalWindDirections: ["SE", "SSE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Sand-bottom break near river mouth. Changes with sand movements. Best after rain.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Strong currents", "Changing sandbanks"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Boilers",
    region: "Western Cape",
    location: "Boilers",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid to High",
    description:
      "Right-hand reef break. Shallow reef. Works best on bigger swells at mid tide.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Shallow reef", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Paranoia",
    region: "Western Cape",
    location: "Paranoia",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Heavy right-hander. Only works on large swells. Very localized.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Big waves", "Rocks", "Strong currents", "Remote location"],
    crimeLevel: "Medium",
    sharkRisk: "High",
  },
  {
    name: "Containers",
    region: "Western Cape",
    location: "Containers",
    distanceFromCT: 35,
    optimalWindDirections: ["SE", "SSE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Mid to High",
    description:
      "Beach break near industrial area. Best at mid to high tide. Watch for rips.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Wind chop", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Dunes Right",
    region: "Western Cape",
    location: "Dunes Right",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "ESE"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Heavy right-hander at the end of Long Beach. Works best at low tide with big swell.",
    difficulty: "Advanced",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Strong currents", "Shallow sandbanks", "Rip currents"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Milnerton",
    region: "Western Cape",
    location: "Milnerton",
    distanceFromCT: 30,
    optimalWindDirections: ["SE", "SSE"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Beach break near lighthouse. Multiple peaks, best early morning before wind.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Wind chop", "Strong currents"],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Monwabisi 💀🔫",
    region: "Western Cape",
    location: "Monwabisi",
    distanceFromCT: 40,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "False Bay reef break. Powerful waves but dangerous area. Best with winter swells.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Strong currents", "Rocks", "Sharks", "Remote location"],
    crimeLevel: "High",
    sharkRisk: "High",
  },
  {
    name: "Macassar 💀🔫",
    region: "Western Cape",
    location: "Macassar",
    distanceFromCT: 35,
    optimalWindDirections: ["W", "NW"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Beach break with multiple peaks. Works well in winter. Watch for strong currents.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rip currents", "Strong currents", "Remote location"],
    crimeLevel: "High",
    sharkRisk: "Low",
  },
  {
    name: "Bikini Beach",
    region: "Western Cape",
    location: "Bikini Beach",
    distanceFromCT: 30,
    optimalWindDirections: ["W", "NW"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Protected corner in Gordon's Bay. Good for beginners when small. Best in winter.",
    difficulty: "Beginner",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Rip currents", "Wind chop"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Rooiels",
    region: "Western Cape",
    location: "Rooiels",
    distanceFromCT: 35,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Right-hand point break. Works on bigger swells. Rocky entry and exit.",
    difficulty: "Advanced",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Strong currents", "Remote location"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "Glencairn",
    region: "Western Cape",
    location: "Glencairn",
    distanceFromCT: 30,
    optimalWindDirections: ["NW", "W"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Beach break in False Bay. Protected from SE winds. Good for longboarding.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Rocks", "Rip currents", "Wind chop"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
  {
    name: "36",
    region: "Western Cape",
    location: "36",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Heavy reef break near Kommetjie. Shallow reef. Only works on specific swells.",
    difficulty: "Advanced",
    waveType: "Reef Break",
    waveSize: {
      min: 1.5,
      max: 3,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: ["Rocks", "Shallow reef", "Strong currents", "Big waves"],
    crimeLevel: "Low",
    sharkRisk: "High",
  },
  {
    name: "Platboom",
    region: "Western Cape",
    location: "Platboom",
    distanceFromCT: 35,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 225,
      max: 315,
    },
    bestSeasons: ["winter"],
    optimalTide: "Low",
    description:
      "Remote beach break in Cape Point reserve. Multiple peaks. Watch for wildlife.",
    difficulty: "Intermediate",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 18,
      winter: 14,
    },
    hazards: ["Remote location", "Rip currents", "Strong currents", "Sharks"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Dias Beach",
    region: "Western Cape",
    location: "Dias Beach",
    distanceFromCT: 40,
    optimalWindDirections: ["SE", "E"],
    optimalSwellDirections: {
      min: 157.5,
      max: 247.5,
    },
    bestSeasons: ["winter"],
    optimalTide: "High",
    description:
      "Secluded break at Cape Point. Long stairs access. Works on bigger swells.",
    difficulty: "Advanced",
    waveType: "Beach Break",
    waveSize: {
      min: 0.3,
      max: 0.6,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 16,
      winter: 12,
    },
    hazards: [
      "Remote location",
      "Difficult access",
      "Strong currents",
      "Sharks",
    ],
    crimeLevel: "Medium",
    sharkRisk: "Low",
  },
  {
    name: "Jeffreys Bay",
    region: "Eastern Cape",
    location: "Jeffreys Bay",
    distanceFromCT: 750,
    optimalWindDirections: ["SW", "W", "NW"],
    optimalSwellDirections: {
      min: 180,
      max: 270,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "World-famous right-hand point break, considered one of the best waves in the world",
    difficulty: "Advanced",
    waveType: "Point Break",
    waveSize: {
      min: 0.6,
      max: 3.0,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 22,
      winter: 17,
    },
    hazards: ["Strong currents", "Rocks", "Crowds", "Sharp reef"],
    crimeLevel: "Medium",
    sharkRisk: "Medium",
  },
  {
    name: "Cape St Francis",
    region: "Eastern Cape",
    location: "Cape St Francis",
    distanceFromCT: 730,
    optimalWindDirections: ["W", "NW"],
    optimalSwellDirections: {
      min: 180,
      max: 270,
    },
    bestSeasons: ["winter"],
    optimalTide: "All",
    description:
      "Perfect right-hand point break, made famous by The Endless Summer",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 2.0,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 22,
      winter: 17,
    },
    hazards: ["Rocks", "Strong currents"],
    crimeLevel: "Low",
    sharkRisk: "Medium",
  },
  {
    name: "Victoria Bay",
    region: "Eastern Cape",
    location: "Victoria Bay",
    distanceFromCT: 450,
    optimalWindDirections: ["SW", "W"],
    optimalSwellDirections: {
      min: 180,
      max: 270,
    },
    bestSeasons: ["summer", "winter"],
    optimalTide: "All",
    description:
      "Protected right-hand point break, consistent and suitable for all levels",
    difficulty: "Intermediate",
    waveType: "Point Break",
    waveSize: {
      min: 0.3,
      max: 2.0,
    },
    idealSwellPeriod: {
      min: 12,
      max: 24,
    },
    waterTemp: {
      summer: 21,
      winter: 16,
    },
    hazards: ["Rocks", "Crowds"],
    crimeLevel: "Low",
    sharkRisk: "Low",
  },
];
