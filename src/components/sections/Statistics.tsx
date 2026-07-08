"use client";

import { motion } from "framer-motion";
import { statisticsData } from "@/lib/data";

export function Statistics() {
  return (
    <section className="py-24 bg-bone relative border-y border-stone-light/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-light/50">
          {statisticsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start px-4 md:px-8 pt-8 md:pt-0"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-stone font-bold mb-4 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-forest" />
                Metric 0{idx + 1}
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-numbers font-bold text-charcoal mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-stone font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
