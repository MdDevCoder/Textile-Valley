"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Box, Zap, Truck, Users } from "lucide-react";

const features = [
  {
    title: "Strategic Location",
    description: "Situated near major highways ensuring seamless logistics and rapid transportation of goods across the state.",
    icon: Truck,
  },
  {
    title: "Robust Infrastructure",
    description: "45m wide RCC roads, uninterrupted power supply, and state-of-the-art drainage systems designed for heavy industries.",
    icon: Zap,
  },
  {
    title: "Textile Hub",
    description: "Located in the heart of South Gujarat's textile belt, providing unparalleled access to raw materials and skilled labor.",
    icon: Box,
  },
  {
    title: "Investor Community",
    description: "Join a network of leading manufacturers, exporters, and forward-thinking entrepreneurs in a thriving business ecosystem.",
    icon: Users,
  },
];

export function Ecosystem() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              A Thriving <span className="text-gold italic font-light">Industrial Ecosystem</span>
            </h2>
            <p className="text-soft-gray text-lg">
              Beyond just land, Textile Valley offers a comprehensive ecosystem engineered to accelerate your business growth and maximize operational efficiency.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <Card className="h-full bg-[#0A0A0A] hover:bg-[#111111] group cursor-pointer border-white/5 hover:border-gold/30">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-lg bg-black inline-block w-fit text-gold group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-gold transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-soft-gray/80 text-base mb-6">
                    {feature.description}
                  </CardDescription>
                  <div className="flex items-center text-gold text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Discover More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
