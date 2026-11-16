import type { Metadata } from 'next'
import ChatCTACard from '@/components/shared/ChatCTACard'

export const metadata: Metadata = {
  title: 'Book Your Free Local Visibility Audit',
  description:
    'Book your free Local Visibility Audit with EGL Marketing. No obligation, no pressure, just a focused conversation about growing your business.',
  alternates: { canonical: 'https://eglmarketing.co/book' },
  robots: { index: false }, // keep funnel page out of search results
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <div className="max-w-xl mx-auto px-4 pt-28 pb-16">
        <ChatCTACard autoOpen />
      </div>
    </main>
  )
}
