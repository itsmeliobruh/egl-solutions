import type { ServiceArea } from '@/lib/serviceAreas'
import Link from 'next/link'
import { Check, Phone } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import CTAStrip from '@/components/shared/CTAStrip'
import { Card } from '@/components/shared/Card'

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const services = [
  { href: '/services/website-and-systems', emoji: '🚀', name: 'Growth Foundation', price: 'Learn More →', description: 'A website built to convert homeowners researching remodels in your area — plus CRM, AI follow-up, review capture, and lead tracking.' },
  { href: '/services/lead-generation', emoji: '🚀', name: 'Lead Flow System', price: 'Learn More →', description: 'Meta ads that get in front of homeowners actively planning a remodel. Never lose a $20K kitchen job to a missed call again.' },
  { href: '/services/all-in-one-system', emoji: '🚀', name: 'Revenue Engine', price: 'Learn More →', description: 'The complete done-for-you system: website, CRM, ads, AI, content, and reporting — all built for remodelers.' },
  { href: '/services/content-foundation', emoji: '📸', name: 'Content Starter', price: 'Learn More →', description: 'Before/after content from your own job sites turned into 8–12 short-form videos per month.' },
  { href: '/services/content-growth', emoji: '📸', name: 'Content Growth', price: 'Learn More →', description: '2 filming days, 15–20 remodeling project videos + full content strategy per month.' },
  { href: '/services/content-authority', emoji: '📸', name: 'Local Authority Content', price: 'Learn More →', description: '3 filming days max, 25–30 videos — become the known remodeler in your local market.' },
]

const remodeling = [
  'Kitchen Remodeling', 'Bathroom Remodeling', 'Basement Finishing',
  'Home Additions', 'Whole-Home Renovation', 'Deck & Outdoor Living',
  'Flooring & Interior Finishes', 'Siding & Exterior', 'Window & Door Replacement',
  'Custom Closets & Built-Ins', 'Garage Conversions', 'ADA / Aging-in-Place Remodels',
]

const reasons = [
  'Exclusively focused on Connecticut home remodeling contractors',
  'Month-to-month agreements — no long-term contracts',
  'Full-service marketing — website, ads, content, and automation',
  'AI-powered follow-up so you never lose a lead to a missed call',
  'Deep understanding of the remodeling sales cycle and job values',
  'Automated review capture so you outrank competitors on Google',
]

export default function ServiceAreaTemplate({ area }: { area: ServiceArea }) {
  const location = `${area.name}, ${area.state}`

  return (
    <>
      {/* Hero */}
      <section className="relative bg-void pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 700px 500px at 85% 50%, rgba(255,85,0,0.12), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="noise-overlay" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/service-areas" className="font-mono text-[10px] text-muted hover:text-inferno uppercase tracking-[0.15em] transition-colors">
              SERVICE AREAS
            </Link>
            <span className="text-muted">/</span>
            {area.county && (
              <>
                <span className="font-mono text-[10px] text-muted uppercase tracking-[0.15em]">{area.county}</span>
                <span className="text-muted">/</span>
              </>
            )}
            <span className="font-mono text-[10px] text-inferno uppercase tracking-[0.15em]">{area.name}</span>
          </div>

          <SectionLabel label="HOME REMODELING MARKETING" className="mb-4" />
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-bone tracking-wider mb-6 leading-tight max-w-4xl">
            MARKETING FOR HOME REMODELING CONTRACTORS IN{' '}
            <span className="text-inferno">{location.toUpperCase()}</span>
          </h1>
          <p className="font-body text-light/75 text-lg max-w-2xl leading-relaxed mb-8">
            {area.intro.slice(0, 280)}...
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center gap-2 bg-inferno text-black font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
            >
              ⚡ BOOK YOUR FREE AUDIT
            </a>
            <a
              href="tel:+18602003455"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-display text-sm px-8 py-4 rounded tracking-widest hover:bg-gray-100 transition-colors shadow-sm"
            >
              <Phone size={16} /> (860) 200-3455
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionLabel label={`SERVING ${location.toUpperCase()}`} className="mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-bone tracking-wider mb-6">
            HOME REMODELING MARKETING IN {area.name.toUpperCase()}
          </h2>
          <p className="font-body text-light/70 leading-relaxed text-base">
            {area.intro}
          </p>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-void py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label={`SERVICES IN ${area.name.toUpperCase()}`} className="mb-3" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-10">
            WHAT WE OFFER IN {area.name.toUpperCase()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group block">
                <Card className="p-5 h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.emoji}</span>
                    <h3 className="font-display text-lg text-[#0A0A0A] tracking-wide group-hover:text-[#FF5500] transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <p className="font-body text-xs text-[#666666] leading-relaxed mb-3">{s.description}</p>
                  <span className="font-display text-lg text-[#FF5500]">{s.price}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why EGL */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel label={`WHY ${area.name.toUpperCase()} REMODELERS CHOOSE EGL`} className="mb-3" />
            <h2 className="font-display text-3xl md:text-4xl text-bone tracking-wider mb-6">
              THE EGL MARKETING DIFFERENCE
            </h2>
            <p className="font-body text-light/70 leading-relaxed mb-6">{area.whyEGL}</p>
            <a
              href={BOOKING_URL}
              className="inline-block bg-inferno text-black font-display text-sm px-8 py-3 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
            >
              BOOK YOUR FREE AUDIT
            </a>
          </div>
          <div className="space-y-3">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-3 bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl px-4 py-3">
                <Check size={15} className="text-[#FF5500] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-[#333]">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remodeling specialties */}
      <section className="bg-void py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionLabel label={`REMODELING SPECIALTIES IN ${area.name.toUpperCase()}`} className="mb-3 justify-center" />
          <h2 className="font-display text-3xl md:text-4xl text-bone tracking-wider mb-8">
            REMODELING SPECIALTIES WE MARKET IN {area.name.toUpperCase()}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {remodeling.map((t) => (
              <div
                key={t}
                className="bg-[#F5F0E8] border border-[#E0D8CC] rounded px-4 py-2 font-mono text-xs text-[#333] uppercase tracking-[0.1em] hover:border-[#FF5500] hover:text-[#FF5500] transition-all cursor-default"
              >
                {t}
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#CCCCCC] mb-6">
            If you&apos;re a home remodeling contractor in {location}, book a free 15-minute Local Visibility Audit and see where you&apos;re losing jobs to competitors.
          </p>
          <Link href="/book" className="inline-block bg-[#FF5500] text-white font-display text-sm px-6 py-3 rounded tracking-widest hover:bg-[#CC3300] transition-colors shadow-[0_4px_24px_rgba(255,85,0,0.35)]">
            BOOK YOUR FREE AUDIT
          </Link>
        </div>
      </section>

      <CTAStrip headline={`READY TO GROW YOUR BUSINESS IN ${area.name.toUpperCase()}?`} />

      {/* Schema JSON-LD for this location */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'EGL Marketing',
            description: `Home remodeling marketing agency serving kitchen and bath remodeling contractors in ${location}. Done-for-you marketing systems including website, CRM, ads, and content.`,
            url: `https://eglmarketing.co/service-areas/${area.slug}`,
            telephone: '+18602003455',
            email: 'info@eglmarketing.co',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Wethersfield',
              addressRegion: 'CT',
              postalCode: '06109',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'Place',
              name: location,
            },
            openingHours: 'Mo-Su 09:00-19:00',
          }),
        }}
      />
    </>
  )
}
