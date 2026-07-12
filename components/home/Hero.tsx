'use client'

import { motion } from 'framer-motion'
import GHLForm from '@/components/shared/GHLForm'
import { ChevronDown } from 'lucide-react'
import type { HeroData } from '@/lib/payload/queries'

const DEFAULTS: HeroData = {
  badgeText: 'LIMITED TIME: FREE WEBSITE BUILD ON US',
  headlineL1: 'EMPOWERING',
  headlineL2: 'LOCAL BUSINESS',
  headlineL3prefix: 'WITH',
  headlineL3outline: 'SMART',
  headlineL4: 'MARKETING',
  headlineL5: 'SOLUTIONS!',
  subtext: 'Dedicated to crafting impactful systems that attract, convert, and retain customers, helping your local service business scale faster than ever.',
  ctaPrimary: '⚡ WORK WITH US',
  ctaSecondary: 'VIEW PRICING',
}

function ScrollArrows() {
  return (
    <div className="flex items-center justify-center gap-5 py-4 lg:hidden" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, 12, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
        >
          <ChevronDown size={52} strokeWidth={2.2} className="text-white drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero({ data }: { data?: HeroData | null }) {
  const d = data ?? DEFAULTS

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex items-start overflow-hidden bg-void" aria-label="Hero section">
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
        style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 800px 600px at 95% 60%, rgba(255,85,0,0.18), transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-16 w-full pt-20 pb-8 lg:pt-28 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-inferno/10 border border-inferno/40 rounded-full px-4 py-1.5 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-inferno animate-pulse" />
              <span className="font-mono text-[10px] text-inferno uppercase tracking-[0.18em]">
                {d.badgeText}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-bone leading-tight tracking-wider mb-3"
            >
              {d.headlineL1}
              <br />
              {d.headlineL2}
              <br />
              {d.headlineL3prefix}{' '}
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FF5500' }}>
                {d.headlineL3outline}
              </span>
              <br />
              <span className="text-inferno">{d.headlineL4}</span>
              <br />
              {d.headlineL5}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-body text-light/80 text-base lg:text-lg leading-relaxed mb-4 lg:max-w-lg"
            >
              {d.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-0 lg:hidden"
            >
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-inferno text-black font-display text-base px-6 py-3 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
              >
                {d.ctaPrimary}
              </button>
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center justify-center gap-2 border-2 border-inferno text-inferno font-display text-base px-6 py-3 rounded tracking-widest hover:bg-inferno/10 transition-colors"
              >
                {d.ctaSecondary}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ScrollArrows />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:hidden"
            >
              <GHLForm />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <GHLForm fitToViewport={true} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
