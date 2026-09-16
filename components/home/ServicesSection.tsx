'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import { useState, useEffect } from 'react'

const TRADES = [
  'REMODELERS',
  'ROOFERS',
  'PLUMBERS',
  'HVAC PROS',
  'LANDSCAPERS',
  'ELECTRICIANS',
  'PAINTERS',
  'CONTRACTORS',
  'FLOORING PROS',
  'POOL BUILDERS',
]

function CyclingTrade() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TRADES.length)
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="inline-block relative" style={{ minWidth: '1ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={TRADES[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="text-inferno inline-block"
        >
          {TRADES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const packages = [
  {
    badge: 'Foundation First',
    badgeFeatured: false,
    name: 'Local Presence Builder',
    description:
      'Before ads, before content, before anything else — get your foundation right. Be found, look legit, capture every lead.',
    features: [
      'Standard website with portfolio gallery',
      'Google Business Profile setup & optimization',
      'Automated Google review capture system',
      'GHL CRM & pipeline setup',
      'Lead capture forms',
      'Local SEO & schema markup',
      'Mobile optimization',
      'Monthly website updates',
      'GBP maintenance & review monitoring',
    ],
    goal: 'Once this foundation is generating leads and your phone is ringing, we scale you up to the Growth Engine.',
    goalLabel: 'The Goal',
  },
  {
    badge: 'Full System',
    badgeFeatured: true,
    name: 'Market Dominator',
    description:
      'Full-service marketing system built to generate consistent leads and dominate your local market month after month.',
    setupFeatures: [
      'Premium custom website — fully bespoke design',
      'Meta ads account setup & campaign build',
      'AI automations — missed call text-back, lead follow-up sequences',
      'Full GHL CRM & pipeline build',
    ],
    monthlyFeatures: [
      '1 on-site content shoot per month (EGL films)',
      '8–10 short-form videos cut from that footage',
      'Meta ads management with fresh creative monthly',
      'Ongoing GBP optimization',
      'Automated review system monitoring',
      'Monthly performance report',
      'Monthly strategy call',
    ],
    goal: 'One job. That\'s all it takes to cover the cost. We aim to deliver a lot more than that.',
    goalLabel: 'The Math',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-4 grid-overlay" id="services">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider mb-2 leading-tight">
            SERVICE PACKAGES
          </h2>
          <p className="font-body text-muted text-sm">
            Connecticut local service businesses. One right fit per client.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-xl border p-9 flex flex-col ${
                pkg.badgeFeatured
                  ? 'bg-[#1A1512] border-inferno'
                  : 'bg-[#1A1512] border-[#2A2320]'
              }`}
            >
              {/* Orange top bar on featured */}
              {pkg.badgeFeatured && (
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                  style={{ background: '#FF5500' }}
                  aria-hidden="true"
                />
              )}

              {/* Badge */}
              <div className="mb-5">
                <span
                  className={`inline-block text-[11px] font-bold tracking-[2px] uppercase px-3 py-1 rounded ${
                    pkg.badgeFeatured
                      ? 'bg-inferno text-white'
                      : 'bg-[#2A2320] text-muted'
                  }`}
                >
                  {pkg.badge}
                </span>
              </div>

              <h3 className="font-display text-3xl text-bone tracking-wide mb-2 leading-tight">
                {pkg.name}
              </h3>
              <p className="font-body text-muted text-sm leading-relaxed mb-8">
                {pkg.description}
              </p>

              {/* Features */}
              {'features' in pkg && pkg.features ? (
                <>
                  <p className="font-mono text-[11px] text-inferno tracking-[2px] uppercase mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-0 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 py-2 border-b border-[#1E1A17] last:border-0"
                      >
                        <Check size={13} className="text-inferno flex-shrink-0 mt-0.5" />
                        <span className="font-body text-[13px] text-[#C8C0B8] leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <p className="font-mono text-[11px] text-inferno tracking-[2px] uppercase mb-3">
                    One-Time Setup Includes
                  </p>
                  <ul className="space-y-0 mb-6">
                    {pkg.setupFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 py-2 border-b border-[#1E1A17] last:border-0"
                      >
                        <Check size={13} className="text-inferno flex-shrink-0 mt-0.5" />
                        <span className="font-body text-[13px] text-[#C8C0B8] leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-[11px] text-inferno tracking-[2px] uppercase mb-3">
                    Every Month Includes
                  </p>
                  <ul className="space-y-0 mb-8 flex-1">
                    {pkg.monthlyFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 py-2 border-b border-[#1E1A17] last:border-0"
                      >
                        <Check size={13} className="text-inferno flex-shrink-0 mt-0.5" />
                        <span className="font-body text-[13px] text-[#C8C0B8] leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Goal/Math callout */}
              <div className="bg-[#FF550015] border border-[#FF550030] rounded-lg px-4 py-3 mb-6">
                <p className="font-mono text-[11px] text-inferno tracking-[2px] uppercase mb-1">
                  {pkg.goalLabel === 'The Math' ? '💰' : '📈'} {pkg.goalLabel}
                </p>
                <p className="font-body text-[13px] text-[#C8C0B8] leading-relaxed">{pkg.goal}</p>
              </div>

              <a
                href={BOOKING_URL}
                className={`block text-center font-display text-sm tracking-widest py-3 rounded transition-colors ${
                  pkg.badgeFeatured
                    ? 'bg-inferno text-black hover:bg-scorch'
                    : 'bg-[#2A2320] text-bone hover:bg-[#3A3320]'
                }`}
              >
                BOOK A FREE CALL
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-mono text-[11px] text-[#444] tracking-[1px] mt-8">
          Pricing presented on discovery calls only. One recommendation per client — no menus.
        </p>
      </div>
    </section>
  )
}
