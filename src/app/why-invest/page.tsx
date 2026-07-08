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
    <main className="pt-24 min-h-screen bg-[#0A0A0A] relative">
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
            Why Invest in <span className="text-gold italic font-light">South Gujarat</span>
          </h1>
          <p className="text-soft-gray text-lg">
            A region engineered for hyper-growth. Investing in Textile Valley means securing a foothold in India&apos;s most dynamic industrial corridor.
          </p>
        </div>

        {/* Investment Timeline */}
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-gold before:via-gold/50 before:to-transparent">
          {highlights.map((item) => (
            <div key={item.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-[#0A0A0A] shadow-[0_0_15px_rgba(197,160,89,0.5)] group-hover:scale-150 transition-transform duration-500 z-10" />
              
              <div className="w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-5/12 bg-black border border-white/5 p-6 rounded-2xl group-hover:border-gold/30 transition-colors duration-300 shadow-xl">
                <span className="text-gold font-numbers font-bold text-xl mb-2 block">{item.year}</span>
                <h3 className="text-white font-heading text-2xl mb-3">{item.title}</h3>
                <p className="text-soft-gray/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
