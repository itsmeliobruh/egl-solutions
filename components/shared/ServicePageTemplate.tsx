import type { Service } from '@/lib/services'
import Link from 'next/link'
import { Check } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import ProcessSteps from '@/components/shared/ProcessSteps'
import CTAStrip from '@/components/shared/CTAStrip'
import PricingTable from '@/components/shared/PricingTable'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

export default function ServicePageTemplate({ service }: { service: Service }) {
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
            <span className="font-mono text-[10px] text-black bg-inferno px-3 py-1 rounded uppercase tracking-widest inline-block mb-4">
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
          <div className="flex items-center gap-6 mb-8">
            {service.originalPrice && (
              <span className="font-body text-muted line-through text-lg">{service.originalPrice}</span>
            )}
            <span className="font-display text-4xl text-inferno">{service.price}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKING_URL}
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <SectionLabel label="WHAT IS IT?" className="mb-3" />
            <h2 className="font-display text-2xl text-bone tracking-wide mb-4">{service.name}</h2>
            <p className="font-body text-sm text-muted leading-relaxed">{service.description}</p>
          </div>
          <div>
            <SectionLabel label="WHY IT MATTERS" className="mb-3" />
            <h2 className="font-display text-2xl text-bone tracking-wide mb-4">The Impact</h2>
            <p className="font-body text-sm text-muted leading-relaxed">{service.whyImportant}</p>
          </div>
          <div>
            <SectionLabel label="IS THIS FOR YOU?" className="mb-3" />
            <h2 className="font-display text-2xl text-bone tracking-wide mb-4">When To Consider It</h2>
            <p className="font-body text-sm text-muted leading-relaxed">{service.whenToConsider}</p>
          </div>
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
              <div key={item} className="flex items-start gap-3 bg-mid border border-steel rounded px-5 py-4">
                <Check size={16} className="text-inferno mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-light">{item}</span>
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
                    className="border border-steel rounded px-4 py-3 flex items-center gap-3"
                  >
                    <span className="font-body text-sm text-light">{addon.name}</span>
                    <span className="font-display text-base text-inferno">{addon.price}</span>
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
          <div
            className={`bg-mid border rounded p-8 ${
              service.badge === 'MOST POPULAR' || service.badge === 'MOST VALUE' || service.badge === 'MOST RESULTS'
                ? 'border-t-2 border-inferno'
                : 'border-steel'
            }`}
          >
            <div className="text-4xl mb-3">{service.emoji}</div>
            <h3 className="font-display text-2xl text-bone tracking-wide mb-2">{service.name}</h3>
            {service.badge && (
              <span className="font-mono text-[9px] text-black bg-inferno px-2 py-0.5 rounded uppercase tracking-widest inline-block mb-3">
                {service.badge}
              </span>
            )}
            <div className="mb-6">
              {service.originalPrice && (
                <span className="font-body text-sm text-muted line-through block">{service.originalPrice}</span>
              )}
              <span className="font-display text-5xl text-inferno">{service.price}</span>
            </div>
            <a
              href={BOOKING_URL}
              className="block bg-inferno text-black font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno mb-3"
            >
              GET STARTED
            </a>
            <p className="font-body text-xs text-muted">Month-to-month. No contracts required.</p>
          </div>
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
      <CTAStrip />

      {/* Full pricing comparison */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="COMPARE ALL PLANS" className="mb-3" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-10">
            FIND THE RIGHT FIT
          </h2>
          <PricingTable />
        </div>
      </section>
    </>
  )
}
