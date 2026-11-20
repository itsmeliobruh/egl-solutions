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
// Social (/links) page wording, Melio 2026-11-20. /card keeps SERVICES above.
const SOCIAL_SERVICES = ['Content', 'Meta Ads', 'Proven Systems', 'Websites', 'Google Business', 'Automation']
// Melio, 2026-11-18. GHL workflow "EGL | Business Card Text Reply" keys on these phrases
// ("got your card" / "found you online" / "found you on" / "saw your sticker"): keep them if this wording changes.
const INTRO_CARD = 'Hey Melio, got your card! This is... '
// Bio / link visitors never held a card (Melio: "Let's connect" -> "got your card" is weird).
// The platform name lets the workflow tag where a texter came from (texts carry no UTMs).
const INTRO_ONLINE = 'Hey Melio, found you online! This is... '
const INTRO_BY_SOURCE: Record<string, string> = {
  business_card: INTRO_CARD,
  instagram: 'Hey Melio, found you on Instagram! This is... ',
  tiktok: 'Hey Melio, found you on TikTok! This is... ',
  youtube: 'Hey Melio, found you on YouTube! This is... ',
  sticker: 'Hey Melio, saw your sticker! This is... ',
}

// Social bios link to /links (Melio, 2026-11-18): conversation first (his goal: get a reply,
// then book the audit), no Save My Number, no contact pop.
// TikTok + YouTube handles still to add.
// Social row under the services on /links (Melio, 2026-11-20).
const SOCIAL_ROW = [
  { href: 'https://www.instagram.com/its.melio/', handle: '@its.melio', net: 'instagram' },
  { href: 'https://www.tiktok.com/@its.melio', handle: '@its.melio', net: 'tiktok' },
  { href: 'https://www.instagram.com/egl.marketing/', handle: '@egl.marketing', net: 'instagram' },
]

// lucide has no TikTok mark; this is the standard single-path logo, drawn in currentColor.
function TikTokIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12V9.8a5.68 5.68 0 0 0-.78-.05A5.68 5.68 0 1 0 15.54 15.4V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48Z" />
    </svg>
  )
}

