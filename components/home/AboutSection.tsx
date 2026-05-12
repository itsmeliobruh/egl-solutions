'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'

const stats = [
  { value: '7–10 Days', label: 'Average Build Time' },
  { value: '2 Steps', label: 'To Launch Your System' },
  { value: '24/7', label: 'Your System Works For You' },
]

export default function AboutSection() {
  return (
    <section className="bg-void py-24 px-4 relative overflow-hidden">
      {/* Subtle radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 600px 400px at 10% 50%, rgba(255,85,0,0.06), transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionLabel label="WHO WE ARE" className="mb-4" />
            <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-6 leading-tight">
              AT EGL SOLUTIONS, WE HELP LOCAL SERVICE BUSINESSES TURN{' '}
              <span className="text-inferno">ATTENTION INTO REVENUE</span>
            </h2>
            <p className="font-body text-light/75 leading-relaxed text-base">
              We combine high-converting websites, lead generation strategies, and AI-powered
              automation to create a complete growth engine — not just marketing that looks good,
              but marketing that delivers results. From capturing leads to nurturing and converting
              them, every piece is designed to work together seamlessly. Our goal is simple: help
              you get more calls, more customers, and consistent growth without the guesswork.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-mid border border-steel rounded p-5 text-center"
              >
                <div className="font-display text-3xl md:text-4xl text-inferno mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.15em] leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
