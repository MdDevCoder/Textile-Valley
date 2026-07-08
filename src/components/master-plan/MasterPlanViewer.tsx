"use client";

import React, { useState, useEffect, useMemo } from "react";
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { PlotData, masterPlanPlots } from "@/lib/data/plots";
import { PlotLayer } from "./PlotLayer";
import { MapToolbar } from "./MapToolbar";
import { ZoomControls } from "./ZoomControls";
import { PlotPopup } from "./PlotPopup";
import { SearchX, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper component to utilize zoom controls programmatically
function SearchZoomController({ 
  searchQuery, 
  plots,
  setActivePlot
}: { 
  searchQuery: string; 
  plots: PlotData[];
  setActivePlot: (p: PlotData | null) => void;
}) {
  const { zoomToElement } = useControls();

  useEffect(() => {
    if (!searchQuery) return;
    const match = plots.find((p) => p.number.toLowerCase() === searchQuery.toLowerCase());
    if (match) {
      // Zoom to the element using its ID, which is rendered in PlotLayer
      zoomToElement(`plot-${match.id}`, 2, 800, "easeOutCubic");
      setActivePlot(match);
    }
  }, [searchQuery, plots, zoomToElement, setActivePlot]);

  return null;
}

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
    <div className="relative w-full h-[70vh] md:h-[85vh] bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-none"
          >
            <div className="bg-[#111] p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center max-w-sm">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-soft-gray">
                {searchQuery ? <SearchX size={32} /> : <Map size={32} />}
              </div>
              <h3 className="text-white font-heading text-2xl mb-2">No Plots Found</h3>
              <p className="text-soft-gray text-sm">
                {searchQuery 
                  ? `We couldn't find any plot matching "${searchQuery}".` 
                  : `There are currently no ${filter} plots available.`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
        panning={{ velocityDisabled: false, lockAxisX: false, lockAxisY: false }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <SearchZoomController 
              searchQuery={searchQuery} 
              plots={masterPlanPlots} // Search across all plots, not just filtered ones
              setActivePlot={setActivePlot}
            />
            
            <TransformComponent wrapperClass="!w-full !h-full cursor-grab active:cursor-grabbing">
              <div className="relative w-full h-full min-w-[1200px] min-h-[800px] flex items-center justify-center">
                {/* 
                  Base Image. Replace with an SVG or high-res image later.
                */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=2000&auto=format&fit=crop"
                  alt="Master Plan Layout"
                  className="w-full h-auto object-contain opacity-40 select-none pointer-events-none"
                  draggable={false}
                />
                
                {/* Interactive SVG/Div Layer */}
                <div className="absolute inset-0 z-10">
                  <PlotLayer 
                    plots={filteredPlots} 
                    activePlot={activePlot} 
                    setActivePlot={(plot) => {
                      setActivePlot(plot);
                      if (plot) {
                        // Optionally trigger a subtle pan to keep popup visible, 
                        // but auto-centering on click might be annoying if done every time.
                      }
                    }} 
                  />
                </div>
              </div>
            </TransformComponent>

            {/* Bottom Right Zoom Controls */}
            <div className="absolute bottom-6 right-6 z-20 hidden md:block">
              <ZoomControls 
                onZoomIn={() => zoomIn(0.4, 600, "easeOutCubic")} 
                onZoomOut={() => zoomOut(0.4, 600, "easeOutCubic")} 
                onReset={() => {
                  setActivePlot(null);
                  resetTransform(600, "easeOutCubic");
                }} 
              />
            </div>
          </>
        )}
      </TransformWrapper>

      {/* Floating Plot Details Popup */}
      <PlotPopup plot={activePlot} onClose={() => setActivePlot(null)} />
    </div>
  );
}
