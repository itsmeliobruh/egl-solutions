'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'
import type { ProcessStepData } from '@/lib/payload/queries'

const DEFAULT_STEPS: ProcessStepData[] = [
  {
    number: '01',
    title: 'AUDIT & INTAKE',
    time: '15–25 mins',
    description: 'We learn about your business, your current marketing, your offer, and what systems you already have in place. Short call. No pressure.',
  },
  {
    number: '02',
    title: 'BUILD YOUR SYSTEM',
    time: '7–10 Days',
    description: 'We build your website or landing page, CRM, lead capture, follow-up, tracking, and any campaigns included in your plan. Most foundational systems launch within 7–10 days after we receive access and assets.',
  },
  {
    number: '03',
    title: 'LAUNCH & OPTIMIZE',
    time: 'Ongoing',
    description: 'We launch the system, monitor performance, review the numbers, and continue improving your campaigns, follow-up, and conversion points every month.',
  },
]

export default function ProcessSteps({ steps }: { steps?: ProcessStepData[] | null }) {
  const items = steps ?? DEFAULT_STEPS

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {items.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <Card className="p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-5xl text-[#FF5500] leading-none flex-shrink-0">{step.number}</span>
              <div>
                <span className="font-mono text-[10px] text-[#999] uppercase tracking-[0.15em] block">{step.time}</span>
                <h3 className="font-display text-xl text-[#0A0A0A] tracking-wide">{step.title}</h3>
              </div>
            </div>
            <p className="font-body text-sm text-[#666666] leading-relaxed">{step.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
