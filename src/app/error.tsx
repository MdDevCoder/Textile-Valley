"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="text-red-500 font-heading text-4xl">!</span>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
          System <span className="text-gold italic font-light">Exception</span>
        </h1>
        <p className="text-soft-gray text-lg max-w-xl mx-auto mb-10">
          An unexpected error occurred while processing your request. Our engineering team has been notified.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()} className="w-full sm:w-auto h-12 px-8">
            <RefreshCcw size={16} className="mr-2" />
            Try Again
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto h-12 px-8">
            <Link href="/">
              <Home size={16} className="mr-2" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
