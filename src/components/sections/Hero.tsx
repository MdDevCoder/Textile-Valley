"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      {/* In production, use your actual video URL and poster image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
        >
          {/* <source src="/videos/drone-hero.mp4" type="video/mp4" /> */}
        </video>
        {/* Luxury Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal/80 via-black/40 to-black/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mb-6 flex flex-col items-center gap-4"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-sm md:text-sm font-semibold">
            South Gujarat&apos;s Premier Destination
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold max-w-5xl leading-tight text-glow">
            Where Industrial Excellence Meets <span className="italic font-light">Opportunity</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-soft-gray text-lg md:text-xl max-w-2xl mb-12"
        >
          Premium Industrial Plots Strategically Located Near Surat. Build your future in a world-class ecosystem designed for growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button asChild size="lg" className="group">
            <Link href="/master-plan">
              Explore Master Plan
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Schedule Site Visit</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-soft-gray/70">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-gold absolute top-0"
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
