"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full pt-32 pb-20 overflow-hidden bg-bone flex items-center">
      {/* Subtle Blueprint Pattern Background */}
      <div className="absolute inset-0 bg-blueprint opacity-60 z-0 pointer-events-none" />
      
      {/* Decorative Grid Lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-stone/10 z-0 hidden lg:block" />
      <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-stone/10 z-0 hidden lg:block" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-5 flex flex-col items-start relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-stone font-numbers tracking-[0.2em] uppercase text-[10px] font-bold border-b border-stone/30 pb-2">
                  Project: Textile Valley
                </span>
                <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-stone-light text-[10px] font-bold uppercase tracking-widest text-charcoal shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                  Now Available
                </span>
              </div>

              <h1 className="font-heading text-6xl md:text-8xl lg:text-[7rem] font-bold text-charcoal leading-[0.9] tracking-tighter mb-8">
                Industrial<br />
                <span className="text-forest">Future.</span>
              </h1>
              
              <p className="text-stone font-medium text-lg md:text-xl max-w-md mb-12 leading-relaxed">
                South Gujarat&apos;s most progressive industrial ecosystem. Title-clear, NA-approved plots engineered for global manufacturers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild className="rounded-full px-8 py-7 text-sm font-semibold bg-charcoal text-white hover:bg-forest transition-colors shadow-xl">
                  <Link href="/master-plan">
                    Explore Master Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-7 text-sm font-semibold border-stone/30 hover:bg-white text-charcoal">
                  <Link href="/contact">Schedule Visit</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Asymmetrical Overlapping Photography */}
          <div className="lg:col-span-7 relative h-[600px] lg:h-[750px] w-full mt-10 lg:mt-0">
            {/* Main Background Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute right-0 top-0 w-full lg:w-[90%] h-[80%] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/img3.jpg" 
                alt="Textile Valley Aerial View" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="absolute left-0 bottom-0 w-[60%] lg:w-[50%] h-[40%] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 lg:border-8 border-bone hidden sm:block"
            >
              <Image 
                src="/images/img2.jpg" 
                alt="Infrastructure Details" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </motion.div>

            {/* Floating Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute right-[5%] bottom-[10%] lg:bottom-[15%] bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-stone-light flex flex-col gap-1 z-20"
            >
              <span className="text-4xl font-numbers font-bold text-forest">45m</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone font-bold">RCC Roads</span>
            </motion.div>

            <motion.a 
              href="https://maps.app.goo.gl/4sySGh6RnGhyeDdh6"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="absolute left-[5%] lg:left-[-5%] top-[15%] lg:top-[20%] bg-charcoal hover:bg-forest transition-colors rounded-2xl p-4 shadow-2xl flex items-center gap-3 z-20 cursor-pointer"
            >
              <MapPin className="text-white w-4 h-4" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone font-bold">Location</span>
                <span className="text-xs text-white font-medium">Near Surat, Gujarat</span>
              </div>
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
