import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Textile Valley",
    short_name: "Textile Valley",
    description: "Premium Industrial Park in South Gujarat",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#C5A059",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
