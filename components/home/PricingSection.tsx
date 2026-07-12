'use client'

import { Check } from 'lucide-react'
import { PricingCard, type PricingCardData } from '@/components/pricing/PricingCard'
import { PricingCarousel } from '@/components/pricing/PricingCarousel'
import { BOOKING_LINKS } from '@/lib/bookingLinks'
import type { ContentAddOnData } from '@/lib/payload/queries'

const CONSULTATION_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const coreCards: PricingCardData[] = [
  {
    title: 'Growth Foundation',
    tagline: 'Build the system before you buy more traffic.',
    description: 'For businesses that need a website, CRM, follow-up, reviews, and tracking built right.',
    setup: 1000,
    monthly: 297,
    adSpendSeparate: false,
    cta: 'Build My Foundation',
    badge: 'MOST POPULAR',
    features: [
      '10–15 page high-converting website',
      'Lead capture form + call button + booking link',
      'CRM pipeline setup',
      'Basic SMS/email follow-up automations',
      'Google review request workflow',
      'Review capture system',
      'Lead source tracking',
      'Light monthly support',
    ],
    bookingHref: BOOKING_LINKS['website-and-systems'],
  },
  {
    title: 'Lead Flow System',
    tagline: 'Generate, capture, and follow up with new leads every month.',
    description: 'For businesses ready to run ads and create predictable, consistent lead flow.',
    setup: 2000,
    monthly: 1500,
    adSpendSeparate: true,
    cta: 'Get More Leads',
    badge: 'MOST VALUE',
    features: [
      'Everything in Growth Foundation',
      'PLUS',
      'Google Business Profile setup & optimization',
      'Local Service Ads setup, if eligible',
      'Meta Ads setup',
      'Google Ads setup (optional by industry)',
      'Offer-specific landing page',
      'Pixel, UTM & call tracking',
      'Monthly performance report',
      'Leads, appointments & cost per lead reporting',
      'Weekly campaign adjustments',
    ],
    bookingHref: BOOKING_LINKS['lead-generation'],
  },
  {
    title: 'Revenue Engine',
    tagline: 'The complete done-for-you growth system.',
    description: 'Website, CRM, ads, AI follow-up, content, reviews, reporting, and optimization.',
    setup: 5000,
    monthly: 2997,
    adSpendSeparate: true,
    cta: 'Build My Growth Engine',
    badge: 'MOST RESULTS',
    features: [
      'Everything in Lead Flow System',
      'PLUS',
      'Advanced AI agents',
      'AI chat agent + missed-call text-back',
      'AI appointment setter',
      'Sales pipeline automations',
      'Lead reactivation campaign',
      'Automated review engine',
      'Email/SMS nurture',
      '1 filming day + 8–12 videos/mo',
      'Monthly strategy call',
      'Priority support',
    ],
    bookingHref: BOOKING_LINKS['all-in-one-system'],
  },
]

const contentAddOns = [
  {
    name: 'Content Starter',
    price: '$997/mo',
    bestFor: 'Businesses that need consistent trust-building content without a full content team.',
    includes: [
      '1 filming day per month',
      '8–12 short-form videos per month',
      'Captions included',
      'Posting guidance',
      'Basic content calendar',
    ],
    bookingHref: BOOKING_LINKS['content-foundation'],
  },
  {
    name: 'Content Growth',
    price: '$1,997/mo',
    badge: 'MOST POPULAR',
    bestFor: 'Businesses that want to post more consistently and build stronger local authority.',
    includes: [
      '2 filming days per month',
      '15–20 short-form videos per month',
      'Hooks/scripts included',
      'Content calendar + strategy',
      'Posting support',
      'Monthly strategy call',
    ],
    bookingHref: BOOKING_LINKS['content-growth'],
  },
  {
    name: 'Local Authority Content',
    price: '$3,997/mo',
    bestFor: 'Businesses that want to dominate their local market with content, trust, and testimonials.',
    includes: [
      '3 filming days per month max',
      '25–30 short-form videos per month',
      'Founder/owner content',
      'Team/trust content',
      'Testimonial content',
      'Monthly campaign themes',
      'Posting support',
    ],
    bookingHref: BOOKING_LINKS['content-authority'],
  },
]

export default function PricingSection({
  cards,
  addOns,
}: {
  cards?: PricingCardData[] | null
  addOns?: ContentAddOnData[] | null
}) {
  const coreCardsData = cards ?? coreCards
  const contentAddOnsData = addOns ?? contentAddOns
  return (
    <section id="pricing" className="bg-[#080808] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Label + Heading */}
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#FF5500] mb-2">
          04 — PRICING
        </p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-2">
          CHOOSE YOUR GROWTH SYSTEM
        </h2>
        <p className="font-body text-[#AAAAAA] text-base mb-10 max-w-xl">
          Three systems built to fit where you are now and where you want to go. Month-to-month. No long-term contracts.
        </p>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-stretch mb-6">
          {coreCardsData.map((card) => (
            <PricingCard key={card.title} {...card} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mb-6">
          <PricingCarousel cards={coreCardsData} resetKey="core" />
        </div>

        {/* Content Add-Ons */}
        <div className="mt-20">
          <div className="mb-8">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#FF5500] mb-2">
              CONTENT ADD-ONS
            </p>
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-white mb-2">
              Add Content to Any Plan
            </h3>
            <p className="font-body text-[#AAAAAA] text-sm max-w-lg">
              Build trust, stay visible, and turn your business into the obvious local choice with monthly short-form content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contentAddOnsData.map((addon) => (
              <div
                key={addon.name}
                className="relative rounded-xl bg-[#F5F0E8] border border-[#E0D8CC] shadow-[0_2px_16px_rgba(0,0,0,0.28)] flex flex-col overflow-hidden"
              >
                {addon.badge && (
                  <div className="bg-[#FF5500] text-white text-center font-mono text-[9px] tracking-[0.2em] uppercase py-1.5">
                    {addon.badge}
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="font-display text-xl tracking-wide text-[#0A0A0A] mb-1">{addon.name}</p>
                  <p className="font-display text-2xl text-[#FF5500] mb-3">{addon.price}</p>
                  <p className="font-body text-xs text-[#666] italic mb-4 leading-relaxed">{addon.bestFor}</p>
                  <div className="space-y-1.5 mb-5 flex-1">
                    {addon.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Check size={12} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-[#333]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={addon.bookingHref}
                    className="block text-center bg-[#0A0A0A] text-white font-display text-sm tracking-widest py-3 rounded-lg hover:bg-[#222] transition-colors"
                  >
                    Add Content
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#CCCCCC] mb-4">
            NOT SURE WHICH PLAN IS RIGHT FOR YOU?
          </p>
          <a
            href={CONSULTATION_URL}
            className="inline-block bg-transparent border border-[#FF5500] text-[#FF5500] font-bold text-base px-10 py-4 rounded-lg hover:bg-[#FF5500] hover:text-black transition-colors tracking-widest"
          >
            SCHEDULE A FREE CALL
          </a>
        </div>
      </div>
    </section>
  )
}
