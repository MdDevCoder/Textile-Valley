"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PlotData, getStatusColor, getStatusBorder } from "@/lib/data/plots";
import { cn } from "@/lib/utils";
import React from "react";

interface PlotLayerProps {
  plots: PlotData[];
  activePlot: PlotData | null;
  setActivePlot: (plot: PlotData | null) => void;
}

export const PlotLayer = React.memo(function PlotLayer({ plots, activePlot, setActivePlot }: PlotLayerProps) {
  return (
    <div className="absolute inset-0 w-full h-full" role="region" aria-label="Interactive Plot Map">
      <AnimatePresence>
        {plots.map((plot) => {
          const isActive = activePlot?.id === plot.id;
          
          return (
            <motion.button
              key={plot.id}
              id={`plot-${plot.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} // Luxury ease
              onClick={(e) => {
                e.stopPropagation();
                setActivePlot(isActive ? null : plot);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  setActivePlot(isActive ? null : plot);
                }
              }}
              aria-label={`Plot ${plot.number}, ${plot.status}, ${plot.areaSqYd} square yards`}
              aria-pressed={isActive}
              className={cn(
                "absolute cursor-pointer group flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                isActive ? "z-50" : "z-10 hover:z-40"
              )}
              style={{
                left: `${plot.x}%`,
                top: `${plot.y}%`,
                width: `${plot.width}%`,
                height: `${plot.height}%`,
                transform: `rotate(${plot.rotation || 0}deg)`,
                backgroundColor: isActive ? getStatusBorder(plot.status) : getStatusColor(plot.status),
                border: `1px solid ${getStatusBorder(plot.status)}`,
                boxShadow: isActive ? `0 4px 24px ${getStatusBorder(plot.status)}` : "none",
                transition: "background-color 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
              }}
            >
              {/* Plot Number Label */}
              <div className={cn(
                "font-numbers font-bold text-white transition-opacity duration-500 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                isActive ? "opacity-100 text-sm md:text-base" : "opacity-0 group-hover:opacity-100 text-xs md:text-sm"
              )}>
                {plot.number}
              </div>
              
              {/* Hover Luxury Border Animation (no aggressive scaling) */}
              <div 
                className="absolute inset-0 border border-white opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" 
                style={{ 
                  boxShadow: "inset 0 0 10px rgba(255,255,255,0.2)"
                }} 
              />
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
});
