'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

const serviceLinks = [
  { href: '/services/website-and-systems', label: 'Website + Systems', emoji: '🚀' },
  { href: '/services/lead-generation', label: 'Lead Generation', emoji: '🚀' },
  { href: '/services/all-in-one-system', label: 'All-In-One System', emoji: '🚀' },
  { href: '/services/content-foundation', label: 'Content Foundation', emoji: '📸' },
  { href: '/services/content-growth', label: 'Content Growth', emoji: '📸' },
  { href: '/services/content-authority', label: 'Content Authority', emoji: '📸' },
]

const areaLinks = [
  { href: '/service-areas/hartford-county-ct', label: 'Hartford County' },
  { href: '/service-areas/new-haven-county-ct', label: 'New Haven County' },
  { href: '/service-areas/litchfield-county-ct', label: 'Litchfield County' },
  { href: '/service-areas/middlesex-county-ct', label: 'Middlesex County' },
  { href: '/service-areas/tolland-county-ct', label: 'Tolland County' },
  { href: '/service-areas/new-london-county-ct', label: 'New London County' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* ── HEADER BAR ─────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-black/30'
            : 'bg-black/10 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="EGL Solutions home">
            <div className="w-10 h-10 rounded-full bg-inferno/90 flex items-center justify-center ring-1 ring-inferno/40 shadow-inferno">
              <Image
                src="/egl-logo.png"
                alt="EGL Solutions logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-display text-2xl text-bone tracking-wider hidden sm:block">
              EGL SOLUTIONS
            </span>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6 font-body text-sm font-medium text-light">
            <Link href="/" className="hover:text-inferno transition-colors">Home</Link>

            {/* Services dropdown — py-5 on the wrapper bridges the gap so hover never breaks */}
            <div
              className="relative py-5 -my-5"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-inferno transition-colors"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full left-0 w-64 glass-dropdown py-2 z-50"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 px-4 py-2.5 text-light/90 hover:bg-white/10 hover:text-bone transition-colors text-sm rounded-sm"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>{link.emoji}</span>
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/pricing" className="hover:text-inferno transition-colors">Pricing</Link>

            {/* Service Areas dropdown — same gap-bridge trick */}
            <div
              className="relative py-5 -my-5"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-inferno transition-colors"
                aria-haspopup="true"
                aria-expanded={areasOpen}
              >
                Service Areas
                <ChevronDown size={14} className={`transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {areasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full left-0 w-52 glass-dropdown py-2 z-50"
                  >
                    {areaLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-light/90 hover:bg-white/10 hover:text-bone transition-colors text-sm rounded-sm"
                        onClick={() => setAreasOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-1 pt-1">
                      <Link
                        href="/service-areas"
                        className="block px-4 py-2.5 text-inferno hover:text-blaze transition-colors text-sm font-semibold"
                        onClick={() => setAreasOpen(false)}
                      >
                        View All Areas →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="hover:text-inferno transition-colors">About</Link>
            <Link href="/contact" className="hover:text-inferno transition-colors">Contact</Link>
          </div>

          {/* ── DESKTOP RIGHT: Phone + CTA ───────────────────────── */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+18602003455"
              className="flex items-center gap-1.5 text-sm font-body text-light hover:text-inferno transition-colors whitespace-nowrap"
              aria-label="Call EGL Solutions"
            >
              <Phone size={14} />
              (860) 200-3455
            </a>
            <a
              href={BOOKING_URL}
              className="glass-btn-inferno font-display text-sm px-5 py-2.5 rounded-full tracking-widest whitespace-nowrap"
              aria-label="Work with EGL Solutions"
            >
              WORK WITH US
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-light hover:text-inferno transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* ── MOBILE FULL-SCREEN OVERLAY ───────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{
              background: 'rgba(4, 3, 3, 0.88)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
            }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-inferno/90 flex items-center justify-center ring-1 ring-inferno/40">
                  <Image src="/egl-logo.png" alt="EGL Solutions" width={24} height={24} className="object-contain" />
                </div>
                <span className="font-display text-xl text-bone tracking-wider">EGL SOLUTIONS</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-light hover:text-inferno transition-colors p-1"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-4 font-body">
              <Link
                href="/"
                className="flex items-center text-lg text-bone/90 hover:text-inferno py-4 border-b border-white/8 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* Services accordion */}
              <div className="border-b border-white/8">
                <button
                  className="flex items-center justify-between w-full text-lg text-bone/90 hover:text-inferno py-4 transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-4 space-y-1">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 text-light/70 hover:text-inferno py-2.5 text-sm transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.emoji} {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/pricing"
                className="flex items-center text-lg text-bone/90 hover:text-inferno py-4 border-b border-white/8 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>

              {/* Service Areas accordion */}
              <div className="border-b border-white/8">
                <button
                  className="flex items-center justify-between w-full text-lg text-bone/90 hover:text-inferno py-4 transition-colors"
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                >
                  Service Areas
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileAreasOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-4 space-y-1">
                        {areaLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block text-light/70 hover:text-inferno py-2.5 text-sm transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                        <Link
                          href="/service-areas"
                          className="block text-inferno py-2.5 text-sm font-semibold"
                          onClick={() => setMobileOpen(false)}
                        >
                          View All →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className="flex items-center text-lg text-bone/90 hover:text-inferno py-4 border-b border-white/8 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="flex items-center text-lg text-bone/90 hover:text-inferno py-4 border-b border-white/8 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-10 pt-5 space-y-3 border-t border-white/10">
              <a
                href="tel:+18602003455"
                className="flex items-center justify-center gap-2 text-light/80 hover:text-inferno py-2 text-sm transition-colors"
              >
                <Phone size={16} /> (860) 200-3455
              </a>
              <a
                href={BOOKING_URL}
                className="block w-full bg-inferno text-black font-display text-base px-5 py-4 rounded-full tracking-widest hover:bg-scorch text-center shadow-inferno transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                WORK WITH US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
