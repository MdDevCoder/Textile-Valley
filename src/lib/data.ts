// Mock CMS Data

export const siteConfig = {
  name: "Textile Valley",
  description: "Premium Industrial Plots Strategically Located Near Surat.",
  contact: {
    phone1: "+91 9712345353",
    phone2: "+91 7024150241",
    email: "inquiry@textilevalley.com", // Placeholder
    address: "Block no 160, 16,17,18,19, near lajpore jail, lajpore, surat",
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
  { id: "na-plan", title: "NA Plan Pass", icon: "na-plan", description: "Title-clear non-agricultural plots ready for immediate industrial development." },
  { id: "rcc-roads", title: "RCC Roads", icon: "rcc-roads", description: "Heavy-duty 45m wide RCC roads designed for seamless heavy vehicle movement." },
  { id: "cop-garden", title: "COP Garden", icon: "cop-garden", description: "Lush green Common Open Plots providing a refreshing environment for your workforce." },
  { id: "gutter-line", title: "Gutter Line", icon: "gutter-line", description: "Enterprise-grade drainage and sewage systems for clean and safe operations." },
  { id: "underground-wiring", title: "Underground Wiring", icon: "underground-wiring", description: "Reliable underground electrical infrastructure ensuring uninterrupted power supply." },
  { id: "street-light", title: "Street Light", icon: "street-light", description: "Bright LED street illumination across the entire park for 24/7 safe operations." },
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
