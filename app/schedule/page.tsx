import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScheduleClient from './ScheduleClient'

export const metadata: Metadata = {
  title: 'Schedule a Call | EGL Marketing',
  description:
    'Pick a time that works for you. Free 15-minute strategy call with EGL Marketing — no obligation, no contracts.',
  alternates: { canonical: 'https://egl.solutions/schedule' },
  robots: { index: false },
}

export default function SchedulePage() {
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
