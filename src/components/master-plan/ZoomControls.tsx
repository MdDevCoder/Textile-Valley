"use client";

import { ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export function ZoomControls({ onZoomIn, onZoomOut, onReset }: ZoomControlsProps) {
  return (
    <div className="flex flex-col gap-2 bg-[#0A0A0A]/80 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onZoomIn}
        className="h-10 w-10 text-white hover:text-gold hover:bg-white/5"
        aria-label="Zoom In"
      >
        <ZoomIn size={20} />
      </Button>
      <div className="w-full h-[1px] bg-white/10" />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onZoomOut}
        className="h-10 w-10 text-white hover:text-gold hover:bg-white/5"
        aria-label="Zoom Out"
      >
        <ZoomOut size={20} />
      </Button>
      <div className="w-full h-[1px] bg-white/10" />
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onReset}
        className="h-10 w-10 text-white hover:text-gold hover:bg-white/5"
        aria-label="Reset View"
      >
        <Maximize size={20} />
      </Button>
    </div>
  );
}
