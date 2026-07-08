"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface MapToolbarProps {
  filter: string;
  setFilter: (f: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export function MapToolbar({ filter, setFilter, searchQuery, setSearchQuery }: MapToolbarProps) {
  const filters = [
    { id: "all", label: "All Plots" },
    { id: "available", label: "Available" },
    { id: "reserved", label: "Reserved" },
    { id: "sold", label: "Sold Out" },
  ];

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-20 flex flex-col md:flex-row gap-4 items-center bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
      
      {/* Search Bar */}
      <div className="relative w-full md:w-1/3 flex items-center bg-white/5 rounded-xl overflow-hidden border border-white/5 focus-within:border-gold/50 transition-colors">
        <Search className="absolute left-3 text-soft-gray w-4 h-4" />
        <input
          type="text"
          placeholder="Search plot no..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-white text-sm pl-10 pr-4 py-3 outline-none placeholder:text-soft-gray/50"
        />
      </div>

      <div className="hidden md:block w-[1px] h-8 bg-white/10" />

      {/* Filter Buttons */}
      <div className="flex w-full md:w-2/3 justify-between md:justify-start md:gap-2 overflow-x-auto no-scrollbar">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "px-4 py-2 text-xs md:text-sm rounded-lg whitespace-nowrap transition-all duration-300 font-medium",
              filter === f.id
                ? "bg-gold text-black shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                : "text-soft-gray hover:text-white hover:bg-white/5"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
