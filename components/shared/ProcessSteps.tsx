'use client'

import { motion } from 'framer-motion'

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
      <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-inferno via-blaze to-inferno opacity-30 z-0" style={{ left: '20%', right: '20%' }} />

      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative bg-mid border border-steel rounded p-6 hover:border-inferno transition-colors z-10"
        >
          {/* Step number */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-5xl text-inferno leading-none">{step.number}</span>
            <div>
              <span className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] block">{step.time}</span>
              <h3 className="font-display text-xl text-bone tracking-wide">{step.title}</h3>
            </div>
          </div>
          <p className="font-body text-sm text-muted leading-relaxed">{step.description}</p>
          {/* Orange dot connector */}
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute -right-3 top-10 w-6 h-6 rounded-full bg-inferno border-2 border-void z-20 shadow-inferno" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
