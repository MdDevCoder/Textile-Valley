import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://textilevalley.in";
  
  const staticRoutes = [
    "",
    "/about-us",
    "/amenities",
    "/why-invest",
    "/location",
    "/gallery",
    "/contact",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
