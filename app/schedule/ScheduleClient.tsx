'use client'

import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { CheckCircle, ChevronRight } from 'lucide-react'
import ScaledGHLEmbed from '@/components/shared/ScaledGHLEmbed'

const GHL_CALENDAR_BASE = 'https://api.leadconnectorhq.com/widget/booking/wFGbFB8J86G1btPMNuPz'

// Vertical space (px) taken up by everything on screen besides the embed
// itself — navbar + section padding + heading block + step indicator —
// so the calendar scales to fill exactly what's left and the whole page
// fits without scrolling.
const RESERVED = 460

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

  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="max-w-3xl mx-auto px-4 pt-20 pb-8">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3">
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

        <ScaledGHLEmbed
          src={calendarUrl}
          iframeId="inline-wFGbFB8J86G1btPMNuPz"
          title="Schedule a call with EGL Marketing"
          fallbackHeight={700}
          reservedSpace={RESERVED}
        />

      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </main>
  )
}
