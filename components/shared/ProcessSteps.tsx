'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/shared/Card'

const steps = [
  {
    number: '01',
    title: 'INTRO CALL',
    time: '15 mins',
    description:
      "Short call to understand your needs, answer questions, show live client accounts & results, and decide if we're a good fit.",
  },
  {
    number: '02',
    title: 'WE BUILD YOUR SYSTEM',
    time: '7–10 Days',
    description:
      'Fill out a simple onboarding form with your business details. We get to work building your complete marketing system.',
  },
  {
    number: '03',
    title: 'LAUNCH CALL',
    time: '25 mins',
    description:
      "We walk you through your system, answer questions, and show you how everything works — really just pressing two buttons.",
  },
]

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      {/* Connector line on desktop */}
      <div
        className="hidden md:block absolute top-10 h-px bg-gradient-to-r from-[#FF5500] via-[#FF8C00] to-[#FF5500] opacity-30 z-0"
        style={{ left: '20%', right: '20%' }}
      />

      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="z-10"
        >
          <Card number={step.number} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-5xl text-[#FF5500] leading-none">{step.number}</span>
              <div>
                <span className="font-mono text-[10px] text-[#999] uppercase tracking-[0.15em] block">{step.time}</span>
                <h3 className="font-display text-xl text-[#0A0A0A] tracking-wide">{step.title}</h3>
              </div>
            </div>
            <p className="font-body text-sm text-[#666666] leading-relaxed">{step.description}</p>
            {/* Orange dot connector */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-10 w-6 h-6 rounded-full bg-[#FF5500] border-2 border-[#0D0D0D] z-20 shadow-[0_4px_24px_rgba(255,85,0,0.35)]" />
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
