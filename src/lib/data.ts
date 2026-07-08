// Mock CMS Data

export const siteConfig = {
  name: "Textile Valley",
  description: "Premium Industrial Plots Strategically Located Near Surat.",
  contact: {
    phone1: "+91 9712345353",
    phone2: "+91 7024150241",
    email: "inquiry@textilevalley.com", // Placeholder
    address: "Block No. 160, 16, 17, 18, 19, Near Lajpore Jail, Lajpore, Surat",
    whatsapp: "+919712345353", // Using primary phone
  },
  social: {
    instagram: "https://instagram.com/textilevalley",
    linkedin: "https://linkedin.com/company/textilevalley",
    facebook: "https://facebook.com/textilevalley",
  },
};

export const masterPlanData = {
  totalPlots: 35,
  availablePlots: 12,
  reservedPlots: 5,
  soldPlots: 18,
  plots: [
    { id: 1, number: "1", area: "1000", roadWidth: "45.00 MT", status: "available" },
    { id: 2, number: "2", area: "1200", roadWidth: "45.00 MT", status: "sold" },
    // more plots will be populated later
  ],
};

export const amenitiesData = [
  { id: "na-plan", title: "NA Plan Pass", icon: "na-plan" },
  { id: "rcc-roads", title: "RCC Roads", icon: "rcc-roads" },
  { id: "cop-garden", title: "COP Garden", icon: "cop-garden" },
  { id: "gutter-line", title: "Gutter Line", icon: "gutter-line" },
  { id: "underground-wiring", title: "Underground Wiring", icon: "underground-wiring" },
  { id: "street-light", title: "Street Light", icon: "street-light" },
];

export const statisticsData = [
  { id: "area", value: "50+", label: "Acres of Development" },
  { id: "plots", value: "35", label: "Premium Plots" },
  { id: "roads", value: "45m", label: "Wide DP Roads" },
  { id: "distance", value: "10km", label: "From Surat City" },
];

export const timelineData = [
  { year: "2024", title: "Project Launch", description: "Inauguration and initial plotting." },
  { year: "2025", title: "Infrastructure Development", description: "Completion of RCC roads and underground wiring." },
  { year: "2026", title: "First Occupancy", description: "Initial factories and warehouses begin operations." },
];
