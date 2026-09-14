import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Book a Free Local Visibility Audit | EGL Marketing',
  description:
    'Packages for Connecticut home remodeling contractors are discussed after a free 15-minute Local Visibility Audit. Book yours now — no obligation.',
  alternates: { canonical: 'https://eglmarketing.co/book' },
}

// Pricing is discussed on discovery calls only — redirect to booking
export default function PricingPage() {
  redirect('/book')
}
