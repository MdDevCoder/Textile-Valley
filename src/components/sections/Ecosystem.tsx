"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Zap, Truck, Users } from "lucide-react";
import Link from "next/link";

export function Ecosystem() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-block border border-stone-light px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-stone mb-6">
              The Ecosystem
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter leading-[0.9]">
              Engineered for <br/>
              <span className="text-forest">Growth.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-stone font-medium text-lg max-w-md"
          >
            Beyond just land, Textile Valley offers a comprehensive ecosystem engineered to accelerate your business and maximize operational efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Feature 1 - Large Wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 bg-bone rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-stone-light flex flex-col justify-between group h-full min-h-[300px]"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 rounded-2xl bg-white border border-stone-light shadow-sm text-forest">
                <Truck size={32} strokeWidth={1.5} />
              </div>
              <span className="text-4xl font-numbers font-bold text-stone-light">01</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Strategic Location</h3>
              <p className="text-stone font-medium text-lg max-w-xl">
                Situated near major highways ensuring seamless logistics and rapid transportation of goods across the state.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 - Small Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 bg-forest rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between group h-full min-h-[300px]"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 rounded-2xl bg-white/10 text-white backdrop-blur-md">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <span className="text-4xl font-numbers font-bold text-white/20">02</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Robust Infra</h3>
              <p className="text-white/80 font-medium text-base">
                45m wide RCC roads and uninterrupted power supply designed for heavy industries.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 - Small Dark */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 bg-charcoal rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between group h-full min-h-[300px]"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white backdrop-blur-md">
                <Box size={32} strokeWidth={1.5} />
              </div>
              <span className="text-4xl font-numbers font-bold text-white/10">03</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Textile Hub</h3>
              <p className="text-stone font-medium text-base">
                Located in the heart of South Gujarat&apos;s textile belt, providing unparalleled access to raw materials.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 - Large Light */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-stone-light flex flex-col justify-between group h-full min-h-[300px] shadow-xl shadow-stone-light/20"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 rounded-2xl bg-bone border border-stone-light text-charcoal">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <span className="text-4xl font-numbers font-bold text-stone-light">04</span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Investor Community</h3>
              <p className="text-stone font-medium text-lg max-w-xl">
                Join a network of leading manufacturers, exporters, and forward-thinking entrepreneurs in a thriving business ecosystem.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
