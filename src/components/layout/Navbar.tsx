"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/master-plan", label: "Master Plan" },
  { href: "/amenities", label: "Amenities" },
  { href: "/why-invest", label: "Why Invest" },
  { href: "/gallery", label: "Gallery" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex flex-col items-center group">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-widest text-gold group-hover:text-glow transition-all duration-300">
            TEXTILE
          </span>
          <span className="text-[0.6rem] md:text-xs tracking-[0.3em] text-soft-gray uppercase mt-1">
            - Valley -
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold relative group",
                pathname === link.href ? "text-gold" : "text-soft-gray"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-full h-[1px] bg-gold scale-x-0 transition-transform origin-left duration-300 ease-luxury group-hover:scale-x-100",
                  pathname === link.href && "scale-x-100"
                )}
              />
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="ml-4">
            <Link href="/contact">Inquire Now</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden relative z-10 p-2 text-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "fixed inset-0 bg-black z-0 flex flex-col items-center justify-center gap-8 md:hidden",
          !mobileMenuOpen && "pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "text-2xl font-heading tracking-wide transition-colors hover:text-gold",
              pathname === link.href ? "text-gold" : "text-soft-gray"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Button asChild variant="default" size="lg" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
          <Link href="/contact">Inquire Now</Link>
        </Button>
      </motion.div>
    </motion.header>
  );
}
