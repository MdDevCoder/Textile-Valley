import type { Metadata } from "next";
import { LocationMap } from "@/components/sections/LocationMap";

export const metadata: Metadata = {
  title: "Location Advantage | Textile Valley",
  description: "Strategically located near Surat, Palsana, and Navsari. Excellent connectivity for logistics and transport.",
};

export default function LocationPage() {
  const distances = [
    { name: "Surat City", dist: "10 KM" },
    { name: "Palsana", dist: "10 KM" },
    { name: "Navsari", dist: "15 KM" },
    { name: "Vesma", dist: "10 KM" },
    { name: "Sachin GIDC", dist: "12 KM" },
  ];

  return (
    <main className="pt-24 min-h-screen bg-white relative">
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-charcoal mb-6 font-bold tracking-tighter">
            Strategic <span className="text-forest italic font-light">Location</span>
          </h1>
          <p className="text-stone font-medium text-lg">
            Positioned at the nexus of South Gujarat&apos;s industrial corridor, ensuring seamless logistics and rapid transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 flex flex-col justify-center gap-6">
            <h3 className="font-heading text-3xl font-bold text-charcoal mb-4">Connectivity at your doorstep</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {distances.map((d) => (
                <div key={d.name} className="bg-bone border border-stone-light p-4 rounded-xl flex items-center justify-between hover:border-forest/50 transition-colors shadow-sm">
                  <span className="text-stone font-semibold">{d.name}</span>
                  <span className="text-forest font-numbers font-bold text-lg">{d.dist}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <LocationMap />
          </div>
        </div>
      </div>
    </main>
  );
}
