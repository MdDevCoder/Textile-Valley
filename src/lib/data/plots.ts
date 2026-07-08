export type PlotStatus = "available" | "reserved" | "sold" | "future";

export interface PlotData {
  id: string;
  number: string;
  areaSqYd: number;
  dimensions: string;
  roadWidth: string;
  status: PlotStatus;
  // SVG coordinates for interactivity (percentages to remain responsive)
  x: number; 
  y: number;
  width: number;
  height: number;
  rotation?: number;
}

export const masterPlanPlots: PlotData[] = [
  // Mock data for initial layout based on the brochure
  {
    id: "plot-1",
    number: "1",
    areaSqYd: 666.99,
    dimensions: "153' x 118'",
    roadWidth: "45.00 MT. D.P. ROAD",
    status: "available",
    x: 35,
    y: 35,
    width: 6,
    height: 8,
    rotation: -15,
  },
  {
    id: "plot-2",
    number: "2",
    areaSqYd: 560.42,
    dimensions: "154' x 101'",
    roadWidth: "45.00 MT. D.P. ROAD",
    status: "reserved",
    x: 42,
    y: 34,
    width: 3,
    height: 8,
    rotation: -15,
  },
  {
    id: "plot-3",
    number: "3",
    areaSqYd: 420.00,
    dimensions: "181' x 80'",
    roadWidth: "45.00 MT. D.P. ROAD",
    status: "sold",
    x: 46,
    y: 33,
    width: 3,
    height: 8,
    rotation: -15,
  },
  {
    id: "plot-26",
    number: "26",
    areaSqYd: 236.48,
    dimensions: "121' x 50'",
    roadWidth: "18.00 MT. WIDE ROAD",
    status: "future",
    x: 75,
    y: 40,
    width: 5,
    height: 3,
  },
  // Add more plots as needed to demonstrate functionality
];

export const getStatusColor = (status: PlotStatus) => {
  switch (status) {
    case "available":
      return "rgba(46, 204, 113, 0.4)"; // Green
    case "reserved":
      return "rgba(241, 196, 15, 0.4)"; // Yellow/Gold
    case "sold":
      return "rgba(231, 76, 60, 0.4)"; // Red
    case "future":
      return "rgba(149, 165, 166, 0.4)"; // Gray
    default:
      return "transparent";
  }
};

export const getStatusBorder = (status: PlotStatus) => {
  switch (status) {
    case "available":
      return "rgba(46, 204, 113, 1)";
    case "reserved":
      return "rgba(241, 196, 15, 1)";
    case "sold":
      return "rgba(231, 76, 60, 1)";
    case "future":
      return "rgba(149, 165, 166, 1)";
    default:
      return "rgba(255,255,255,0.2)";
  }
};
