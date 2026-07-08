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

export const PlotLayer = React.memo(function PlotLayer({ plots: initialPlots, activePlot, setActivePlot }: PlotLayerProps) {
  // --- TEMPORARY EDIT MODE ---
  const EDIT_MODE = false; 
  const [plots, setPlots] = React.useState(initialPlots);
  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    setPlots(initialPlots);
  }, [initialPlots]);

  const handlePointerDown = (plotId: string, pointIndex: number, e: React.PointerEvent) => {
    if (!EDIT_MODE) return;
    e.stopPropagation();
    const svg = svgRef.current;
    if (!svg) return;

    const onPointerMove = (moveEvent: PointerEvent) => {
      const rect = svg.getBoundingClientRect();
      const x = ((moveEvent.clientX - rect.left) / rect.width) * 100;
      const y = ((moveEvent.clientY - rect.top) / rect.height) * 100;
      
      setPlots(prev => prev.map(p => {
        if (p.id !== plotId) return p;
        const newPoints = [...p.points];
        newPoints[pointIndex] = [parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))];
        return { ...p, points: newPoints };
      }));
    };

    const onPointerUp = () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  return (
    <div className="absolute inset-0 w-full h-full" role="region" aria-label="Interactive Plot Map">
      
      {EDIT_MODE && (
        <button 
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full z-50 shadow-xl pointer-events-auto"
          onClick={() => {
            console.log(JSON.stringify(plots, null, 2));
            navigator.clipboard.writeText(JSON.stringify(plots, null, 2));
            alert("JSON copied to clipboard! Paste it directly into src/lib/data/plots.ts to save your traced layout.");
          }}
        >
          COPY TRACED JSON
        </button>
      )}

      <svg 
        ref={svgRef}
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="w-full h-full absolute inset-0 touch-none"
      >
        <AnimatePresence>
          {plots.map((plot) => {
            const isActive = activePlot?.id === plot.id;
            const pointsStr = plot.points.map(p => p.join(',')).join(' ');
            
            return (
              <motion.polygon
                key={plot.id}
                id={`plot-${plot.id}`}
                points={pointsStr}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
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
                tabIndex={0}
                aria-label={`Plot ${plot.number}, ${plot.status}, ${plot.areaSqYd} square yards`}
                aria-pressed={isActive}
                className={cn(
                  "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-forest",
                  isActive ? "z-50" : "z-10 hover:z-40"
                )}
                style={{
                  fill: isActive ? getStatusBorder(plot.status) : getStatusColor(plot.status),
                  stroke: getStatusBorder(plot.status),
                  strokeWidth: isActive ? 0.3 : 0.15,
                  vectorEffect: "non-scaling-stroke", // Keeps stroke thin regardless of zoom
                  transition: "fill 0.4s ease, stroke-width 0.4s ease",
                  transformOrigin: "center"
                }}
                whileHover={{
                  fill: "rgba(255,255,255,0.2)",
                  strokeWidth: 0.25
                }}
              />
            );
          })}
          
          {/* Render Edit Handles */}
          {EDIT_MODE && activePlot && plots.find(p => p.id === activePlot.id)?.points.map((p, i) => (
            <circle
              key={`handle-${i}`}
              cx={p[0]}
              cy={p[1]}
              r="0.4"
              fill="red"
              stroke="white"
              strokeWidth="0.1"
              onPointerDown={(e) => handlePointerDown(activePlot.id, i, e)}
              className="cursor-move z-[60] hover:r-1 transition-all"
            />
          ))}
        </AnimatePresence>
      </svg>
      
      {/* Number Labels (rendered as HTML elements over the SVG for better typography) */}
      <div className="absolute inset-0 pointer-events-none">
        {plots.map((plot) => {
          const isActive = activePlot?.id === plot.id;
          
          // Calculate center point for the label
          const centerX = plot.points.reduce((sum, p) => sum + p[0], 0) / plot.points.length;
          const centerY = plot.points.reduce((sum, p) => sum + p[1], 0) / plot.points.length;
          
          return (
            <div
              key={`label-${plot.id}`}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 font-numbers font-bold transition-opacity duration-500 drop-shadow-md",
                isActive ? "opacity-100 text-white text-xs md:text-sm" : "opacity-0 text-charcoal text-[10px] md:text-xs"
              )}
              style={{
                left: `${centerX}%`,
                top: `${centerY}%`,
              }}
            >
              {plot.number.split('-')[1] || plot.number}
            </div>
          );
        })}
      </div>
    </div>
  );
});
