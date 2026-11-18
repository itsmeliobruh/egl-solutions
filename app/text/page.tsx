import type { Metadata } from 'next'
import { Suspense } from 'react'
import TextClient from './TextClient'

// Client-only page for the Reference Line: save the number, then send an intro text.
// Hidden from search and left out of the nav and sitemap on purpose.
export const metadata: Metadata = {
  title: 'Send Us Your Video References',
  description: 'Save the EGL Marketing References number and text us videos you like.',
  robots: { index: false, follow: false },
}

export default function TextPage() {
  return (
    <Suspense fallback={null}>
      <TextClient />
    </Suspense>
  )
}
