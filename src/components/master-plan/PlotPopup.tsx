"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
          className="absolute bottom-0 left-0 right-0 md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-50 w-full md:w-[380px] bg-white/95 backdrop-blur-2xl border-t md:border border-stone-light md:rounded-[2rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] md:shadow-2xl overflow-hidden"
        >
          {/* Mobile Drag Handle */}
          <div className="w-full flex justify-center pt-3 pb-1 md:hidden touch-none">
            <div className="w-12 h-1.5 bg-stone-light rounded-full" />
          </div>

          {/* Luxury Status Border */}
          <div 
            className="absolute top-0 left-0 w-full h-1.5" 
            style={{ backgroundColor: getStatusBorder(plot.status) }} 
          />

          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone mb-1">Plot Details</div>
              <h3 className="font-numbers text-5xl md:text-6xl text-charcoal m-0 font-bold leading-none tracking-tighter">
                {plot.number}
              </h3>
            </div>
            
            <div className="flex flex-col items-end gap-3 mt-1">
              <button
                onClick={onClose}
                className="p-2 bg-bone rounded-full hover:bg-stone-light/50 text-charcoal transition-colors hidden md:block"
                aria-label="Close details"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
              <span 
                className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full bg-bone border border-stone-light" 
                style={{ color: getStatusBorder(plot.status) }}
              >
                {plot.status}
              </span>
            </div>
          </div>

          <div className="px-6 pb-6 pt-2">
            {/* Dashboard Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-bone p-4 rounded-2xl border border-stone-light/50">
                <div className="flex items-center gap-2 mb-2 text-stone">
                  <Maximize size={14} />
                  <span className="text-[10px] uppercase tracking-wider font-bold">Area</span>
                </div>
                <div className="text-charcoal font-bold text-xl">{plot.areaSqYd}</div>
                <div className="text-xs text-stone font-medium mt-1">Sq. Yards</div>
              </div>

              <div className="bg-bone p-4 rounded-2xl border border-stone-light/50">
                <div className="flex items-center gap-2 mb-2 text-stone">
                  <Ruler size={14} />
                  <span className="text-[10px] uppercase tracking-wider font-bold">Dimensions</span>
                </div>
                <div className="text-charcoal font-bold text-xl">{plot.dimensions}</div>
                <div className="text-xs text-stone font-medium mt-1">LxW</div>
              </div>

              <div className="col-span-2 bg-bone p-4 rounded-2xl border border-stone-light/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border border-stone-light shadow-sm">
                    <Map size={16} className="text-forest" />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone font-bold uppercase tracking-wider">Road Width</div>
                    <div className="text-charcoal font-bold text-sm mt-0.5">{plot.roadWidth}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              {plot.status === "available" ? (
                <>
                  <Button asChild className="w-full h-12 rounded-xl bg-charcoal hover:bg-forest text-white shadow-xl shadow-charcoal/10 transition-colors font-semibold">
                    <Link href="/contact#get-in-touch">
                      <Info size={16} className="mr-2" />
                      Inquire Availability
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-12 rounded-xl border-green-600/30 hover:border-green-600 hover:bg-green-50 text-green-700 font-semibold transition-colors group">
                    <a 
                      href={`https://wa.me/917990521332?text=${encodeURIComponent(`Hello, I am interested in reserving Plot No. ${plot.number} at Textile Valley. Could you please share more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={16} className="mr-2 text-green-600 group-hover:scale-110 transition-transform" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </>
              ) : (
                <div className="p-4 rounded-xl bg-bone border border-stone-light text-center text-sm text-stone font-medium">
                  This plot is currently {plot.status}. <br/>
                  <a href="/contact" className="text-charcoal font-bold hover:underline mt-1 inline-block">Contact us for similar plots</a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
