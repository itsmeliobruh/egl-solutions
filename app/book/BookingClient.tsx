'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { CheckCircle, ChevronRight, ArrowUp } from 'lucide-react'
import ScaledGHLEmbed from '@/components/shared/ScaledGHLEmbed'

const GHL_FORM_BASE     = 'https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL'
const GHL_CALENDAR_URL  = 'https://api.leadconnectorhq.com/widget/booking/wFGbFB8J86G1btPMNuPz'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

// Vertical space (px) taken up by everything on screen besides the embed
// itself — navbar + section padding + heading block + step indicator
// (+ back-link on step 2) — so the embed scales to fill exactly what's
// left and the whole page fits without scrolling.
const STEP1_RESERVED = 420
const STEP2_RESERVED = 480

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      {/* Step 1 */}
      <div className="flex items-center gap-2">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
          step === 1 ? 'bg-[#FF5500] text-white' : 'bg-[#FF5500]/20 text-[#FF5500]'
        }`}>
          {step > 1 ? <CheckCircle size={14} /> : '1'}
        </div>
        <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
          step === 1 ? 'text-white' : 'text-[#666]'
        }`}>
          Your Info
        </span>
      </div>

      <ChevronRight size={14} className="text-[#444]" />

      {/* Step 2 */}
      <div className="flex items-center gap-2">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
          step === 2 ? 'bg-[#FF5500] text-white' : 'bg-[#222] text-[#555]'
        }`}>
          2
        </div>
        <span className={`font-mono text-[10px] uppercase tracking-widest transition-colors ${
          step === 2 ? 'text-white' : 'text-[#555]'
        }`}>
          Pick a Time
        </span>
      </div>
    </div>
  )
}

// Funnel content under the step-1 form (Melio, 2026-11-20: "this page needs to be a funnel,
// explaining everything, not just a form"). The form stays on top for people who are ready;
// everything below answers the questions of people who aren't yet.
const AUDIT_GETS = [
  { t: 'How you stack up', d: 'Your Facebook and Instagram, ads and videos, Google profile, reviews and website, side by side with the top businesses in your town.' },
  { t: 'Where customers slip away', d: 'The exact spots people find you, then pick someone else instead. We even test your form and phone live, the way a customer would.' },
  { t: 'A clear plan', d: "What we'd fix first, and the plan and price for your business if it makes sense." },
]
const AUDIT_STEPS = [
  { n: '01', t: 'Fill this out', d: 'One minute. Your name, your business and how to reach you.' },
  { n: '02', t: 'Pick a time', d: 'Choose a slot that works for you on the next screen.' },
  { n: '03', t: 'We walk you through it', d: 'About 45 minutes on a live screen-share. You keep the findings either way.' },
]
const AUDIT_TRUST = [
  { h: 'No contract', p: "Month to month, 30 days' notice. If we're not earning it, fire us." },
  { h: 'One per trade, per town', p: 'We film every client ourselves, so we take one business per trade in each town.' },
  { h: 'You own everything', p: 'Your domain, footage, ad account, Google profile and number. Leave and it all goes with you.' },
]
const AUDIT_FAQ = [
  { q: 'Is it really free?', a: 'Yes. No card, no catch. You keep everything we find.' },
  { q: 'Is this a sales call?', a: "Honestly? Partly. You get the full audit no matter what. If it looks like a fit, we'll show you the plan and price. If not, we'll tell you straight up." },
  { q: 'Do I need to prepare anything?', a: 'No. We do the research before the call. Just show up.' },
  { q: 'What do you actually do?', a: 'We film your business, run your Facebook and Instagram ads and keep your Google and website sharp, so more people book with you. Plans start at $499/month.' },
]

function AuditFunnel() {
  const label = 'font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3'
  const h2 = 'font-display text-3xl md:text-4xl text-white tracking-wide mb-6'
  return (
    <div className="mt-14 space-y-14">
      <section>
        <p className={label}>What you get</p>
        <h2 className={h2}>WHAT THE AUDIT SHOWS YOU</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {AUDIT_GETS.map((g) => (
            <div key={g.t} className="rounded-xl border border-[#2A2622] bg-[#141210] p-5">
              <CheckCircle size={18} className="text-[#FF5500] mb-3" />
              <h3 className="font-body font-semibold text-white mb-1">{g.t}</h3>
              <p className="font-body text-sm text-[#A9A197] leading-relaxed">{g.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={label}>How it works</p>
        <h2 className={h2}>THREE STEPS, ABOUT AN HOUR TOTAL</h2>
        <div className="space-y-4">
          {AUDIT_STEPS.map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="w-11 h-11 rounded-full border-2 border-[#FF5500] flex items-center justify-center flex-shrink-0 bg-[#FF5500]/10">
                <span className="font-display text-sm text-[#FF5500] tracking-wider">{s.n}</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-white tracking-wide">{s.t}</h3>
                <p className="font-body text-sm text-[#A9A197] leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={label}>If it&apos;s a fit</p>
        <h2 className={h2}>NO LOCK-IN. NO GAMES.</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {AUDIT_TRUST.map((c) => (
            <div key={c.h} className="rounded-xl border border-[#2A2622] bg-[#141210] p-5">
              <h3 className="font-mono text-[12px] tracking-[0.12em] uppercase text-[#FF5500] mb-2">{c.h}</h3>
              <p className="font-body text-sm text-[#C9C2B8] leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={label}>Questions</p>
        <h2 className={h2}>BEFORE YOU BOOK</h2>
        <div className="rounded-xl border border-[#2A2622] divide-y divide-[#2A2622]">
          {AUDIT_FAQ.map((f) => (
            <details key={f.q} className="group px-5 py-4">
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex justify-between items-center gap-4 font-body font-medium text-white">
                {f.q}
                <span className="text-[#FF5500] text-xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="font-body text-sm text-[#A9A197] leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="text-center pb-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex w-full items-center justify-center gap-2 bg-[#FF5500] text-black font-display text-xl tracking-widest px-6 py-4 rounded hover:bg-[#CC4400] transition-colors"
        >
          <ArrowUp size={18} /> BOOK MY FREE AUDIT
        </button>
      </div>
    </div>
  )
}

export default function BookingClient() {
  const [step, setStep] = useState<1 | 2>(1)
  const params = useSearchParams()

  // Build GHL form URL: services_interested pre-populated, plus any UTM tags
  // (e.g. from the business card QR) forwarded so GHL saves the lead source.
  const ghlFormUrl = (() => {
    const p = new URLSearchParams()
    const service = params.get('services_interested')
    if (service) p.set('services_interested', service)
    for (const key of UTM_KEYS) {
      const v = params.get(key)
      if (v) p.set(key, v)
    }
    const qs = p.toString()
    return qs ? `${GHL_FORM_BASE}?${qs}` : GHL_FORM_BASE
  })()

  // Same UTM tags on the calendar step, so the booking carries the source too.
  const ghlCalendarUrl = (() => {
    const p = new URLSearchParams()
    for (const key of UTM_KEYS) {
      const v = params.get(key)
      if (v) p.set(key, v)
    }
    const qs = p.toString()
    return qs ? `${GHL_CALENDAR_URL}?${qs}` : GHL_CALENDAR_URL
  })()

  // Listen for GHL form submission via postMessage
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        if (
          data?.event  === 'form_submitted' ||
          data?.type   === 'form_submitted' ||
          data?.type   === 'form_submit'    ||
          data?.action === 'form_submitted'
        ) {
          setStep(2)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } catch {}
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="max-w-3xl mx-auto px-4 pt-20 pb-8">

        {step === 1 && (
          <div>
            <div className="text-center mb-6">
              <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3">
                Free local visibility audit
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">
                SEE EXACTLY WHERE YOU&apos;RE LOSING CUSTOMERS
              </h1>
              <p className="font-body text-[#AAAAAA] text-sm max-w-md mx-auto">
                A free, no-pressure screen-share of your ads, content, Google profile and website, next to the top businesses in your town. Fill this out and we&apos;ll have it ready before your call.
              </p>
            </div>

            <StepIndicator step={step} />

            <ScaledGHLEmbed
              src={ghlFormUrl}
              iframeId="inline-wBCLWyveluv1QqGnAKzL"
              title="EGL Marketing | Step 1: Your Info"
              // GHL's form no longer reports its height (2026-11-18), so this is
              // the real height, not a guess: ~940px on a phone, same 1015 the
              // homepage form uses. 680 cut off email, terms and the submit button.
              fallbackHeight={1015}
              // Phone: the questions wrap to two lines, so 1015 cut the submit button in half
              // (seen live 2026-11-20). 1120 shows the whole button with room to spare.
              mobileFallbackHeight={1120}
              reservedSpace={STEP1_RESERVED}
              // Same cream, rounded, glowing card as the homepage hero form.
              heroCardMaxWidth={900}
            />

            <AuditFunnel />
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="text-center mb-6">
              <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3">
                Step 2 of 2
              </p>
              <div className="inline-flex items-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full px-4 py-1.5 mb-4">
                <CheckCircle size={12} className="text-[#FF5500]" />
                <span className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.18em]">
                  Info received. You're almost in!
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">
                PICK YOUR AUDIT TIME
              </h1>
              <p className="font-body text-[#AAAAAA] text-sm max-w-md mx-auto">
                Choose a time that works for you. Plan on about 45 minutes: we'll walk through your audit together, with no pressure.
              </p>
            </div>

            <StepIndicator step={step} />

            <ScaledGHLEmbed
              src={ghlCalendarUrl}
              iframeId="inline-wFGbFB8J86G1btPMNuPz"
              title="EGL Marketing | Step 2: Book a Time"
              // Measured 2026-11-18 (GHL no longer reports height): desktop
              // ~990px max; phone up to ~1395px (time-slot list). 700 cut it off.
              fallbackHeight={1000}
              mobileFallbackHeight={1420}
              scaleToFit={false}
              reservedSpace={STEP2_RESERVED}
            />

            <div className="mt-6 text-center">
              <button
                onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="font-mono text-[10px] text-[#555] hover:text-[#888] uppercase tracking-widest transition-colors"
              >
                ← Back to Step 1
              </button>
            </div>
          </div>
        )}

      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </main>
  )
}
