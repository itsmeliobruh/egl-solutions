import type { Metadata } from 'next'
import Script from 'next/script'
import { CheckCircle, Mail, CalendarCheck, Clock, PenLine } from 'lucide-react'
import ScaledGHLEmbed from '@/components/shared/ScaledGHLEmbed'
import ScrollArrows from '@/components/shared/ScrollArrows'

const GHL_FORM_URL = 'https://api.leadconnectorhq.com/widget/form/D8VQCSQTADxEdH5d62GR'

export const metadata: Metadata = {
  title: "You're All Set | EGL Marketing",
  description: 'Your call with EGL Marketing is confirmed. Check your email for the details.',
  alternates: { canonical: 'https://eglmarketing.co/thank-you' },
  robots: { index: false }, // keep funnel page out of search results
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const sp = await searchParams
  const get = (key: string) => {
    const v = sp[key]
    return Array.isArray(v) ? v[0] : v
  }

  // Forward contact info passed in the URL (e.g. from the booking step
  // before this page) into the form's iframe src so GHL can prefill it.
  // The GHL widget expects the plain `phone` key — `phone_raw` is just
  // how the value arrives here — so both are set to cover either.
  const qs = new URLSearchParams()
  const fullName = get('full_name') || get('name')
  const email = get('email')
  const phone = get('phone') || get('phone_raw')
  if (fullName) qs.set('full_name', fullName)
  if (email) qs.set('email', email)
  if (phone) {
    qs.set('phone', phone)
    qs.set('phone_raw', phone)
  }
  const formUrl = qs.toString() ? `${GHL_FORM_URL}?${qs.toString()}` : GHL_FORM_URL

  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="max-w-2xl mx-auto px-4 pt-20 pb-24 md:pt-32 text-center">

        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 mb-5 md:mb-8">
          <CheckCircle size={28} className="text-[#FF5500] md:hidden" strokeWidth={1.75} />
          <CheckCircle size={40} className="text-[#FF5500] hidden md:block" strokeWidth={1.75} />
        </div>

        <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3 md:mb-4">
          Call Confirmed
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-3 md:mb-4">
          YOU&apos;RE ALL SET!
        </h1>
        <p className="font-body text-[#AAAAAA] text-base md:text-lg max-w-lg mx-auto mb-8 md:mb-12">
          Your free 15-minute intro call with EGL Marketing is booked. We&apos;re looking forward to it.
        </p>

        {/* What happens next */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#0D0D0D] p-6 md:p-8 text-left mb-4 md:mb-10">
          <p className="font-display text-sm text-white tracking-widest mb-4 md:mb-6">
            WHAT HAPPENS NEXT
          </p>
          <ul className="space-y-4 md:space-y-5">
            <li className="flex items-start gap-4">
              <Mail size={18} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-[#CCCCCC] leading-relaxed">
                Check your email — you&apos;ll get a confirmation with the call details and a calendar invite.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CalendarCheck size={18} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-[#CCCCCC] leading-relaxed">
                Add it to your calendar so it doesn&apos;t slip — we&apos;ll send a reminder before the call too.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Clock size={18} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-[#CCCCCC] leading-relaxed">
                It&apos;s 15 minutes, no pressure — just a straight look at where your business could be losing leads and what it would take to fix it.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <PenLine size={18} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-[#CCCCCC] leading-relaxed">
                One last thing! Take a minute to fill out the quick form below — it helps us get to know your business so we can make the most of our time together.
              </span>
            </li>
          </ul>
        </div>

        <ScrollArrows />

        {/* Help us help you form */}
        <ScaledGHLEmbed
          src={formUrl}
          iframeId="inline-D8VQCSQTADxEdH5d62GR"
          title="Main: Help Us Help You"
          fallbackHeight={1399}
          scaleToFit={false}
        />

      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </main>
  )
}
