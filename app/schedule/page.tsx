import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScheduleClient from './ScheduleClient'
import ChatCTACard from '@/components/shared/ChatCTACard'
import { LEAD_FORM_ENABLED } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Schedule a Call',
  description:
    'Pick a time that works for you. A free, no-pressure audit call with EGL Marketing. No obligation.',
  alternates: { canonical: 'https://eglmarketing.co/schedule' },
  robots: { index: false },
}

export default function SchedulePage() {
  if (!LEAD_FORM_ENABLED) {
    return (
      <main className="min-h-screen bg-[#080808]">
        <div className="max-w-xl mx-auto px-4 pt-28 pb-16">
          <ChatCTACard autoOpen />
        </div>
      </main>
    )
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <span className="font-display text-2xl text-[#FF5500] tracking-widest animate-pulse">LOADING...</span>
      </div>
    }>
      <ScheduleClient />
    </Suspense>
  )
}
