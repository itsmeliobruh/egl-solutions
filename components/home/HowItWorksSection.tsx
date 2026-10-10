'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const steps = [
  {
    number: '01',
    title: 'WE AUDIT YOUR ONLINE PRESENCE. FREE.',
    body: "A live screen-share showing exactly where you're losing jobs to competitors: your Google profile, your reviews, your website and your ads, side by side with the top businesses in your town. No pressure. You keep the findings either way.",
    cta: { label: 'Get My Free Local Visibility Audit →', href: BOOKING_URL },
  },
  {
    number: '02',
    title: 'WE BUILD YOUR FOUNDATION',
    body: 'A fast website that shows off your best work, filmed and photographed by us on your job sites. A Google Business Profile built to rank in your town. A CRM that catches every lead, and a review system that builds your reputation while you work. Live in 7 to 10 days.',
  },
  {
    number: '03',
    title: 'WE KEEP THE CALLS COMING',
    body: "Every month we keep your Google presence growing, your reviews coming in and your site fresh, plus content and ads when you're ready to scale. You get a monthly report on your calls, rankings and reviews, so you always know what's working.",
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
      </div>
    </section>
  )
}
