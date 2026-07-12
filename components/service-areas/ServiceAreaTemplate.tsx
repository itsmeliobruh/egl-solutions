import type { ServiceArea } from '@/lib/serviceAreas'
import Link from 'next/link'
import { Check, Phone } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import CTAStrip from '@/components/shared/CTAStrip'
import { Card } from '@/components/shared/Card'

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const services = [
  { href: '/services/website-and-systems', emoji: '🚀', name: 'Growth Foundation', price: '$1,000 setup + $297/mo', description: 'Website, CRM, lead capture, follow-up, reviews, and tracking.' },
  { href: '/services/lead-generation', emoji: '🚀', name: 'Lead Flow System', price: '$2,000 setup + $1,500/mo', description: 'Google, Meta Ads, LSA — generate and capture new leads every month. Ad spend separate.' },
  { href: '/services/all-in-one-system', emoji: '🚀', name: 'Revenue Engine', price: '$5,000 setup + $2,997/mo', description: 'Complete done-for-you growth system with AI, ads, content, and reporting. Ad spend separate.' },
  { href: '/services/content-foundation', emoji: '📸', name: 'Content Starter', price: '$997/mo', description: '1 filming day, 8–12 short-form videos per month.' },
  { href: '/services/content-growth', emoji: '📸', name: 'Content Growth', price: '$1,997/mo', description: '2 filming days, 15–20 videos + full content strategy.' },
  { href: '/services/content-authority', emoji: '📸', name: 'Local Authority Content', price: '$3,997/mo', description: '3 filming days max, 25–30 videos — dominate your local market.' },
]

const trades = [
  'General Contractors', 'HVAC', 'Plumbing', 'Electricians', 'Roofing',
  'Landscapers', 'Painters', 'Pressure Washing', 'Tree Service', 'Flooring',
  'Pest Control', 'Pool Construction', 'Home Builders', 'Remodeling', 'Car Detailing',
]

const reasons = [
  'Deep understanding of the local service business landscape',
  'Month-to-month agreements — no long-term contracts',
  'Full-service marketing — website, ads, content, and automation',
  'AI-powered systems that work 24/7 on your behalf',
  'Transparent pricing and reporting — no surprises',
  'Built and proven for trades and home service businesses',
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

          <SectionLabel label="MARKETING SOLUTIONS" className="mb-4" />
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-bone tracking-wider mb-6 leading-tight max-w-4xl">
            MARKETING SOLUTIONS FOR LOCAL SERVICE BUSINESSES IN{' '}
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
              ⚡ GET A FREE CONSULTATION
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
            MARKETING FOR {area.name.toUpperCase()} SERVICE BUSINESSES
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
            <SectionLabel label={`WHY ${area.name.toUpperCase()} BUSINESSES CHOOSE EGL`} className="mb-3" />
            <h2 className="font-display text-3xl md:text-4xl text-bone tracking-wider mb-6">
              THE EGL MARKETING DIFFERENCE
            </h2>
            <p className="font-body text-light/70 leading-relaxed mb-6">{area.whyEGL}</p>
            <a
              href={BOOKING_URL}
              className="inline-block bg-inferno text-black font-display text-sm px-8 py-3 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
            >
              SCHEDULE A FREE CALL
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

      {/* Trades served */}
      <section className="bg-void py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SectionLabel label={`TRADES WE SERVE IN ${area.name.toUpperCase()}`} className="mb-3 justify-center" />
          <h2 className="font-display text-3xl md:text-4xl text-bone tracking-wider mb-8">
            LOCAL TRADES WE WORK WITH IN {area.name.toUpperCase()}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {trades.map((t) => (
              <div
                key={t}
                className="bg-[#F5F0E8] border border-[#E0D8CC] rounded px-4 py-2 font-mono text-xs text-[#333] uppercase tracking-[0.1em] hover:border-[#FF5500] hover:text-[#FF5500] transition-all cursor-default"
              >
                {t}
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#CCCCCC] mb-6">
            Don&apos;t see your trade? We work with all local service businesses in {location}.
          </p>
          <Link href="/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding" className="inline-block bg-[#FF5500] text-white font-display text-sm px-6 py-3 rounded tracking-widest hover:bg-[#CC3300] transition-colors shadow-[0_4px_24px_rgba(255,85,0,0.35)]">
            CONTACT US
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
            description: `Marketing agency serving local service businesses in ${location}.`,
            url: `https://egl.solutions/service-areas/${area.slug}`,
            telephone: '+18602003455',
            email: 'info@egl.solutions',
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
