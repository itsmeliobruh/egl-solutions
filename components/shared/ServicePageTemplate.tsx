import type { Service } from '@/lib/services'
import Link from 'next/link'
import { Check } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import ProcessSteps from '@/components/shared/ProcessSteps'
import CTAStrip from '@/components/shared/CTAStrip'
import PricingSection from '@/components/home/PricingSection'
import { Card } from '@/components/shared/Card'
import { BOOKING_LINKS, DEFAULT_BOOKING } from '@/lib/bookingLinks'

export default function ServicePageTemplate({ service }: { service: Service }) {
  const bookingUrl = BOOKING_LINKS[service.slug] ?? DEFAULT_BOOKING
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-void overflow-hidden pt-20">
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 700px 500px at 90% 50%, rgba(255,85,0,0.15), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="noise-overlay" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {service.badge && (
            <span className="font-mono text-[10px] text-black bg-[#FF5500] px-3 py-1 rounded-sm uppercase tracking-[0.14em] inline-block mb-4">
              {service.badge}
            </span>
          )}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{service.emoji}</span>
            <SectionLabel label={service.category === 'systems' ? '⚡ MARKETING SYSTEMS' : '📸 CONTENT CREATION'} />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-bone tracking-wider mb-4 leading-tight">
            {service.headline}
          </h1>
          <p className="font-body text-light/80 text-lg max-w-2xl mb-6 leading-relaxed">
            {service.subheadline}
          </p>
          <div className="mb-8">
            <span className="font-display text-3xl text-[#FF5500]">
              {service.setup ? `${service.setup} + ${service.price}` : service.price}
            </span>
            {service.pricingNote && (
              <p className="font-body text-sm text-muted mt-2">{service.pricingNote}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={bookingUrl}
              className="inline-flex items-center justify-center gap-2 bg-inferno text-black font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
            >
              ⚡ GET STARTED TODAY
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-steel text-light font-display text-lg px-8 py-4 rounded tracking-widest hover:border-inferno hover:text-inferno transition-colors"
            >
              VIEW ALL PLANS
            </Link>
          </div>
        </div>
      </section>

      {/* What is it / Why important / When to consider */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { label: 'WHAT IS IT?', heading: service.name, body: service.description, number: '01' },
            { label: 'WHY IT MATTERS', heading: 'The Impact', body: service.whyImportant, number: '02' },
            { label: 'IS THIS FOR YOU?', heading: 'When To Consider It', body: service.whenToConsider, number: '03' },
          ].map(({ label, heading, body, number }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-xl bg-[#F5F0E8] border border-[#E0D8CC] shadow-[0_2px_16px_rgba(0,0,0,0.28)] p-7 flex flex-col"
            >
              {/* Ghost number watermark */}
              <span className="absolute top-3 right-4 font-display text-[96px] leading-none text-[#C8C0B4] opacity-25 pointer-events-none select-none">
                {number}
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#FF5500] mb-3 block">
                {label}
              </span>
              <h2 className="font-display text-2xl text-[#0A0A0A] tracking-wide mb-4">{heading}</h2>
              <p className="font-body text-sm text-[#555] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-void py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionLabel label="WHAT'S INCLUDED" className="mb-3" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-10">
            EVERYTHING IN THIS PLAN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl px-5 py-4">
                <Check size={16} className="text-[#FF5500] mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-[#333]">{item}</span>
              </div>
            ))}
          </div>
          {service.addons && service.addons.length > 0 && (
            <div className="mt-8">
              <SectionLabel label="OPTIONAL ADD-ONS" className="mb-4" />
              <div className="flex flex-wrap gap-3">
                {service.addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl px-4 py-3 flex items-center gap-3"
                  >
                    <span className="font-body text-sm text-[#333]">{addon.name}</span>
                    <span className="font-display text-base text-[#FF5500]">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Card */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-md mx-auto text-center">
          <SectionLabel label="PRICING" className="mb-3 justify-center" />
          <Card
            featured={
              service.badge === 'MOST POPULAR' ||
              service.badge === 'MOST VALUE' ||
              service.badge === 'MOST RESULTS'
            }
            className="p-8"
          >
            <div className="text-4xl mb-3">{service.emoji}</div>
            <h3 className="font-display text-2xl text-[#0A0A0A] tracking-wide mb-2">{service.name}</h3>
            {service.badge && (
              <span className="font-mono text-[9px] text-black bg-[#FF5500] px-2.5 py-1 rounded-sm uppercase tracking-[0.14em] inline-block mb-3">
                {service.badge}
              </span>
            )}
            <div className="mb-6">
              <span className="font-display text-3xl text-[#FF5500] block leading-tight">
                {service.setup ? `${service.setup} + ${service.price}` : service.price}
              </span>
              {service.pricingNote && (
                <p className="font-body text-xs text-[#999] mt-2 leading-snug">{service.pricingNote}</p>
              )}
            </div>
            <a
              href={bookingUrl}
              className="block bg-[#FF5500] text-black font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-[#CC3300] transition-colors shadow-[0_4px_24px_rgba(255,85,0,0.35)] mb-3"
            >
              GET STARTED
            </a>
            <p className="font-body text-xs text-[#AAAAAA]">Month-to-month. No contracts required.</p>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="bg-void py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="HOW IT WORKS" className="mb-3" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-10">
            OUR PROCESS IS SIMPLE
          </h2>
          <ProcessSteps />
        </div>
      </section>

      {/* CTA Strip */}
      <CTAStrip bookingHref={bookingUrl} />

      {/* Full pricing comparison */}
      <PricingSection />
    </>
  )
}
