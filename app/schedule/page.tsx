import type { Metadata } from 'next'
import ChatCTACard from '@/components/shared/ChatCTACard'

export const metadata: Metadata = {
  title: 'Schedule a Call',
  description:
    'Pick a time that works for you. A free, no-pressure audit call with EGL Marketing. No obligation.',
  alternates: { canonical: 'https://eglmarketing.co/schedule' },
  robots: { index: false },
}

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="max-w-xl mx-auto px-4 pt-28 pb-16">
        <ChatCTACard autoOpen />
      </div>
    </main>
  )
}
