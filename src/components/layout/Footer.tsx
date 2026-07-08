import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 mt-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex flex-col items-start group">
              <span className="font-heading text-3xl font-bold tracking-widest text-gold group-hover:text-glow transition-all duration-300">
                TEXTILE
              </span>
              <span className="text-xs tracking-[0.3em] text-soft-gray uppercase mt-1">
                - Valley -
              </span>
            </Link>
            <p className="text-sm text-soft-gray/80 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Master Plan", "Amenities", "Gallery"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-soft-gray/70 hover:text-gold transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-gold" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Investors */}
          <div>
            <h4 className="text-white font-heading text-lg mb-6 tracking-wide">Investors</h4>
            <ul className="space-y-4">
              {["Why Invest", "Location Advantage", "Brochure Download", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-sm text-soft-gray/70 hover:text-gold transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-gold" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-heading text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-soft-gray/80">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-soft-gray/80">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${siteConfig.contact.phone1}`} className="hover:text-gold transition-colors">{siteConfig.contact.phone1}</a>
                  <a href={`tel:${siteConfig.contact.phone2}`} className="hover:text-gold transition-colors">{siteConfig.contact.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-soft-gray/80">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold transition-colors">{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-soft-gray/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Designed for Industrial Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
