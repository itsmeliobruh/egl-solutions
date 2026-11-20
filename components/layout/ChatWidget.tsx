'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

// The GHL chat bubble stays off the booking funnel (Melio, 2026-11-20): those pages have
// one job. It stays on the link-in-bio and card pages (Melio's call, same day).
// On these routes the widget script isn't loaded at all; the CSS rule also hides a bubble
// that was already loaded on an earlier page before the visitor navigated here.
const NO_CHAT_ROUTES = ['/book', '/schedule']

export default function ChatWidget() {
  const pathname = usePathname()
  const hidden = NO_CHAT_ROUTES.some((route) => pathname?.startsWith(route))

  if (hidden) return <style>{`chat-widget{display:none !important}`}</style>

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6afb6b7875f0c3a5205bf9c8"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  )
}
