"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const MapWithNoSSR = dynamic(() => import("@/components/ui/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#111] flex items-center justify-center border border-white/10 rounded-2xl">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <MapPin className="text-gold/50" size={32} />
        <div className="text-soft-gray/50 text-sm tracking-widest uppercase">Loading Map...</div>
      </div>
    </div>
  ),
});

export function LocationMap() {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden relative z-10 shadow-2xl">
      <MapWithNoSSR />
    </div>
  );
}
