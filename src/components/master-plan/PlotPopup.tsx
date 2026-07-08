"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Ruler, Maximize, Map, MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlotData, getStatusBorder } from "@/lib/data/plots";
import React from "react";

interface PlotPopupProps {
  plot: PlotData | null;
  onClose: () => void;
}

export const PlotPopup = React.memo(function PlotPopup({ plot, onClose }: PlotPopupProps) {
  return (
    <AnimatePresence>
      {plot && (
        <motion.div
          key="plot-popup"
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.y > 100 || velocity.y > 500) {
              onClose();
            }
          }}
          className="absolute bottom-0 left-0 right-0 md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-50 w-full md:w-[380px] bg-[#0A0A0A]/90 backdrop-blur-2xl border-t md:border border-white/10 md:rounded-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.4)] md:shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Mobile Drag Handle */}
          <div className="w-full flex justify-center pt-3 pb-1 md:hidden touch-none">
            <div className="w-12 h-1.5 bg-white/20 rounded-full" />
          </div>

          {/* Luxury Status Border */}
          <div 
            className="absolute top-0 left-0 w-full h-1" 
            style={{ backgroundColor: getStatusBorder(plot.status) }} 
          />

          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-soft-gray mb-1">Plot Details</div>
              <h3 className="font-heading text-4xl md:text-5xl text-gold m-0 font-bold leading-none tracking-tight">
                {plot.number}
              </h3>
            </div>
            
            <div className="flex flex-col items-end gap-3">
              <button
                onClick={onClose}
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors hidden md:block"
                aria-label="Close details"
              >
                <X size={16} />
              </button>
              <span 
                className="px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-full bg-white/5 border border-white/10" 
                style={{ color: getStatusBorder(plot.status) }}
              >
                {plot.status}
              </span>
            </div>
          </div>

          <div className="px-6 pb-6 pt-2">
            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-soft-gray/60">
                  <Maximize size={14} />
                  <span className="text-[10px] uppercase tracking-wider">Area</span>
                </div>
                <div className="text-white font-medium text-lg">{plot.areaSqYd}</div>
                <div className="text-xs text-soft-gray/50">Sq. Yards</div>
              </div>

              <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-soft-gray/60">
                  <Ruler size={14} />
                  <span className="text-[10px] uppercase tracking-wider">Dimensions</span>
                </div>
                <div className="text-white font-medium text-lg">{plot.dimensions}</div>
                <div className="text-xs text-soft-gray/50">LxW</div>
              </div>

              <div className="col-span-2 bg-black/50 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Map size={16} className="text-soft-gray/60" />
                  <div>
                    <div className="text-[10px] text-soft-gray/60 uppercase tracking-wider">Road Width</div>
                    <div className="text-white font-medium text-sm">{plot.roadWidth}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              {plot.status === "available" ? (
                <>
                  <Button className="w-full h-12 shadow-lg shadow-gold/20">
                    <Info size={16} className="mr-2" />
                    Inquire Availability
                  </Button>
                  <Button variant="outline" className="w-full h-12 border-green-500/30 hover:border-green-500 hover:bg-green-500/10 text-white group">
                    <MessageCircle size={16} className="mr-2 text-green-500 group-hover:scale-110 transition-transform" />
                    Chat on WhatsApp
                  </Button>
                </>
              ) : (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center text-sm text-soft-gray">
                  This plot is currently {plot.status}. <br/>
                  <a href="/contact" className="text-gold hover:underline mt-1 inline-block">Contact us for similar plots</a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
