import type { Metadata } from 'next'
import { Suspense } from 'react'
import BookingClient from './BookingClient'

export const metadata: Metadata = {
  title: 'Book Your Free Local Visibility Audit',
  description:
    'Book your free Local Visibility Audit with EGL Marketing. No obligation, no pressure, just a focused conversation about growing your business.',
  alternates: { canonical: 'https://eglmarketing.co/book' },
  robots: { index: false }, // keep funnel page out of search results
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <span className="font-display text-2xl text-[#FF5500] tracking-widest animate-pulse">LOADING...</span>
      </div>
    }>
      <BookingClient />
    </Suspense>
  )
}
