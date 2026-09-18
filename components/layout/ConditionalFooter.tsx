'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

// Single-screen conversion funnels — keep them focused, no footer to scroll past.
const HIDE_FOOTER_ROUTES = ['/book', '/schedule']

export default function ConditionalFooter() {
  const pathname = usePathname()
  if (HIDE_FOOTER_ROUTES.some((route) => pathname?.startsWith(route))) return null
  return <Footer />
}