export default function CardClient({ variant = 'card' }: { variant?: 'card' | 'social' }) {
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

  // iPhones want "&body=", everything else "?body=" (same as /text).
  const [sep, setSep] = useState('?')
  useEffect(() => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) setSep('&')
  }, [])
  const intro = INTRO_BY_SOURCE[params.get('utm_source') ?? ''] ?? INTRO_ONLINE
  const introHref = `sms:${NUMBER}${sep}body=${encodeURIComponent(intro)}`

  // iPhone: open the "Create New Contact" sheet on its own, once per visit
  // (Melio, 2026-11-18). Android just downloads the file, so it keeps the button.
  useEffect(() => {
    if (!/iPhone|iPod/.test(navigator.userAgent)) return
    // Only card scans: a bio/link visitor shouldn't get a contact sheet thrown at them.
    if (variant !== 'card' || params.get('utm_source') !== 'business_card') return
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
    <section className="bg-void min-h-screen pt-12 pb-16 px-4">
      {/* The GHL chat bubble covers the Call/Text/Email row on phones; this page is contact-only. */}
      <style>{`chat-widget{display:none !important}
@keyframes egl-glow{0%,100%{box-shadow:0 0 14px 2px rgba(255,85,0,.45),0 0 0 0 rgba(255,85,0,.55)}50%{box-shadow:0 0 34px 8px rgba(255,85,0,.75),0 0 0 6px rgba(255,85,0,0)}}
@keyframes egl-shine{0%{transform:translateX(-120%) skewX(-20deg)}60%,100%{transform:translateX(320%) skewX(-20deg)}}
.egl-connect{position:relative;overflow:hidden;animation:egl-glow 2.4s ease-in-out infinite}
.egl-connect::after{content:'';position:absolute;top:0;bottom:0;left:0;width:35%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);animation:egl-shine 3.2s ease-in-out infinite;pointer-events:none}
@keyframes egl-tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.egl-tick{animation:egl-tick 22s linear infinite}
@media (prefers-reduced-motion:reduce){.egl-connect,.egl-connect::after,.egl-tick{animation:none}}`}</style>
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
          {variant === 'social' && (
            <p className="font-body text-base text-light mt-3" style={{ textWrap: 'balance' }}>
              I help local businesses get booked, not just seen.
            </p>
          )}
          {variant === 'social' && (
            // One row that slides sideways (Melio, 2026-11-20: all services on one line). The list is
            // drawn twice so the loop is seamless; screen readers get the first copy only.
            <div
              className="mt-4 overflow-hidden"
              style={{ maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}
            >
              <div className="egl-tick flex w-max gap-2">
                {[...SOCIAL_SERVICES, ...SOCIAL_SERVICES].map((s, i) => (
                  <span
                    key={i}
                    aria-hidden={i >= SOCIAL_SERVICES.length}
                    className="font-body text-sm text-bone bg-mid border border-white/10 rounded-full px-3 py-1 whitespace-nowrap"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          {variant === 'social' && (
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {SOCIAL_ROW.map(({ href, handle, net }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-bone border border-inferno/40 rounded-full px-3 py-1.5 hover:border-inferno hover:text-inferno transition-colors"
                >
                  {net === 'tiktok' ? <TikTokIcon size={14} className="text-inferno" /> : <Instagram size={14} className="text-inferno" />}{' '}
                  {handle}
                </a>
              ))}
            </div>
          )}
        </div>

        {variant === 'card' ? (
          <>
        {/* 1. Start a conversation (primary: bio visitors should reach out, Melio 2026-11-18) */}
        <a
          href={introHref}
          className="egl-connect flex items-center justify-center gap-2 w-full rounded-lg bg-inferno text-void font-display text-2xl tracking-wider py-5"
        >
          <MessageSquare size={22} /> LET&apos;S CONNECT
        </a>
        <p className="text-center font-body text-xs text-muted mt-2 mb-4">
          Opens a text to me so I know who you are.
        </p>

        {/* 1b. Save contact (secondary: QR scans already auto-save on iPhone) */}
        <a
          href={VCF}
          download="Melio - EGL Marketing.vcf"
          onClick={() => setSaved(true)}
          className="flex items-center justify-center gap-2 w-full rounded-lg border border-inferno text-bone font-display text-xl tracking-wider py-4 hover:bg-inferno hover:text-void transition-colors"
        >
          <UserPlus size={20} /> {saved ? 'SAVED? TAP TO SAVE AGAIN' : 'SAVE MY NUMBER'}
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

          </>
        ) : (
          <>
        {/* Social page order (Melio, 2026-11-20): contact tiles, then the audit (glowing),
            then Let's Connect as a plain button, then Instagram. The /card page above is unchanged. */}
        {/* 1. Reach me */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { href: `tel:${NUMBER}`, icon: Phone, label: 'Call' },
            { href: introHref, icon: MessageSquare, label: 'Text' },
            { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email' },
            { href: '/', icon: Globe, label: 'Website' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-1 rounded-lg bg-mid border border-white/10 py-4 text-bone hover:border-inferno transition-colors"
            >
              <Icon size={20} className="text-inferno" />
              <span className="font-mono text-[10px] uppercase tracking-[0.12em]">{label}</span>
            </a>
          ))}
        </div>

        {/* 2. Book the audit (primary, glowing) */}
        <div className="rounded-lg border border-inferno/40 bg-ash p-5 mb-6">
          <p className="font-mono text-[10px] text-inferno uppercase tracking-[0.22em] mb-1">For local businesses</p>
          <h2 className="font-display text-3xl text-bone tracking-wide leading-tight">FREE LOCAL VISIBILITY AUDIT</h2>
          <p className="font-body text-sm text-muted mt-2 mb-4">
            See exactly how customers find you online, and where you&apos;re losing them.
          </p>
          <a
            href={bookHref}
            className="egl-connect flex items-center justify-center gap-2 w-full rounded-lg bg-inferno text-void font-display text-2xl tracking-wider py-5"
          >
            <CalendarCheck size={22} /> BOOK MY FREE AUDIT
          </a>
        </div>

        {/* 3. Start a conversation (regular button) */}
        <a
          href={introHref}
          className="flex items-center justify-center gap-2 w-full rounded-lg border border-inferno text-bone font-display text-xl tracking-wider py-4 hover:bg-inferno hover:text-void transition-colors"
        >
          <MessageSquare size={20} /> LET&apos;S CONNECT
        </a>
        <p className="text-center font-body text-xs text-muted mt-2 mb-6">
          Opens a text to me so I know who you are.
        </p>

          </>
        )}

        {/* 3. Reach me (business card page only; the social page has it on top) */}
        {variant === 'card' && (
        <div className="grid grid-cols-3 gap-2 mb-8">
          {[
            { href: `tel:${NUMBER}`, icon: Phone, label: 'Call' },
            { href: introHref, icon: MessageSquare, label: 'Text' },
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
        )}

        {/* 4. Business details */}
        <div className="border-t border-white/10 pt-6">
          {/* Social page shows the services up top under the hook line instead (Melio, 2026-11-20) */}
          {variant === 'card' && (
            <>
          <p className="font-mono text-[10px] text-inferno uppercase tracking-[0.22em] mb-3">What we do</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {SERVICES.map((s) => (
              <span key={s} className="font-body text-sm text-bone bg-mid border border-white/10 rounded-full px-3 py-1">
                {s}
              </span>
            ))}
          </div>
            </>
          )}

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
              <MapPin size={15} className="text-inferno flex-shrink-0" /> Wethersfield, Connecticut
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
