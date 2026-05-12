import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import ContactForm from '@/components/home/ContactForm'

export const metadata: Metadata = {
  title: 'Contact EGL Solutions | Marketing Agency in Wethersfield, CT',
  description:
    'Get in touch with EGL Solutions. Free consultations for local service businesses in Connecticut. Call (860) 200-3455 or schedule online.',
  alternates: { canonical: 'https://egl.solutions/contact' },
  openGraph: {
    title: 'Contact EGL Solutions',
    description: 'Schedule a free 15-minute intro call with EGL Solutions. No obligation.',
    url: 'https://egl.solutions/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-void pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 600px 400px at 90% 40%, rgba(255,85,0,0.12), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="noise-overlay" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel label="GET IN TOUCH" className="mb-4" />
            <h1 className="font-display text-5xl md:text-6xl text-bone tracking-wider mb-6 leading-tight">
              LET&apos;S GROW YOUR{' '}
              <span className="text-inferno">BUSINESS TOGETHER</span>
            </h1>
            <p className="font-body text-light/75 text-lg leading-relaxed mb-8">
              Schedule a free 15-minute intro call. We&apos;ll learn about your business, show you
              live client accounts, answer every question, and decide together if we&apos;re a good
              fit — zero pressure.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+18602003455"
                className="flex items-center gap-4 bg-mid border border-steel rounded p-4 hover:border-inferno transition-colors group"
              >
                <div className="w-10 h-10 rounded bg-inferno/10 border border-inferno/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-inferno" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] mb-0.5">Phone</div>
                  <div className="font-body text-light group-hover:text-inferno transition-colors">(860) 200-3455</div>
                </div>
              </a>

              <a
                href="mailto:info@egl.solutions"
                className="flex items-center gap-4 bg-mid border border-steel rounded p-4 hover:border-inferno transition-colors group"
              >
                <div className="w-10 h-10 rounded bg-inferno/10 border border-inferno/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-inferno" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] mb-0.5">Email</div>
                  <div className="font-body text-light group-hover:text-inferno transition-colors">info@egl.solutions</div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-mid border border-steel rounded p-4">
                <div className="w-10 h-10 rounded bg-inferno/10 border border-inferno/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-inferno" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] mb-0.5">Location</div>
                  <div className="font-body text-light">Wethersfield, CT 06109</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-mid border border-steel rounded p-4">
                <div className="w-10 h-10 rounded bg-inferno/10 border border-inferno/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-inferno" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] mb-0.5">Hours</div>
                  <div className="font-body text-light">Mon–Sun: 9:00AM – 7:00PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CTA side */}
          <div className="bg-mid border border-steel rounded p-8">
            <h2 className="font-display text-3xl text-bone tracking-wider mb-3">SCHEDULE A FREE CALL</h2>
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              15 minutes. No obligation. We&apos;ll show you exactly how we can help your specific
              business generate more leads and scale faster.
            </p>
            <a
              href="https://egl.solutions/booking-step1"
              className="block bg-inferno text-black font-display text-lg py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno text-center mb-4"
            >
              ⚡ BOOK MY FREE CALL
            </a>
            <p className="font-body text-xs text-muted text-center">
              Usually respond within 1 business hour
            </p>
          </div>
        </div>
      </section>

      {/* Full form section */}
      <ContactForm />
    </>
  )
}
