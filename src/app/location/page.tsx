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
    <main className="pt-24 min-h-screen bg-black relative">
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
            Strategic <span className="text-gold italic font-light">Location</span>
          </h1>
          <p className="text-soft-gray text-lg">
            Positioned at the nexus of South Gujarat&apos;s industrial corridor, ensuring seamless logistics and rapid transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1 flex flex-col justify-center gap-6">
            <h3 className="font-heading text-3xl text-white mb-4">Connectivity at your doorstep</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {distances.map((d) => (
                <div key={d.name} className="bg-[#111] border border-white/5 p-4 rounded-xl flex items-center justify-between hover:border-gold/30 transition-colors">
                  <span className="text-soft-gray">{d.name}</span>
                  <span className="text-gold font-numbers font-bold">{d.dist}</span>
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
