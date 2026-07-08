import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Textile Valley",
  description: "Browse through the visual gallery of Textile Valley's premium industrial infrastructure and master plan.",
};

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", alt: "Modern Factory Exterior" },
  { id: 2, src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop", alt: "Industrial Infrastructure" },
  { id: 3, src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop", alt: "Construction Progress" },
  { id: 4, src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=800&auto=format&fit=crop", alt: "Aerial Master Plan View" },
  { id: 5, src: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800&auto=format&fit=crop", alt: "Wide Roads Infrastructure" },
  { id: 6, src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", alt: "Premium Corporate Office" },
];

export default function GalleryPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#050505] relative">
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
            Visual <span className="text-gold italic font-light">Gallery</span>
          </h1>
          <p className="text-soft-gray text-lg">
            A glimpse into the future of South Gujarat&apos;s industrial landscape.
          </p>
        </div>

        {/* Masonry Layout approximation using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid group relative overflow-hidden rounded-xl border border-white/5 cursor-pointer">
              <div className="relative w-full aspect-[4/3] md:aspect-auto h-64 md:h-auto">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
