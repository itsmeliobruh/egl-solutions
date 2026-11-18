'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { UserPlus, CalendarCheck, Phone, MessageSquare, Mail, Globe, Instagram, MapPin, Clock } from 'lucide-react'

const VCF = '/melio-egl-marketing.vcf'
const NUMBER = '+18602003455'
const DISPLAY = '(860) 200-3455'
const EMAIL = 'melio@eglmarketing.co'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
const SERVICES = ['Video Ads', 'Websites', 'Google Business', 'Automation']

export default function CardClient() {
  const params = useSearchParams()

  // Carry the card's UTM tags into /book so the lead keeps source = business_card.
  const bookHref = (() => {
    const p = new URLSearchParams()
    for (const key of UTM_KEYS) {
      const v = params.get(key)
      if (v) p.set(key, v)
    }
    const qs = p.toString()
    return qs ? `/book?${qs}` : '/book'
  })()

  const [saved, setSaved] = useState(false)

  // iPhone: open the "Create New Contact" sheet on its own, once per visit
  // (Melio, 2026-11-18). Android just downloads the file, so it keeps the button.
  useEffect(() => {
    if (!/iPhone|iPod/.test(navigator.userAgent)) return
    try {
      if (sessionStorage.getItem('egl-card-vcf')) return
      sessionStorage.setItem('egl-card-vcf', '1')
    } catch {}
    const t = setTimeout(() => {
      setSaved(true)
      window.location.href = VCF
    }, 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="bg-void min-h-screen pt-28 pb-16 px-4">
      {/* The GHL chat bubble covers the Call/Text/Email row on phones; this page is contact-only. */}
      <style>{'chat-widget{display:none !important}'}</style>
      <div className="max-w-md mx-auto">
        {/* Who */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-ash border border-inferno/40 flex items-center justify-center">
            <Image src="/egl-logo.png" alt="EGL Marketing" width={56} height={56} className="object-contain" />
          </div>
          <h1 className="font-display text-6xl text-bone tracking-wide leading-none">MELIO</h1>
          <p className="font-mono text-[11px] text-inferno uppercase tracking-[0.22em] mt-2">
            Founder &amp; CEO · EGL Marketing
          </p>
        </div>

        {/* 1. Save contact */}
        <a
          href={VCF}
          download="Melio - EGL Marketing.vcf"
          onClick={() => setSaved(true)}
          className="flex items-center justify-center gap-2 w-full rounded-lg bg-inferno text-void font-display text-2xl tracking-wider py-5 shadow-inferno"
        >
          <UserPlus size={22} /> {saved ? 'SAVED? TAP TO SAVE AGAIN' : 'SAVE MY NUMBER'}
        </a>
        <p className="text-center font-body text-xs text-muted mt-2 mb-6">
          Adds me to your contacts so you know it&apos;s me when I call.
        </p>

        {/* 2. Book the audit */}
        <div className="rounded-lg border border-inferno/40 bg-ash p-5 mb-6">
          <p className="font-mono text-[10px] text-inferno uppercase tracking-[0.22em] mb-1">For local businesses</p>
          <h2 className="font-display text-3xl text-bone tracking-wide leading-tight">FREE LOCAL VISIBILITY AUDIT</h2>
          <p className="font-body text-sm text-muted mt-2 mb-4">
            See exactly how customers find you online, and where you&apos;re losing them.
          </p>
          <a
            href={bookHref}
            className="flex items-center justify-center gap-2 w-full rounded-lg border border-inferno text-bone font-display text-xl tracking-wider py-4 hover:bg-inferno hover:text-void transition-colors"
          >
            <CalendarCheck size={20} /> BOOK MY FREE AUDIT
          </a>
        </div>

        {/* 3. Reach me */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {[
            { href: `tel:${NUMBER}`, icon: Phone, label: 'Call' },
            { href: `sms:${NUMBER}`, icon: MessageSquare, label: 'Text' },
            { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-1 rounded-lg bg-mid border border-white/10 py-4 text-bone hover:border-inferno transition-colors"
            >
              <Icon size={20} className="text-inferno" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">{label}</span>
            </a>
          ))}
        </div>

        {/* 4. Business details */}
        <div className="border-t border-white/10 pt-6">
          <p className="font-mono text-[10px] text-inferno uppercase tracking-[0.22em] mb-3">What we do</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {SERVICES.map((s) => (
              <span key={s} className="font-body text-sm text-bone bg-mid border border-white/10 rounded-full px-3 py-1">
                {s}
              </span>
            ))}
          </div>

          <ul className="space-y-3 font-body text-sm text-light">
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-inferno flex-shrink-0" /> {DISPLAY}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-inferno flex-shrink-0" /> {EMAIL}
            </li>
            <li>
              <a href="/" className="flex items-center gap-3 hover:text-inferno transition-colors">
                <Globe size={15} className="text-inferno flex-shrink-0" /> eglmarketing.co
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/egl.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-inferno transition-colors"
              >
                <Instagram size={15} className="text-inferno flex-shrink-0" /> @egl.marketing
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={15} className="text-inferno flex-shrink-0" /> Wethersfield, CT · serving all of Connecticut
            </li>
            <li className="flex items-center gap-3">
              <Clock size={15} className="text-inferno flex-shrink-0" /> 7 days a week, 9 AM to 7 PM
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
