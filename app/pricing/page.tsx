import type { Metadata } from 'next'
import SectionLabel from '@/components/shared/SectionLabel'
import CTAStrip from '@/components/shared/CTAStrip'
import ProcessSteps from '@/components/shared/ProcessSteps'
import PricingSection from '@/components/home/PricingSection'
import {
  getPayloadPricingCards,
  getPayloadContentAddOns,
  getPayloadProcessSteps,
  getPayloadFAQ,
} from '@/lib/payload/queries'

export const metadata: Metadata = {
  title: 'Pricing | Done-For-You Growth Systems for Local Service Businesses',
  description:
    'Transparent pricing for Growth Foundation ($297/mo), Lead Flow System ($1,500/mo), Revenue Engine ($2,997/mo), and content add-ons. Month-to-month. No contracts. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/pricing' },
  openGraph: {
    title: 'Pricing — EGL Marketing',
    description: 'Growth systems starting at $297/mo. Lead generation, AI follow-up, content, and more. Month-to-month.',
    url: 'https://egl.solutions/pricing',
  },
}

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const DEFAULT_FAQS = [
  { q: 'Do I need a long-term contract?', a: 'No. All plans are month-to-month. You can cancel anytime with 30 days notice.' },
  { q: 'What does the setup fee cover?', a: 'The setup fee covers the full build — your website or landing page, CRM pipeline, automations, tracking, and any campaigns included in your plan. Most foundational systems are launched within 7–10 business days after we receive access and assets.' },
  { q: 'Can I upgrade my plan later?', a: "Yes. You can move to a higher tier at any time. We'll credit your remaining setup toward the upgrade." },
  { q: 'Is ad spend included in the price?', a: 'No. Ad spend is billed separately and paid directly by the client to the ad platform (Google, Meta, etc.). We manage the campaigns — you control and own the budget.' },
  { q: 'Can I add content to my growth system plan?', a: 'Yes. Content add-ons (Content Starter, Content Growth, Local Authority Content) can be added to any plan at any time.' },
]

export default async function PricingPage() {
  const [pricingCards, contentAddOns, processSteps, faqItems] = await Promise.all([
    getPayloadPricingCards(),
    getPayloadContentAddOns(),
    getPayloadProcessSteps(),
    getPayloadFAQ('pricing'),
  ])

  const faqs = faqItems?.length
    ? faqItems.map((f) => ({ q: f.question, a: f.answer }))
    : DEFAULT_FAQS

  return (
    <>
      <section className="relative bg-void pt-32 pb-16 px-4 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 600px 400px at 80% 40%, rgba(255,85,0,0.12), transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel label="PRICING" className="mb-4 justify-center" />
          <h1 className="font-display text-6xl md:text-7xl text-bone tracking-wider mb-4 leading-tight">
            SIMPLE, TRANSPARENT PRICING
          </h1>
          <p className="font-body text-light/70 text-lg max-w-xl mx-auto mb-8">
            Three growth systems built for where you are now and where you want to go. Month-to-month. No long-term contracts. No hidden fees.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-block bg-inferno text-black font-display text-lg px-10 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
          >
            ⚡ SCHEDULE A FREE CALL
          </a>
        </div>
      </section>

      <PricingSection cards={pricingCards} addOns={contentAddOns} />

      <section className="bg-void py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="HOW IT WORKS" className="mb-3" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-10">
            GETTING STARTED IS EASY
          </h2>
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="bg-ash py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-bone tracking-wider mb-8 text-center">
            COMMON PRICING QUESTIONS
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.28)] p-6">
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
