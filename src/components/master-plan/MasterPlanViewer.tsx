"use client";
import React, { useState, useMemo } from "react";
import { PlotData, masterPlanPlots } from "@/lib/data/plots";
import { PlotLayer } from "./PlotLayer";
import { MapToolbar } from "./MapToolbar";
import { PlotPopup } from "./PlotPopup";
import { SearchX, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MasterPlanViewer() {
  const [activePlot, setActivePlot] = useState<PlotData | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlots = useMemo(() => {
    return masterPlanPlots.filter((plot) => {
      const matchesFilter = filter === "all" || plot.status === filter;
      const matchesSearch = plot.number.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <div className="relative w-full h-auto bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-stone-light shadow-2xl">
      {/* Top Toolbar */}
      <MapToolbar 
        filter={filter} 
        setFilter={setFilter} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
      />

      {/* Empty State Overlay */}
      <AnimatePresence>
        {filteredPlots.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/60 backdrop-blur-md pointer-events-none"
          >
            <div className="bg-white p-8 rounded-3xl border border-stone-light shadow-2xl flex flex-col items-center text-center max-w-sm">
              <div className="w-16 h-16 rounded-full bg-bone flex items-center justify-center mb-4 text-stone">
                {searchQuery ? <SearchX size={32} /> : <Map size={32} />}
              </div>
              <h3 className="text-charcoal font-bold text-2xl mb-2">No Plots Found</h3>
              <p className="text-stone font-medium text-sm">
                {searchQuery 
                  ? `We couldn't find any plot matching "${searchQuery}".` 
                  : `There are currently no ${filter} plots available.`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-auto pt-24 pb-4 px-4 md:pt-28 md:pb-8 md:px-8 flex items-center justify-center">
        {/* Aspect Ratio Container (3:2) to keep image and plots perfectly aligned */}
        <div className="relative w-full max-w-[1400px] mx-auto" style={{ aspectRatio: '3/2' }}>
          {/* Base Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/img2.jpg"
            alt="Master Plan Layout"
            className="absolute inset-0 w-full h-full object-contain opacity-90 select-none pointer-events-none"
            draggable={false}
          />
          
          {/* Interactive SVG/Div Layer */}
          <div className="absolute inset-0 z-10 w-full h-full">
            <PlotLayer 
              plots={filteredPlots} 
              activePlot={activePlot} 
              setActivePlot={(plot) => {
                setActivePlot(plot);
              }} 
            />
          </div>
        </div>
      </div>

      {/* Floating Plot Details Popup */}
      <PlotPopup plot={activePlot} onClose={() => setActivePlot(null)} />
    </div>
  );
}
