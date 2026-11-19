'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

// Single-screen conversion funnels — keep them focused, no footer to scroll past.
// /card is the business card QR page: it already lists every contact detail.
const HIDE_FOOTER_ROUTES = ['/book', '/schedule', '/card', '/links']

export default function ConditionalFooter() {
  const pathname = usePathname()
  if (HIDE_FOOTER_ROUTES.some((route) => pathname?.startsWith(route))) return null
  return <Footer />
}
