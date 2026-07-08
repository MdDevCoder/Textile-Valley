import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Textile Valley",
  description: "Browse through the visual gallery of Textile Valley's premium industrial infrastructure and master plan.",
};

const images = [
  { id: 1, src: "/images/img1.jpg", alt: "Modern Factory Exterior" },
  { id: 2, src: "/images/img2.jpg", alt: "Industrial Infrastructure" },
  { id: 3, src: "/images/img3.jpg", alt: "Construction Progress" },
  { id: 4, src: "/images/img4.jpg", alt: "Aerial Master Plan View" },
  { id: 5, src: "/images/img1.jpg", alt: "Wide Roads Infrastructure" },
  { id: 6, src: "/images/img2.jpg", alt: "Premium Corporate Office" },
];

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block border border-stone-light bg-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-stone mb-6 shadow-sm">
            Exhibition
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-charcoal mb-6 font-bold tracking-tighter leading-[0.9]">
            Visual <br />
            <span className="text-stone">Gallery.</span>
          </h1>
          <p className="text-stone font-medium text-lg max-w-lg mx-auto">
            A glimpse into the future of South Gujarat&apos;s industrial landscape.
          </p>
        </div>

        {/* Masonry Layout approximation using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid group relative overflow-hidden rounded-[2rem] border border-stone-light shadow-xl cursor-pointer">
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold tracking-wide text-lg">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
