"use client";

import { motion } from "framer-motion";
import { statisticsData } from "@/lib/data";
import { TrendingUp, Globe, ShieldCheck, Factory } from "lucide-react";

const icons = [Globe, Factory, TrendingUp, ShieldCheck];

export function Statistics() {
  return (
    <section className="py-24 bg-[#050505] relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statisticsData.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 rounded-full bg-black border border-gold/20 text-gold group-hover:bg-gold/10 group-hover:border-gold/50 transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.1)]">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 tracking-tight group-hover:text-glow transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-soft-gray uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
