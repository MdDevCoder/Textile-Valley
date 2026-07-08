import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Manrope, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Textile Valley",
    default: "Textile Valley | Premium Industrial Park in South Gujarat",
  },
  description: "India's most premium industrial park offering title-clear plots, 45m RCC roads, and world-class manufacturing infrastructure near Surat.",
  metadataBase: new URL("https://textilevalley.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://textilevalley.in",
    siteName: "Textile Valley",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Textile Valley Industrial Park",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Textile Valley | Premium Industrial Park",
    description: "South Gujarat's finest industrial ecosystem.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Textile Valley",
  image: "https://textilevalley.in/og-image.jpg",
  "@id": "https://textilevalley.in",
  url: "https://textilevalley.in",
  telephone: "+919712345353",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block no 160, 16, 17, 18, 19, near lajpore jail, lajpore",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.0772,
    longitude: 72.9376,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col selection:bg-forest/20 selection:text-forest-light overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
