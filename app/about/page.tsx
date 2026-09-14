import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Phone } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import CTAStrip from '@/components/shared/CTAStrip'

export const metadata: Metadata = {
  title: 'About EGL Marketing | Home Remodeling Marketing Agency in Wethersfield, CT',
  description:
    'EGL Marketing is a results-driven marketing agency based in Wethersfield, CT focused exclusively on helping Connecticut home remodeling contractors book more kitchen and bath jobs.',
  alternates: { canonical: 'https://eglmarketing.co/about' },
  openGraph: {
    title: 'About EGL Marketing — Connecticut Home Remodeling Marketing Agency',
    description:
      'Based in Wethersfield, CT. We help home remodeling contractors throughout Connecticut grow with marketing systems built for the remodeling sales cycle.',
    url: 'https://eglmarketing.co/about',
  },
}

const BOOKING_URL = '/book'

const values = [
  { title: 'Results First', description: 'Every system we build is designed around measurable outcomes — more calls, more leads, more revenue.' },
  { title: 'Full Transparency', description: 'No surprise fees, no confusing reports. You always know what we\'re doing and what results it\'s producing.' },
  { title: 'Remodeling Niche', description: 'We work exclusively with Connecticut home remodeling contractors — kitchen, bath, additions, and whole-home renovation. Niche focus means better results.' },
  { title: 'No Long Contracts', description: 'Month-to-month agreements because we\'re confident our results will keep you. No pressure, just performance.' },
  { title: 'Done-For-You', description: 'We handle everything end-to-end. You focus on running your business; we handle the marketing.' },
  { title: 'AI-Powered', description: 'We integrate cutting-edge AI tools into every system — from lead capture to follow-up to content creation.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-void pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 700px 500px at 80% 50%, rgba(255,85,0,0.12), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="noise-overlay" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel label="ABOUT EGL MARKETING" className="mb-4" />
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-bone tracking-wider mb-6 leading-tight">
              WE HELP CONNECTICUT REMODELERS{' '}
              <span className="text-inferno">WIN MORE JOBS</span>
            </h1>
            <p className="font-body text-light/75 text-lg leading-relaxed mb-6">
              EGL Marketing is a results-driven marketing agency based in Wethersfield, CT. We
              specialize exclusively in helping Connecticut home remodeling contractors —
              kitchen remodelers, bath remodelers, general remodeling contractors, and home
              addition specialists — build the digital infrastructure they need to book more
              high-value jobs consistently.
            </p>
            <p className="font-body text-light/75 leading-relaxed mb-8">
              We don&apos;t work with everyone. We focus exclusively on Connecticut home remodeling
              because that&apos;s where we can deliver the most impact. We understand the remodeling
              sales cycle, the $15K–$100K job values at stake, and the specific platforms
              Connecticut homeowners use to research and hire remodeling contractors. Our
              marketing systems are built around those realities — not generic &ldquo;local
              business&rdquo; playbooks.
            </p>
            <div className="flex gap-4">
              <a
                href={BOOKING_URL}
                className="inline-block bg-inferno text-black font-display text-sm px-8 py-3 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
              >
                WORK WITH US
              </a>
              <a
                href="tel:+18602003455"
                className="inline-flex items-center gap-2 bg-white text-black font-body font-semibold text-sm px-6 py-3 rounded hover:bg-gray-100 transition-colors shadow-sm"
              >
                <Phone size={14} /> (860) 200-3455
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div
              className="relative w-72 h-72"
              style={{ filter: 'drop-shadow(0 0 48px rgba(255,85,0,0.3))' }}
            >
              <Image
                src="/egl-logo.png"
                alt="EGL Marketing marketing agency logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel label="OUR MISSION" className="mb-4 justify-center" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-6">
            TURNING ONLINE VISIBILITY INTO BOOKED REMODELING JOBS
          </h2>
          <p className="font-body text-light/70 text-lg leading-relaxed">
            We combine high-converting websites, remodeling-specific lead generation, and
            AI-powered follow-up to create a complete growth engine for CT remodeling
            contractors. Not generic marketing that looks good — marketing that books
            $20K–$100K kitchen, bath, and whole-home remodeling jobs. Every piece is designed
            to work together so more homeowners who find you online become signed contracts.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-void py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="OUR VALUES" className="mb-3" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-10">
            WHAT DRIVES EVERYTHING WE DO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-mid border border-steel rounded p-6 hover:border-inferno transition-colors group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-inferno/10 border border-inferno/30 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-inferno" />
                  </div>
                  <h3 className="font-display text-xl text-bone tracking-wide group-hover:text-inferno transition-colors">{v.title}</h3>
                </div>
                <p className="font-body text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel label="WHERE WE OPERATE" className="mb-4 justify-center" />
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider mb-6">
            SERVING HOME REMODELERS THROUGHOUT CONNECTICUT
          </h2>
          <p className="font-body text-light/70 leading-relaxed mb-8">
            Based in Wethersfield, CT, we work with home remodeling contractors throughout
            Hartford County, New Haven County, Litchfield County, Middlesex County, Tolland
            County, New London County, and Fairfield County. If you do kitchen remodels, bath
            remodels, home additions, or whole-home renovations in Connecticut, we built this
            agency for you.
          </p>
          <Link
            href="/service-areas"
            className="inline-block border-2 border-inferno text-inferno font-display text-sm px-8 py-3 rounded tracking-widest hover:bg-inferno/10 transition-colors"
          >
            VIEW ALL SERVICE AREAS
          </Link>
        </div>
      </section>

      <CTAStrip headline="READY TO WORK WITH US?" />
    </>
  )
}
