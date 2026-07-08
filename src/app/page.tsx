import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Statistics } from "@/components/sections/Statistics";
import { Ecosystem } from "@/components/sections/Ecosystem";

import { MasterPlanPreview } from "@/components/sections/MasterPlanPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Statistics />
      <Ecosystem />
      <MasterPlanPreview />
      {/* 
        Remaining Sections (to be built):
        - Why South Gujarat / Investment Timeline
        - Construction Progress
        - Testimonials / Google Reviews
        - Download Center
      */}
    </>
  );
}
