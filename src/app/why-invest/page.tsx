import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Invest in South Gujarat | Textile Valley",
  description: "Discover the unparalleled investment potential of South Gujarat's textile hub. High appreciation, strategic connectivity, and government support.",
  openGraph: {
    title: "Why Invest in South Gujarat | Textile Valley",
    description: "Discover the unparalleled investment potential of South Gujarat's textile hub. High appreciation, strategic connectivity, and government support.",
  },
};

export default function WhyInvestPage() {
  const highlights = [
    { year: "2024", title: "Growing Textile Hub", desc: "Surat and surrounding areas process over 60% of the nation's synthetic textiles." },
    { year: "2025", title: "Infrastructure Boom", desc: "Major highways and dedicated freight corridors are drastically reducing transit times." },
    { year: "2026", title: "Capital Appreciation", desc: "Industrial land values in South Gujarat have shown consistent double-digit growth." },
    { year: "2027", title: "Global Exports", desc: "Proximity to Hazira Port provides a strategic advantage for international exporters." },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-block border border-stone-light bg-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-stone mb-6 shadow-sm">
            Investment Overview
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-charcoal mb-6 font-bold tracking-tighter leading-[0.9]">
            Why Invest in <br />
            <span className="text-stone">South Gujarat.</span>
          </h1>
          <p className="text-stone font-medium text-lg max-w-lg mx-auto">
            A region engineered for hyper-growth. Investing in Textile Valley means securing a foothold in India&apos;s most dynamic industrial corridor.
          </p>
        </div>

        {/* Investment Timeline */}
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-forest before:via-stone-light before:to-transparent">
          {highlights.map((item) => (
            <div key={item.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-forest border-4 border-white shadow-md group-hover:scale-150 transition-transform duration-500 z-10" />
              
              <div className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-5/12 bg-bone border border-stone-light p-8 rounded-[2rem] group-hover:border-forest/50 transition-colors duration-300 shadow-xl">
                <span className="text-forest font-numbers font-bold text-xl mb-3 block">{item.year}</span>
                <h3 className="text-charcoal font-heading font-bold text-2xl mb-3">{item.title}</h3>
                <p className="text-stone font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
