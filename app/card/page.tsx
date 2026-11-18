import type { Metadata } from 'next'
import { Suspense } from 'react'
import CardClient from './CardClient'

// Where the business card QR lands (GHL QR "EGL Business Card - Audit").
// Save Melio's contact first, then book the free audit. Hidden from search, nav and sitemap.
export const metadata: Metadata = {
  title: 'Melio | EGL Marketing',
  description: 'Save Melio’s number and book your free local visibility audit.',
  robots: { index: false, follow: false },
}

export default function CardPage() {
  return (
    <Suspense fallback={null}>
      <CardClient />
    </Suspense>
  )
}
