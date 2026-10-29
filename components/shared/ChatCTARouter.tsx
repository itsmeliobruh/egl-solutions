'use client'

import { useEffect } from 'react'
import { LEAD_FORM_ENABLED, openChatWidget } from '@/lib/siteConfig'

// While the lead form is off (see lib/siteConfig.ts), catches clicks on any
// /book link site-wide and opens the chat widget instead. Capture phase so it
// runs before next/link's own navigation. If the widget hasn't loaded, the
// link navigates normally and /book shows the chat card.
export default function ChatCTARouter() {
  useEffect(() => {
    if (LEAD_FORM_ENABLED) return
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.('a[href]')
      const href = link?.getAttribute('href') ?? ''
      if (!href.startsWith('/book')) return
      if (openChatWidget()) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    window.addEventListener('click', handleClick, true)
    return () => window.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
