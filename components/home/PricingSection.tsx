'use client'

import { useState } from 'react'
import { PricingCard, type PricingCardData } from '@/components/pricing/PricingCard'
import { PricingToggle } from '@/components/pricing/PricingToggle'
import { PricingCarousel } from '@/components/pricing/PricingCarousel'

const CONSULTATION_URL =
  'https://egl.solutions/booking-step1?services_interested=FREE+Consultation'

const systemsCards: PricingCardData[] = [
  {
    title: '[ Website + Systems ]',
    subtitle: 'Essentials to Get You Started',
    price: 297,
    oldPrice: null,
    savings: null,
    cta: 'Get Started Now',
    badge: null,
    features: [
      'Website Design',
      'SEO Optimization',
      'Lead Capture Form',
      'Central Marketing Hub',
      'Appointment Reminders',
      'Google Review Capture',
      'AI Chat Agents',
      'Lead Reactivation Campaigns',
      'Reputation Management',
      'Ongoing Support',
    ],
    addons: ['Google Business Setup ($499)', 'Google Local Service Advertising ($299)'],
    href: '/services/website-and-systems',
  },
  {
    title: '[ Lead Generation ]',
    subtitle: 'High-Performance Growth System',
    price: 1499,
    oldPrice: 1999,
    savings: '$500 OFF',
    cta: 'Boost My Growth',
    badge: 'MOST POPULAR',
    features: [
      'Everything In Website + Systems',
      'PLUS',
      'Google Business Setup',
      'Google Local Service Advertising (LSA)',
      'Facebook Business Page Setup',
      'Facebook Ads Campaign Setup',
      'Ad Creatives & Copy',
      'Pixel & Tracking Setup',
      'Monthly Performance Report',
    ],
    addons: ['In Person Content Shoot ($499)'],
    href: '/services/lead-generation',
  },
  {
    title: '[ All-In-One System ]',
    subtitle: 'Your All-In-One Marketing Powerhouse',
    price: 2499,
    oldPrice: null,
    savings: null,
    cta: 'Go All In',
    badge: 'MOST VALUE',
    features: [
      'Everything In Lead Generation',
      'PLUS',
      'Custom Built Central Marketing Hub',
      'Advanced AI Agents',
      'Pipeline Automations',
      'Power Dialers',
      'Email and SMS Marketing',
      'Lead Attribution & Distribution',
      'Dedicated 24/7 Support',
      'Assigned Client Success Manager',
      '1 In Person Content Shoot /Month',
    ],
    subFeatures: [
      'AI Receptionist',
      'AI Appointment Setter',
      'AI Chat Bot',
      'AI Reputation Management',
    ],
    addons: [],
    href: '/services/all-in-one-system',
  },
]

const contentCards: PricingCardData[] = [
  {
    title: '[ Content Foundation ]',
    subtitle: 'Establish Your Presence',
    price: 997,
    oldPrice: null,
    savings: null,
    cta: 'Start Creating',
    badge: null,
    features: [
      '1 Filming Day / Month',
      '10–12 Short-Form Videos',
      'Simple Editing',
      'Posting Guidance',
      'Content Calendar',
      'Content Dashboard',
      'Monthly Review',
    ],
    addons: [],
    href: '/services/content-foundation',
  },
  {
    title: '[ Content Growth ]',
    subtitle: 'Get More Leads With Content',
    price: 2499,
    oldPrice: 3299,
    savings: '$800 OFF',
    cta: 'Grow My Brand',
    badge: 'MOST POPULAR',
    features: [
      '2 Filming Days / Month',
      '15–25 Short-Form Videos',
      'Advanced Editing',
      'Content Strategy + Topic Planning',
      'Content Calendar + Scripting',
      'Content Dashboard',
      'Posting: IG, TikTok, Facebook, YouTube',
      'Monthly Review',
    ],
    addons: [],
    href: '/services/content-growth',
  },
  {
    title: '[ Content Authority ]',
    subtitle: 'Dominate Your Local Market',
    price: 4997,
    oldPrice: null,
    savings: null,
    cta: 'Dominate My Market',
    badge: 'MOST RESULTS',
    features: [
      '3–4 Filming Days / Month',
      '30–40 Short-Form Videos',
      'Advanced Editing',
      'Content Strategy + Topic Planning',
      'Content Calendar + Scripting',
      'Content Dashboard',
      'Posting: IG, TikTok, Facebook, YouTube',
      'CRM & Lead Nurture Integration',
      'Monthly Review',
    ],
    addons: [],
    href: '/services/content-authority',
  },
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'systems' | 'content'>('systems')

  const cards = activeTab === 'systems' ? systemsCards : contentCards

  function handleTabChange(tab: 'systems' | 'content') {
    setActiveTab(tab)
  }

  return (
    <section id="pricing" className="bg-[#080808] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Label + Heading */}
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#FF5500] mb-2">
          04 — PRICING
        </p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-6">
          CHOOSE YOUR PLAN
        </h2>

        {/* Toggle */}
        <div className="flex justify-center">
          <PricingToggle activeTab={activeTab} onTabChange={handleTabChange} />
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-stretch">
          {cards.map((card) => (
            <PricingCard key={card.title} {...card} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <PricingCarousel cards={cards} resetKey={activeTab} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#888] mb-4">
            NEED HELP DECIDING?
          </p>
          <a
            href={CONSULTATION_URL}
            className="inline-block bg-transparent border border-[#FF5500] text-[#FF5500] font-bold text-base px-10 py-4 rounded-lg hover:bg-[#FF5500] hover:text-black transition-colors tracking-widest"
          >
            SCHEDULE FREE CALL
          </a>
        </div>
      </div>
    </section>
  )
}
