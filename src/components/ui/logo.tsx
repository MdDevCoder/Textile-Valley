"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const WovenX = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={cn("inline-block text-current", className)} 
    stroke="currentColor" 
    strokeWidth="1.2"
    strokeLinecap="butt"
    fill="none"
  >
    {/* Diagonal from top-left to bottom-right (4 parallel lines) */}
    <path d="M4 2 L22 20" />
    <path d="M2 4 L20 22" />
    <path d="M7 -1 L25 17" />
    <path d="M-1 7 L17 25" />

    {/* Diagonal from top-right to bottom-left (4 parallel lines) */}
    <path d="M20 2 L2 20" />
    <path d="M22 4 L4 22" />
    <path d="M17 -1 L-1 17" />
    <path d="M25 7 L7 25" />
  </svg>
);

interface LogoProps {
  className?: string;
  isDarkTheme?: boolean;
}

export function Logo({ className, isDarkTheme = false }: LogoProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link 
      href="/" 
      onClick={handleClick}
      className={cn("flex flex-col items-center group cursor-pointer relative z-50", className)}
    >
      <div className={cn(
        "font-serif text-3xl md:text-4xl tracking-widest transition-all duration-300 flex items-center gap-[0.15em]",
        isDarkTheme ? "text-white group-hover:text-white/80" : "text-charcoal group-hover:text-forest"
      )}>
        <span>TE</span>
        <WovenX className="w-8 h-8 md:w-10 md:h-10 -mx-[0.1em]" />
        <span>TILE</span>
      </div>
      <span className={cn(
        "text-[0.65rem] md:text-[11px] tracking-[0.4em] font-sans font-bold uppercase mt-1",
        isDarkTheme ? "text-white/70" : "text-stone"
      )}>
        - Valley -
      </span>
    </Link>
  );
}
