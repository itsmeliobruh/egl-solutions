import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Clock, Instagram } from 'lucide-react'

const serviceLinks = [
  { href: '/services/local-presence-builder', label: 'Local Presence Builder' },
  { href: '/services/market-dominator', label: 'Market Dominator' },
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
                  alt="EGL Marketing marketing agency logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-2xl text-bone tracking-wider">EGL MARKETING</span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed mb-6">
              Helping local service businesses generate more leads, follow up faster, and book more jobs with done-for-you growth systems.
            </p>
            <div className="space-y-3 text-sm font-body">
              <a href="mailto:support@eglmarketing.co" className="flex items-center gap-2 text-light hover:text-inferno transition-colors">
                <Mail size={14} className="text-inferno flex-shrink-0" />
                support@eglmarketing.co
              </a>
              {/* Plain text, not a tel: link: GHL's A2P scanner flagged phone contact info on widget pages (2026-10-29) */}
              <div className="flex items-center gap-2 text-light">
                <Phone size={14} className="text-inferno flex-shrink-0" />
                (860) 200-3455
              </div>
              <div className="flex items-start gap-2 text-muted">
                <MapPin size={14} className="text-inferno flex-shrink-0 mt-0.5" />
                2550 Albany Ave #1080, West Hartford, CT 06117
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/egl.marketing/" target="_blank" rel="noopener noreferrer" aria-label="EGL Marketing on Instagram" className="w-8 h-8 bg-steel rounded flex items-center justify-center text-muted hover:bg-inferno hover:text-black transition-all">
                <Instagram size={15} />
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
            © 2026 EGL Marketing LLC. All Rights Reserved.
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
