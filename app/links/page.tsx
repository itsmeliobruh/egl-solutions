import type { Metadata } from 'next'
import { Suspense } from 'react'
import CardClient from '../card/CardClient'

// Link-in-bio page for Instagram / TikTok / YouTube (/ig /tt /yt redirect here with UTMs).
// Separate from /card (business card QR) so each audience gets its own pitch. Melio, 2026-11-18.
export const metadata: Metadata = {
  title: 'Melio | EGL Marketing',
  description: 'Book your free local visibility audit or text Melio at EGL Marketing.',
  robots: { index: false, follow: false },
}

export default function LinksPage() {
  return (
    <Suspense fallback={null}>
      <CardClient variant="social" />
    </Suspense>
  )
}
