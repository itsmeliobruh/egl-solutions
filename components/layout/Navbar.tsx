'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ash border-b border-steel' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="EGL Solutions home">
          <div className="relative w-10 h-10">
            <div className="w-10 h-10 rounded-full bg-inferno flex items-center justify-center">
              <Image
                src="/egl-logo.png"
                alt="EGL Solutions marketing agency logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
          </div>
          <span className="font-display text-2xl text-bone tracking-wider hidden sm:block">
            EGL SOLUTIONS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 font-body text-sm font-medium text-light">
          <Link href="/" className="hover:text-inferno transition-colors">Home</Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              className="flex items-center gap-1 hover:text-inferno transition-colors"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-mid border border-steel rounded shadow-inferno py-2 z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 text-light hover:bg-steel hover:text-bone transition-colors text-sm"
                  >
                    <span>{link.emoji}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" className="hover:text-inferno transition-colors">Pricing</Link>

          {/* Service Areas dropdown */}
          <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
            <button
              className="flex items-center gap-1 hover:text-inferno transition-colors"
              aria-haspopup="true"
              aria-expanded={areasOpen}
            >
              Service Areas <ChevronDown size={14} className={`transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
            </button>
            {areasOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-mid border border-steel rounded shadow-inferno py-2 z-50">
                {areaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-light hover:bg-steel hover:text-bone transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-steel mt-1 pt-1">
                  <Link
                    href="/service-areas"
                    className="block px-4 py-2 text-inferno hover:text-blaze transition-colors text-sm font-semibold"
                  >
                    View All Areas →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-inferno transition-colors">About</Link>
          <Link href="/contact" className="hover:text-inferno transition-colors">Contact</Link>
        </div>

        {/* Right: Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18602003455"
            className="flex items-center gap-1.5 text-sm font-body text-light hover:text-inferno transition-colors"
            aria-label="Call EGL Solutions"
          >
            <Phone size={14} />
            (860) 200-3455
          </a>
          <a
            href={BOOKING_URL}
            className="bg-inferno text-black font-display text-sm px-5 py-2.5 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ash border-t border-steel px-4 py-6 space-y-4 font-body">
          <Link href="/" className="block text-light hover:text-inferno py-2 border-b border-steel" onClick={() => setMobileOpen(false)}>Home</Link>

          <div>
            <button
              className="flex items-center justify-between w-full text-light hover:text-inferno py-2 border-b border-steel"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-2 space-y-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-muted hover:text-inferno py-1.5 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.emoji} {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" className="block text-light hover:text-inferno py-2 border-b border-steel" onClick={() => setMobileOpen(false)}>Pricing</Link>

          <div>
            <button
              className="flex items-center justify-between w-full text-light hover:text-inferno py-2 border-b border-steel"
              onClick={() => setAreasOpen(!areasOpen)}
            >
              <span>Service Areas</span>
              <ChevronDown size={14} className={`transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
            </button>
            {areasOpen && (
              <div className="pl-4 mt-2 space-y-1">
                {areaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-muted hover:text-inferno py-1.5 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/service-areas" className="block text-inferno py-1.5 text-sm font-semibold" onClick={() => setMobileOpen(false)}>View All →</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="block text-light hover:text-inferno py-2 border-b border-steel" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="block text-light hover:text-inferno py-2 border-b border-steel" onClick={() => setMobileOpen(false)}>Contact</Link>

          <div className="pt-4 flex flex-col gap-3">
            <a href="tel:+18602003455" className="flex items-center gap-2 text-light hover:text-inferno">
              <Phone size={14} /> (860) 200-3455
            </a>
            <a
              href={BOOKING_URL}
              className="bg-inferno text-black font-display text-sm px-5 py-3 rounded tracking-widest hover:bg-scorch text-center shadow-inferno"
            >
              WORK WITH US
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
