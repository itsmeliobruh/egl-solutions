import type { Metadata } from 'next'
import ChatCTACard from '@/components/shared/ChatCTACard'

export const metadata: Metadata = {
  title: "You're All Set",
  description: 'Your call with EGL Marketing is confirmed. Check your email for the details.',
  alternates: { canonical: 'https://eglmarketing.co/thank-you' },
  robots: { index: false }, // keep funnel page out of search results
}

// Chat-only during A2P review: the booking prep form lives in git tag full-site-2026-11-16.
export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="max-w-xl mx-auto px-4 pt-28 pb-16">
        <ChatCTACard autoOpen />
      </div>
    </main>
  )
}
