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
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-fit z-20 flex flex-col md:flex-row gap-4 items-center bg-white/90 backdrop-blur-xl border border-stone-light rounded-[2rem] p-3 shadow-2xl">
      
      {/* Search Bar */}
      <div className="relative w-full md:w-64 flex items-center bg-bone rounded-xl overflow-hidden border border-transparent focus-within:border-stone-light transition-colors">
        <Search className="absolute left-3 text-stone w-4 h-4" />
        <input
          type="text"
          placeholder="Search plot no..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-charcoal text-sm font-medium pl-10 pr-4 py-3 outline-none placeholder:text-stone/70"
        />
      </div>

      <div className="hidden md:block w-[1px] h-8 bg-stone-light" />

      {/* Filter Buttons */}
      <div className="flex w-full md:w-auto justify-between md:justify-start md:gap-2 overflow-x-auto no-scrollbar">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "px-5 py-2.5 text-xs md:text-sm rounded-xl whitespace-nowrap transition-all duration-300 font-bold",
              filter === f.id
                ? "bg-charcoal text-white shadow-xl"
                : "text-stone hover:text-charcoal hover:bg-stone-light/30"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
