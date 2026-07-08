import { Metadata } from "next";
import { MasterPlanViewer } from "@/components/master-plan/MasterPlanViewer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Interactive Master Plan",
  description: "Explore the fully interactive layout of Textile Valley Industrial Park.",
};

export default function MasterPlanPage() {
  return (
    <main className="min-h-screen w-full bg-white relative flex flex-col pt-32 pb-12">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40 z-0 pointer-events-none" />

      {/* Header bar */}
      <div className="w-full px-4 md:px-8 mb-6 z-20 relative">
        <Button asChild variant="outline" className="bg-white/80 backdrop-blur-md border-stone-light hover:bg-stone-light/20 text-charcoal shadow-sm font-semibold">
          <Link href="/">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
      
      {/* Viewer Container */}
      <div className="flex-1 w-full relative z-10 px-4 md:px-8 max-w-[1600px] mx-auto">
        <MasterPlanViewer />
      </div>
    </main>
  );
}
