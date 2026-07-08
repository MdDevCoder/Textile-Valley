"use client";

import { useActionState } from "react";
import { submitInquiry } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full h-12 text-base">
      {pending ? "Sending..." : "Submit Inquiry"}
      {!pending && <Send className="ml-2 w-4 h-4" />}
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitInquiry, null);

  return (
    <main className="pt-24 min-h-screen bg-black relative">
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
            Investor <span className="text-gold italic font-light">Experience</span>
          </h1>
          <p className="text-soft-gray text-lg">
            Connect with our investment advisors to secure your position in South Gujarat&apos;s premier industrial park.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-3xl text-white font-heading mb-6">Get in Touch</h3>
              <p className="text-soft-gray leading-relaxed mb-8">
                Whether you have questions about plot availability, infrastructure specifications, or investment timelines, our team is ready to assist you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-soft-gray text-sm mb-1 uppercase tracking-wider">Phone</div>
                  <a href="tel:+919876543210" className="text-white hover:text-gold transition-colors text-lg">+91 98765 43210</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-soft-gray text-sm mb-1 uppercase tracking-wider">Email</div>
                  <a href="mailto:invest@textilevalley.in" className="text-white hover:text-gold transition-colors text-lg">invest@textilevalley.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#111] border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-soft-gray text-sm mb-1 uppercase tracking-wider">Corporate Office</div>
                  <address className="text-white text-lg not-italic leading-relaxed">
                    Textile Valley,<br />
                    Near Lajpore, Surat-Navsari Highway,<br />
                    Gujarat 394235, India
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px] rounded-full pointer-events-none" />
            
            <form action={formAction} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-soft-gray uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  {state?.errors?.name && <p className="text-red-500 text-xs">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-soft-gray uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  {state?.errors?.phone && <p className="text-red-500 text-xs">{state.errors.phone[0]}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-soft-gray uppercase tracking-wider">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                />
                {state?.errors?.email && <p className="text-red-500 text-xs">{state.errors.email[0]}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-soft-gray uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors resize-none"
                ></textarea>
                {state?.errors?.message && <p className="text-red-500 text-xs">{state.errors.message[0]}</p>}
              </div>

              <SubmitButton />
              
              {state?.message && (
                <div className={`p-4 rounded-lg text-sm text-center ${state.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
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
