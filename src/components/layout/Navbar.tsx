"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/master-plan", label: "Master Plan" },
  { href: "/amenities", label: "Amenities" },
  { href: "/contact", label: "Contact Us" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-stone-light py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Logo className="relative z-50" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.1em] font-bold transition-colors relative group outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm px-1 py-0.5",
                "hover:text-charcoal",
                pathname === link.href ? "text-charcoal" : "text-stone"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-2 left-0 w-full h-[2px] bg-forest scale-x-0 transition-transform origin-left duration-300 ease-editorial group-hover:scale-x-100",
                  pathname === link.href && "scale-x-100"
                )}
              />
            </Link>
          ))}
          <Button asChild className="ml-4 rounded-xl shadow-lg transition-colors font-semibold bg-charcoal text-white hover:bg-forest">
            <Link href="/contact#get-in-touch">Inquire Now</Link>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden",
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
              "text-3xl font-bold tracking-tight transition-colors hover:text-forest",
              pathname === link.href ? "text-charcoal" : "text-stone"
            )}
          >
            {link.label}
          </Link>
        ))}
        <Button asChild size="lg" className="mt-8 rounded-xl bg-charcoal text-white hover:bg-forest font-bold w-4/5 h-14" onClick={() => setMobileMenuOpen(false)}>
          <Link href="/contact#get-in-touch">Inquire Now</Link>
        </Button>
      </motion.div>
    </motion.header>
  );
}
