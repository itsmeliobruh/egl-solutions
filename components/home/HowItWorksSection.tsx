'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

const steps = [
  {
    number: '01',
    title: 'WE AUDIT YOUR ONLINE PRESENCE — FREE',
    body: 'A live 15-minute screen-share showing exactly where you\'re losing leads to competitors. Your Google profile, your website, your ads presence — compared side by side to the top businesses in your area. No pitch. Just real findings.',
    cta: { label: 'Book your free audit →', href: BOOKING_URL },
  },
  {
    number: '02',
    title: 'WE BUILD YOUR DIGITAL FOUNDATION',
    body: 'A fast professional website that showcases your best work. Your Google Business Profile optimized to rank locally in Connecticut. A CRM that captures every lead automatically. The review system that builds your reputation while you sleep. Built in 7–10 days.',
  },
  {
    number: '03',
    title: 'WE FILL YOUR PIPELINE EVERY MONTH',
    body: 'Ongoing content, ads, and Google optimization that keeps new customers finding you, trusting you, and booking with you — month after month. You focus on the work. We handle the marketing.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-4" id="how-it-works">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <SectionLabel label="HOW IT WORKS" className="mb-4" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider leading-tight">
            THREE STEPS TO A FULL PIPELINE
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
