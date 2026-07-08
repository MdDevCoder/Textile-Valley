import type { Metadata } from "next";
import { BrandStory } from "@/components/sections/BrandStory";

export const metadata: Metadata = {
  title: "About Us | Textile Valley",
  description: "Learn about the vision, mission, and commitment behind Textile Valley, South Gujarat's premier industrial destination.",
  openGraph: {
    title: "About Us | Textile Valley",
    description: "Learn about the vision, mission, and commitment behind Textile Valley, South Gujarat's premier industrial destination.",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-black relative">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8 py-20 text-center relative z-10">
        <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
          About <span className="text-gold italic font-light">Textile Valley</span>
        </h1>
        <p className="text-soft-gray text-lg max-w-2xl mx-auto">
          Our commitment to industrial excellence and sustainable infrastructure development in South Gujarat.
        </p>
      </div>
      
      {/* We can reuse the BrandStory component for the main content */}
      <BrandStory />

      {/* Additional About Content could go here: Partner Companies, Team, Vision detailed */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl text-gold font-heading mb-4">01</div>
              <h3 className="text-2xl text-white font-heading">Our Vision</h3>
              <p className="text-soft-gray text-sm leading-relaxed">
                To create an unmatched industrial ecosystem that empowers businesses to scale globally while operating locally in state-of-the-art facilities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl text-gold font-heading mb-4">02</div>
              <h3 className="text-2xl text-white font-heading">Our Mission</h3>
              <p className="text-soft-gray text-sm leading-relaxed">
                To deliver premium, title-clear industrial plots with world-class infrastructure that guarantees operational efficiency and long-term appreciation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl text-gold font-heading mb-4">03</div>
              <h3 className="text-2xl text-white font-heading">Our Values</h3>
              <p className="text-soft-gray text-sm leading-relaxed">
                Integrity in transactions, excellence in infrastructure, and a relentless focus on creating value for our investors and the surrounding community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
