"use client";

import { useActionState } from "react";
import { submitInquiry } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, Navigation } from "lucide-react";
import { useFormStatus } from "react-dom";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full h-14 text-base rounded-xl bg-charcoal text-white hover:bg-forest shadow-xl transition-colors font-bold">
      {pending ? "Sending..." : "Submit Inquiry"}
      {!pending && <Send className="ml-2 w-4 h-4" />}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitInquiry, null);

  return (
    <main className="pt-32 pb-24 min-h-screen bg-white relative">
      
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-40 z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block border border-stone-light bg-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-stone mb-6 shadow-sm">
            Contact Us
          </div>
          <h1 className="font-heading text-6xl md:text-8xl text-charcoal mb-6 font-bold tracking-tighter leading-[0.9]">
            Investor <br />
            <span className="text-stone">Experience.</span>
          </h1>
          <p className="text-stone font-medium text-lg max-w-lg mx-auto">
            Connect with our investment advisors to secure your position in South Gujarat&apos;s premier industrial park.
          </p>
        </div>

        <div id="get-in-touch" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto scroll-mt-32">
          {/* Contact Details */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-3xl md:text-4xl text-charcoal font-bold mb-6">Get in Touch</h3>
              <p className="text-stone font-medium text-lg leading-relaxed mb-8 max-w-md">
                Whether you have questions about plot availability, infrastructure specifications, or investment timelines, our team is ready to assist you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-bone border border-stone-light flex items-center justify-center text-charcoal shrink-0 shadow-sm">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div className="mt-1">
                  <div className="text-stone text-[10px] mb-1 uppercase tracking-[0.2em] font-bold">Phone</div>
                  <a href="tel:+919712345353" className="text-charcoal font-bold hover:text-forest transition-colors text-xl">+91 9712345353</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-bone border border-stone-light flex items-center justify-center text-charcoal shrink-0 shadow-sm">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div className="mt-1">
                  <div className="text-stone text-[10px] mb-1 uppercase tracking-[0.2em] font-bold">Email</div>
                  <a href="mailto:invest@textilevalley.in" className="text-charcoal font-bold hover:text-forest transition-colors text-xl">invest@textilevalley.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-bone border border-stone-light flex items-center justify-center text-charcoal shrink-0 shadow-sm">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div className="mt-1">
                  <div className="text-stone text-[10px] mb-1 uppercase tracking-[0.2em] font-bold">Corporate Office</div>
                  <address className="text-charcoal font-medium text-lg not-italic leading-relaxed mb-4">
                    Block no 160, 16, 17, 18, 19,<br />
                    near lajpore jail, lajpore, surat
                  </address>
                  <Button asChild variant="outline" className="rounded-xl border-stone-light hover:border-stone hover:bg-stone/5 font-semibold text-charcoal">
                    <Link href="https://maps.app.goo.gl/4sySGh6RnGhyeDdh6" target="_blank" rel="noopener noreferrer">
                      <Navigation className="mr-2 w-4 h-4" />
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bone p-8 md:p-12 rounded-[2rem] border border-stone-light shadow-2xl relative">
            
            <form action={formAction} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] text-stone font-bold uppercase tracking-[0.2em]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white border border-stone-light rounded-xl px-4 py-4 text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-charcoal transition-all shadow-sm"
                  />
                  {state?.errors?.name && <p className="text-red-500 text-xs font-medium mt-1">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] text-stone font-bold uppercase tracking-[0.2em]">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-white border border-stone-light rounded-xl px-4 py-4 text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-charcoal transition-all shadow-sm"
                  />
                  {state?.errors?.phone && <p className="text-red-500 text-xs font-medium mt-1">{state.errors.phone[0]}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] text-stone font-bold uppercase tracking-[0.2em]">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white border border-stone-light rounded-xl px-4 py-4 text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-charcoal transition-all shadow-sm"
                />
                {state?.errors?.email && <p className="text-red-500 text-xs font-medium mt-1">{state.errors.email[0]}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] text-stone font-bold uppercase tracking-[0.2em]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-white border border-stone-light rounded-xl px-4 py-4 text-charcoal font-medium focus:outline-none focus:ring-2 focus:ring-charcoal/20 focus:border-charcoal transition-all shadow-sm resize-none"
                ></textarea>
                {state?.errors?.message && <p className="text-red-500 text-xs font-medium mt-1">{state.errors.message[0]}</p>}
              </div>

              <div className="pt-2">
                <SubmitButton />
              </div>
              
              {state?.message && (
                <div className={`p-4 rounded-xl text-sm font-semibold text-center ${state.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {state.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
