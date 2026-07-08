"use client";

import { motion } from "framer-motion";
import { MasterPlanViewer } from "@/components/master-plan/MasterPlanViewer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MasterPlanPreview() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold uppercase tracking-widest text-sm font-medium">Interactive</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
              The <span className="italic text-gold font-light">Master Plan</span>
            </h2>
            <p className="mt-6 text-soft-gray text-lg">
              Explore our meticulously designed layout. Filter by availability, zoom in for detailed plot dimensions, and secure your strategic location in South Gujarat&apos;s premier industrial destination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button asChild variant="outline" size="lg" className="group hidden md:inline-flex">
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
          transition={{ duration: 1 }}
        >
          <MasterPlanViewer />
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="group w-full">
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
