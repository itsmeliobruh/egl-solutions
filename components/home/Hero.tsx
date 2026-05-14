'use client'

import { motion } from 'framer-motion'
import GHLForm from '@/components/shared/GHLForm'
import { ChevronDown } from 'lucide-react'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

function ScrollArrows() {
  return (
    <div className="flex items-center justify-center gap-5 py-4 lg:hidden" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, 12, 0], opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.22,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={52} strokeWidth={2.2} className="text-white drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex items-start overflow-hidden bg-void" aria-label="Hero section">
      {/* Left orange accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
        style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 800px 600px at 95% 60%, rgba(255,85,0,0.18), transparent 65%)' }}
        aria-hidden="true"
      />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" aria-hidden="true" />

      {/* lg:pt-28 gives breathing room between navbar and content on desktop */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 pb-8 lg:pt-28 lg:pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Copy ─────────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-inferno/10 border border-inferno/40 rounded-full px-4 py-1.5 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-inferno animate-pulse" />
              <span className="font-mono text-[10px] text-inferno uppercase tracking-[0.18em]">
                LIMITED TIME: FREE WEBSITE BUILD ON US
              </span>
            </motion.div>

            {/* Headline — smaller on mobile so arrows stay above the fold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-bone leading-tight tracking-wider mb-4"
            >
              EMPOWERING
              <br />
              LOCAL BUSINESS
              <br />
              WITH{' '}
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FF5500' }}>
                SMART
              </span>
              <br />
              <span className="text-inferno">MARKETING</span>
              <br />
              SOLUTIONS!
            </motion.h1>

            {/* Arrows — right after headline so they're visible on first load on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <ScrollArrows />
            </motion.div>

            {/* Subtext — desktop always, mobile below the fold (users scroll) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="font-body text-light/80 text-lg leading-relaxed mb-6 max-w-lg"
            >
              Dedicated to crafting impactful systems that attract, convert, and retain customers,
              helping your local service business scale faster than ever.
            </motion.p>

            {/* ── MOBILE ONLY: CTA buttons ─────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 lg:hidden"
            >
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-inferno text-black font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
              >
                ⚡ WORK WITH US
              </button>
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center justify-center gap-2 border-2 border-inferno text-inferno font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-inferno/10 transition-colors"
              >
                VIEW PRICING
              </button>
            </motion.div>

            {/* ── MOBILE ONLY: Form ────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:hidden"
            >
              <GHLForm />
            </motion.div>
          </div>

          {/* ── RIGHT: Form desktop (fitted to viewport) ───────────── */}
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
