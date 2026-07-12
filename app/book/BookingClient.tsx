'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { CheckCircle, ChevronRight } from 'lucide-react'

const GHL_FORM_BASE     = 'https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL'
const GHL_CALENDAR_URL  = 'https://api.leadconnectorhq.com/widget/booking/MThMMXnrsJQv9rkaBMg3'

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

export default function BookingClient() {
  const [step, setStep] = useState<1 | 2>(1)
  const params = useSearchParams()

  // Build GHL form URL with services_interested pre-populated
  const ghlFormUrl = (() => {
    const service = params.get('services_interested')
    if (!service) return GHL_FORM_BASE
    const p = new URLSearchParams()
    p.set('services_interested', service)
    return `${GHL_FORM_BASE}?${p.toString()}`
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
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">

        {step === 1 && (
          <div>
            <div className="text-center mb-8">
              <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3">
                Step 1 of 2
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">
                TELL US ABOUT YOUR BUSINESS
              </h1>
              <p className="font-body text-[#AAAAAA] text-sm max-w-md mx-auto">
                Fill in your details below and we'll have everything ready before your call.
              </p>
            </div>

            <StepIndicator step={step} />

            <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
              <iframe
                src={ghlFormUrl}
                style={{ width: '100%', height: '680px', border: 'none', display: 'block' }}
                scrolling="no"
                title="EGL Marketing — Step 1: Your Info"
                id="bNHFPa0DuNhpFjQF1M0E_1778784873350"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="text-center mb-8">
              <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3">
                Step 2 of 2
              </p>
              <div className="inline-flex items-center gap-2 bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full px-4 py-1.5 mb-4">
                <CheckCircle size={12} className="text-[#FF5500]" />
                <span className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.18em]">
                  Info received — you're almost in!
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-3">
                PICK YOUR TIME SLOT
              </h1>
              <p className="font-body text-[#AAAAAA] text-sm max-w-md mx-auto">
                Choose a time that works for you. The call is 15 minutes — focused, pressure-free, and actually useful.
              </p>
            </div>

            <StepIndicator step={step} />

            <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-[0_4px_32px_rgba(0,0,0,0.5)]">
              <iframe
                src={GHL_CALENDAR_URL}
                style={{ width: '100%', height: '700px', border: 'none', display: 'block' }}
                scrolling="no"
                title="EGL Marketing — Step 2: Book a Time"
              />
            </div>

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
