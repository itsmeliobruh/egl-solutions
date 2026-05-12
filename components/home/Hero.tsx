'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-void"
      aria-label="Hero section"
    >
      {/* Left orange accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
        style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 95% 60%, rgba(255,85,0,0.18), transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Grid lines */}
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            {/* Free website badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-inferno/10 border border-inferno/40 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-inferno animate-pulse" />
              <span className="font-mono text-[10px] text-inferno uppercase tracking-[0.18em]">
                LIMITED TIME: FREE WEBSITE BUILD ON US
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-bone leading-tight tracking-wider mb-6"
            >
              EMPOWERING
              <br />
              LOCAL BUSINESS
              <br />
              WITH{' '}
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: '2px #FF5500',
                }}
              >
                SMART
              </span>
              <br />
              <span className="text-inferno">MARKETING</span>
              <br />
              SOLUTIONS!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-body text-light/80 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Dedicated to crafting impactful systems that attract, convert, and retain customers,
              helping your local service business scale faster than ever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center gap-2 bg-inferno text-black font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
                aria-label="Work with EGL Solutions"
              >
                ⚡ WORK WITH US
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-inferno text-inferno font-display text-lg px-8 py-4 rounded tracking-widest hover:bg-inferno/10 transition-colors"
              >
                VIEW PRICING
              </Link>
            </motion.div>
          </div>

          {/* Right: Logo with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div
              className="relative w-80 h-80 xl:w-96 xl:h-96"
              style={{ filter: 'drop-shadow(0 0 48px rgba(255,85,0,0.35))' }}
            >
              <Image
                src="/egl-logo.png"
                alt="EGL Solutions marketing agency logo"
                fill
                className="object-contain opacity-90"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
