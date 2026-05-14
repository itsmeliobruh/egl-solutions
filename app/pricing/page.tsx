import type { Metadata } from 'next'
import SectionLabel from '@/components/shared/SectionLabel'
import CTAStrip from '@/components/shared/CTAStrip'
import ProcessSteps from '@/components/shared/ProcessSteps'
import PricingSection from '@/components/home/PricingSection'

export const metadata: Metadata = {
  title: 'Pricing | Marketing Packages for Local Service Businesses in CT',
  description:
    'Transparent, month-to-month pricing for websites, lead generation, AI automation, and content creation. Plans starting at $297/mo. No contracts. EGL Solutions, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/pricing' },
  openGraph: {
    title: 'Pricing — EGL Solutions',
    description: 'Month-to-month marketing packages starting at $297/mo. No long-term contracts.',
    url: 'https://egl.solutions/pricing',
  },
}

const BOOKING_URL = 'https://egl.solutions/booking-step1'

export default function PricingPage() {
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
            background: 'radial-gradient(ellipse 600px 400px at 80% 40%, rgba(255,85,0,0.12), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel label="PRICING" className="mb-4 justify-center" />
          <h1 className="font-display text-6xl md:text-7xl text-bone tracking-wider mb-4 leading-tight">
            SIMPLE, TRANSPARENT PRICING
          </h1>
          <p className="font-body text-light/70 text-lg max-w-xl mx-auto mb-8">
            Month-to-month agreements. No long-term contracts. No hidden fees. Just results.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-block bg-inferno text-black font-display text-lg px-10 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
          >
            ⚡ SCHEDULE A FREE CALL
          </a>
        </div>
      </section>

      {/* Pricing cards */}
      <PricingSection />

      {/* Process */}
      <section className="bg-void py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="HOW IT WORKS" className="mb-3" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-10">
            GETTING STARTED IS EASY
          </h2>
          <ProcessSteps />
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-ash py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-bone tracking-wider mb-8 text-center">
            COMMON PRICING QUESTIONS
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do I need a long-term contract?',
                a: 'No. All plans are month-to-month. You can cancel anytime.',
              },
              {
                q: 'What is the setup fee?',
                a: 'There is no separate setup fee. Your first month covers the full build and launch.',
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Absolutely. You can upgrade to a higher tier at any time — just let your account manager know.',
              },
              {
                q: 'Is there an ad spend budget included?',
                a: 'Ad spend budgets are separate from our management fees. We recommend a minimum of $500–$1,000/mo in ad spend for Lead Generation plans. We help you set and optimize this budget.',
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.28)] p-6"
              >
                <h3 className="font-body font-semibold text-[#0A0A0A] mb-2">{q}</h3>
                <p className="font-body text-sm text-[#666666]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}
