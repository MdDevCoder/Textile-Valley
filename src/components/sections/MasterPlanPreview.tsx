"use client";

import { motion } from "framer-motion";
import { MasterPlanViewer } from "@/components/master-plan/MasterPlanViewer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function MasterPlanPreview() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-block border border-stone-light bg-bone px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-stone mb-6 shadow-sm">
              Interactive
            </div>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-charcoal font-bold tracking-tighter leading-[0.9]">
              The <br />
              <span className="text-stone">Master Plan.</span>
            </h2>
            <p className="mt-6 text-stone font-medium text-lg max-w-lg">
              Explore our meticulously designed layout. Filter by availability, zoom in for detailed plot dimensions, and secure your strategic location in South Gujarat&apos;s premier industrial destination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild variant="outline" size="lg" className="group rounded-xl border-stone-light text-charcoal hover:bg-stone/5 font-semibold h-12">
              <Link href="https://drive.google.com/file/d/17rus4Wymw7mWTq_LrTAA6GsPxpSrMite/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Full Plan
                <Download className="ml-2 w-4 h-4 text-forest" />
              </Link>
            </Button>
            <Button asChild size="lg" className="group rounded-xl bg-charcoal text-white hover:bg-forest font-semibold h-12 shadow-lg">
              <Link href="/master-plan">
                View Fullscreen Map
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <MasterPlanViewer />
        </motion.div>
        
        <div className="mt-8 text-center lg:hidden flex flex-col gap-4">
          <Button asChild variant="outline" className="group w-full rounded-xl border-stone-light text-charcoal font-semibold h-14">
            <Link href="https://drive.google.com/file/d/17rus4Wymw7mWTq_LrTAA6GsPxpSrMite/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Download Full Plan
              <Download className="ml-2 w-4 h-4 text-forest" />
            </Link>
          </Button>
          <Button asChild className="group w-full rounded-xl bg-charcoal text-white hover:bg-forest font-semibold h-14 shadow-lg">
            <Link href="/master-plan">
              View Fullscreen Map
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
