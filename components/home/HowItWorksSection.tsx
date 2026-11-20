'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const steps = [
  {
    number: '01',
    title: 'WE AUDIT YOUR MARKETING. FREE.',
    body: "A live screen-share showing exactly where you're losing customers: your ads, your videos and social, your Google profile and reviews, and your website, side by side with the top businesses in your town. No pressure. You keep the findings either way.",
    cta: { label: 'Get My Free Local Visibility Audit →', href: BOOKING_URL },
  },
  {
    number: '02',
    title: 'WE BUILD YOUR FOUNDATION',
    body: 'A fast website, a Google profile built to rank in your town, a CRM that catches every lead and a review system that runs while you work. Every plan starts here. Live in 7 to 10 days.',
  },
  {
    number: '03',
    title: 'WE FILM, WE RUN THE ADS, YOU GET BOOKED',
    body: "Once a month we film at your business and turn it into videos and ads for Facebook and Instagram. We test new ads every month, cut the losers and keep your Google and website fresh. You get a monthly scoreboard: what you spent and what got booked.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-[#0D0D0D] py-16 lg:py-20 px-4" id="how-it-works">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <SectionLabel label="HOW IT WORKS" className="mb-4" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider leading-tight">
            THREE STEPS TO A BOOKED-OUT SCHEDULE
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-6"
            >
              {/* Number + vertical line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full border-2 border-inferno flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,85,0,0.08)' }}
                >
                  <span className="font-display text-sm text-inferno tracking-wider">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#2A2320] mt-2 mb-2 min-h-[48px]" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-12 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl text-bone tracking-wide mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-3">
                  {step.body}
                </p>
                {step.cta && (
                  <a
                    href={step.cta.href}
                    className="font-body text-sm text-inferno hover:text-scorch transition-colors"
                  >
                    {step.cta.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href={BOOKING_URL}
            className="flex items-center justify-center gap-2 bg-inferno text-black font-display text-base md:text-lg px-6 py-3.5 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
          >
            ⚡ GET MY FREE LOCAL VISIBILITY AUDIT
          </a>
        </motion.div>
      </div>
    </section>
  )
}
