import type { Metadata } from "next";
import { amenitiesData } from "@/lib/data";

export const metadata: Metadata = {
  title: "World-Class Amenities | Textile Valley",
  description: "Explore the state-of-the-art infrastructure at Textile Valley. 45m RCC roads, underground wiring, and premium COP gardens.",
  openGraph: {
    title: "World-Class Amenities | Textile Valley",
    description: "Explore the state-of-the-art infrastructure at Textile Valley. 45m RCC roads, underground wiring, and premium COP gardens.",
  },
};

export default function AmenitiesPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
            Industrial <span className="text-gold italic font-light">Infrastructure</span>
          </h1>
          <p className="text-soft-gray text-lg">
            We believe that premium businesses require premium environments. Every inch of Textile Valley is designed to support heavy industrial operations with elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity, idx) => (
            <div 
              key={amenity.id}
              className="group bg-black p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(197,160,89,0.1)] relative overflow-hidden"
            >
              {/* Subtle hover glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-gold font-heading text-xl font-bold">
                    {/* Placeholder icon text until actual SVG icons are provided */}
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>
                <h3 className="text-2xl text-white font-heading mb-3 group-hover:text-gold transition-colors">{amenity.title}</h3>
                <p className="text-soft-gray/80 text-sm">
                  Engineered to meet enterprise standards, ensuring reliability and operational continuity for your manufacturing unit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
