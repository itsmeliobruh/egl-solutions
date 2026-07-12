'use client'

import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { CheckCircle, ChevronRight } from 'lucide-react'

const GHL_CALENDAR_BASE = 'https://api.leadconnectorhq.com/widget/booking/MThMMXnrsJQv9rkaBMg3'

export default function ScheduleClient() {
  const params = useSearchParams()

  // Build calendar URL with all passed params forwarded into the iframe src
  const calendarUrl = (() => {
    const p = new URLSearchParams()
    const name  = params.get('full_name') || params.get('name') || ''
    const email = params.get('email') || ''
    const phone = params.get('phone') || params.get('phone_raw') || ''
    const service = params.get('services_interested') || ''
    if (name)    p.set('name', name)
    if (email)   p.set('email', email)
    if (phone)   p.set('phone', phone)
    if (service) p.set('notes', service)
    const qs = p.toString()
    return qs ? `${GHL_CALENDAR_BASE}?${qs}` : GHL_CALENDAR_BASE
  })()

  const isReady = true

  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-4">
            Step 2 of 2
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">
            PICK YOUR TIME SLOT
          </h1>
          <p className="font-body text-[#AAAAAA] text-sm max-w-md mx-auto mb-4">
            Choose a time that works for you. The call is 15 minutes — focused, pressure-free, and actually useful.
          </p>
          <span className="inline-flex items-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.18em]">
              FREE 15-MINUTE INTRO CALL
            </span>
          </span>
        </div>

        {/* Step indicator above calendar */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-[#FF5500]/20 text-[#FF5500]">
              <CheckCircle size={14} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#666]">Your Info</span>
          </div>
          <ChevronRight size={14} className="text-[#444]" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-[#FF5500] text-white">
              2
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white">Pick a Time</span>
          </div>
        </div>

        {/* Calendar embed */}
        {isReady ? (
          <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
            <iframe
              src={calendarUrl}
              style={{ width: '100%', height: '700px', border: 'none', display: 'block' }}
              scrolling="no"
              title="Schedule a call with EGL Marketing"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#FF5500]/40 bg-[#111] p-16 text-center">
            <p className="font-display text-2xl text-[#FF5500] tracking-wide mb-3">CALENDAR COMING SOON</p>
            <p className="font-body text-sm text-[#666]">
              Paste your GHL calendar embed URL into{' '}
              <code className="text-[#FF5500]">app/schedule/ScheduleClient.tsx</code>{' '}
              to activate this section.
            </p>
          </div>
        )}

      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </main>
  )
}
