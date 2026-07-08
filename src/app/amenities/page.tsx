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
    <main className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-block border border-stone-light bg-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-stone mb-6 shadow-sm">
            Facilities
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-charcoal mb-6 font-bold tracking-tighter leading-[0.9]">
            Industrial <br />
            <span className="text-stone">Infrastructure.</span>
          </h1>
          <p className="text-stone font-medium text-lg max-w-lg mx-auto">
            We believe that premium businesses require premium environments. Every inch of Textile Valley is designed to support heavy industrial operations with elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {amenitiesData.map((amenity, idx) => (
            <div 
              key={amenity.id}
              className="group bg-bone p-10 rounded-[2rem] border border-stone-light hover:border-stone transition-all duration-500 hover:shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white border border-stone-light flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <div className="text-forest font-numbers text-xl font-bold">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>
                <h3 className="text-2xl text-charcoal font-bold mb-4">{amenity.title}</h3>
                <p className="text-stone font-medium text-sm leading-relaxed">
                  {amenity.description || "Engineered to meet enterprise standards, ensuring reliability and operational continuity for your manufacturing unit."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
