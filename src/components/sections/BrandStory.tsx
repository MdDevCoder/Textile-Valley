"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BrandStory() {
  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden">
      
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-30 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-10 order-2 lg:order-1 relative z-10"
          >
            <div className="inline-block border border-stone-light px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-stone bg-white">
              The Vision
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-charcoal leading-[0.9] tracking-tighter">
              Redefining <br />
              <span className="text-stone">Industry.</span>
            </h2>
            
            <div className="space-y-6 text-stone font-medium text-lg leading-relaxed max-w-lg">
              <p>
                Textile Valley is not just an industrial park; it is a meticulously crafted ecosystem designed for visionaries. We are building South Gujarat&apos;s most prestigious destination for textile manufacturers and global exporters.
              </p>
              <p>
                Driven by a commitment to world-class infrastructure and uncompromised quality, our master plan integrates strategic connectivity with state-of-the-art amenities.
              </p>
            </div>
          </motion.div>

          {/* Image Content - Full Bleed Offset */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative w-full group">
            <motion.div 
              className="w-full relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-bone shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
              <Image
                src="/images/img1.jpg"
                alt="Textile Valley Master Plan Brochure"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>

            {/* Floating Architectural Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-white rounded-3xl p-8 shadow-2xl flex flex-col gap-1 z-20 border border-stone-light backdrop-blur-xl bg-white/90"
            >
              <div className="text-5xl md:text-6xl font-numbers font-bold text-forest leading-none">100%</div>
              <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-stone font-bold mt-2">Title Clear NA</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
