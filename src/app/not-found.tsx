import { Button } from "@/components/ui/button";
import { ArrowLeft, Map } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">
        <div className="text-[150px] md:text-[200px] font-heading font-bold leading-none text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          404
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-gold">
            <Map size={32} />
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-6">
            Page Not <span className="text-gold italic font-light">Found</span>
          </h1>
          
          <p className="text-soft-gray text-lg max-w-md mx-auto mb-10">
            The destination you are looking for does not exist in our master plan or has been relocated.
          </p>
          
          <Button asChild className="h-12 px-8">
            <Link href="/">
              <ArrowLeft size={16} className="mr-2" />
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
