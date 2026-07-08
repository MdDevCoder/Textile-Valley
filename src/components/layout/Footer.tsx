import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-bone border-t border-stone-light pt-20 pb-10 mt-0 relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Logo className="items-start self-start" />
            <p className="text-sm text-stone font-medium leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-charcoal font-bold text-sm uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Master Plan", path: "/master-plan" },
                { name: "Amenities", path: "/amenities" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-sm font-medium text-stone hover:text-charcoal transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-forest" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Investors */}
          <div>
            <h4 className="text-charcoal font-bold text-sm uppercase tracking-[0.2em] mb-6">Investors</h4>
            <ul className="space-y-4">
              {[
                { name: "Why Invest", path: "/why-invest" },
                { name: "Location Advantage", path: "/location" },
                { name: "Brochure Download", path: "#" },
                { name: "Privacy Policy", path: "#" },
                { name: "Terms & Conditions", path: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-sm font-medium text-stone hover:text-charcoal transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0 text-forest" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-charcoal font-bold text-sm uppercase tracking-[0.2em] mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm font-medium text-stone">
                <MapPin className="w-5 h-5 text-charcoal shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span>{siteConfig.contact.address}</span>
                  <a href="https://maps.app.goo.gl/4sySGh6RnGhyeDdh6" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-forest hover:underline">
                    Get Directions
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-stone">
                <Phone className="w-5 h-5 text-charcoal shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${siteConfig.contact.phone1}`} className="hover:text-charcoal transition-colors">{siteConfig.contact.phone1}</a>
                  <a href={`tel:${siteConfig.contact.phone2}`} className="hover:text-charcoal transition-colors">{siteConfig.contact.phone2}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-stone">
                <Mail className="w-5 h-5 text-charcoal shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-charcoal transition-colors">{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-light pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-stone mb-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Engineered for Growth.</p>
        </div>
        
        {/* Developer Credits */}
        <div className="text-center flex justify-center items-center pb-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone/80">
            Crafted with precision by{" "}
            <a 
              href="https://portfolio-phi-rust-28.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal hover:text-forest transition-colors relative group"
            >
              Shaikh Muhammad (Exotic Co.)
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-forest scale-x-0 transition-transform origin-left duration-300 ease-editorial group-hover:scale-x-100" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
