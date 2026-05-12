import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

const serviceLinks = [
  { href: '/services/website-and-systems', label: 'Website + Systems' },
  { href: '/services/lead-generation', label: 'Lead Generation' },
  { href: '/services/all-in-one-system', label: 'All-In-One System' },
  { href: '/services/content-foundation', label: 'Content Foundation' },
  { href: '/services/content-growth', label: 'Content Growth' },
  { href: '/services/content-authority', label: 'Content Authority' },
]

const areaLinks = [
  { href: '/service-areas/hartford-county-ct', label: 'Hartford County' },
  { href: '/service-areas/new-haven-county-ct', label: 'New Haven County' },
  { href: '/service-areas/litchfield-county-ct', label: 'Litchfield County' },
  { href: '/service-areas/middlesex-county-ct', label: 'Middlesex County' },
  { href: '/service-areas/tolland-county-ct', label: 'Tolland County' },
  { href: '/service-areas/new-london-county-ct', label: 'New London County' },
]

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
  { href: '/service-areas', label: 'Service Areas' },
]

export default function Footer() {
  return (
    <footer className="bg-ash border-t border-steel" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-inferno flex items-center justify-center flex-shrink-0">
                <Image
                  src="/egl-logo.png"
                  alt="EGL Solutions marketing agency logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-2xl text-bone tracking-wider">EGL SOLUTIONS</span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              Helping local service businesses in Connecticut grow with high-converting websites, lead generation, AI automation, and content creation.
            </p>
            <div className="space-y-3 text-sm font-body">
              <a href="tel:+18602003455" className="flex items-center gap-2 text-light hover:text-inferno transition-colors">
                <Phone size={14} className="text-inferno flex-shrink-0" />
                (860) 200-3455
              </a>
              <a href="mailto:info@egl.solutions" className="flex items-center gap-2 text-light hover:text-inferno transition-colors">
                <Mail size={14} className="text-inferno flex-shrink-0" />
                info@egl.solutions
              </a>
              <div className="flex items-start gap-2 text-muted">
                <MapPin size={14} className="text-inferno flex-shrink-0 mt-0.5" />
                Wethersfield, CT
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="EGL Solutions on Facebook" className="w-8 h-8 bg-steel rounded flex items-center justify-center text-muted hover:bg-inferno hover:text-black transition-all">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/egl.solutions/" target="_blank" rel="noopener noreferrer" aria-label="EGL Solutions on Instagram" className="w-8 h-8 bg-steel rounded flex items-center justify-center text-muted hover:bg-inferno hover:text-black transition-all">
                <Instagram size={15} />
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="EGL Solutions on TikTok" className="w-8 h-8 bg-steel rounded flex items-center justify-center text-muted hover:bg-inferno hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.5a8.16 8.16 0 004.77 1.52V7.57a4.85 4.85 0 01-1-.88z"/>
                </svg>
              </a>
              {/* Google */}
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="EGL Solutions on Google" className="w-8 h-8 bg-steel rounded flex items-center justify-center text-muted hover:bg-inferno hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-xs text-inferno uppercase tracking-[0.2em] mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-muted hover:text-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs text-inferno uppercase tracking-[0.2em] mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-muted hover:text-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas + Hours */}
          <div>
            <h3 className="font-mono text-xs text-inferno uppercase tracking-[0.2em] mb-4">Service Areas</h3>
            <ul className="space-y-2 mb-6">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-muted hover:text-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="font-body text-sm text-inferno hover:text-blaze transition-colors font-medium">
                  View All Areas →
                </Link>
              </li>
            </ul>
            <h3 className="font-mono text-xs text-inferno uppercase tracking-[0.2em] mb-3">Operating Hours</h3>
            <div className="flex items-start gap-2 text-sm font-body text-muted">
              <Clock size={14} className="text-inferno mt-0.5 flex-shrink-0" />
              <span>Mon–Sun: 9:00AM – 7:00PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted">
            © 2026 EGL Solutions. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 font-body text-xs text-muted">
            <Link href="/terms" className="hover:text-light transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-light transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
