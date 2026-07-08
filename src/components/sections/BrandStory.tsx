"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BrandStory() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold uppercase tracking-widest text-sm font-medium">The Vision</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Redefining <br />
              <span className="italic text-gold font-light">Industrial Spaces</span>
            </h2>
            
            <div className="space-y-6 text-soft-gray/90 text-lg leading-relaxed">
              <p>
                Textile Valley is not just an industrial park; it is a meticulously crafted ecosystem designed for visionaries. We are building South Gujarat&apos;s most prestigious destination for textile manufacturers, exporters, and logistics pioneers.
              </p>
              <p>
                Driven by a commitment to world-class infrastructure and uncompromised quality, our master plan integrates strategic connectivity with state-of-the-art amenities, ensuring your business operates at peak efficiency.
              </p>
            </div>
          </motion.div>

          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden group">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <div className="absolute inset-0 bg-royal/40 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-20" />
              <Image
                src="https://images.unsplash.com/photo-1587293852726-0d628ab243c5?q=80&w=2074&auto=format&fit=crop"
                alt="Premium Industrial Infrastructure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            
            {/* Floating Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-10 -left-10 md:bottom-10 md:-left-10 bg-[#0A0A0A]/90 backdrop-blur-xl border border-gold/20 p-8 rounded-xl shadow-2xl z-20"
            >
              <div className="text-5xl font-heading text-gold mb-2">100%</div>
              <div className="text-sm tracking-wider uppercase text-white/80">Title Clear NA</div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
