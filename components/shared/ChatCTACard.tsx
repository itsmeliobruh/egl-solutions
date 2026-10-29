'use client'

import { useEffect } from 'react'
import { openChatWidget } from '@/lib/siteConfig'

interface ChatCTACardProps {
  /** Open the chat widget as soon as it loads (used on /book) */
  autoOpen?: boolean
}

// Stands in for the lead form while LEAD_FORM_ENABLED is false.
export default function ChatCTACard({ autoOpen = false }: ChatCTACardProps) {
  useEffect(() => {
    if (!autoOpen) return
    // The widget loads after the page, so retry briefly until it's ready.
    let tries = 0
    const timer = setInterval(() => {
      if (openChatWidget() || ++tries > 20) clearInterval(timer)
    }, 500)
    return () => clearInterval(timer)
  }, [autoOpen])

  return (
    <div className="bg-[#191411] border border-[#2A1F1A] rounded-2xl p-8 text-center shadow-[0_2px_16px_rgba(0,0,0,0.28)]">
      <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.22em] mb-3">
        Free, no obligation
      </p>
      <h2 className="font-display text-4xl text-white tracking-wide mb-3">
        GET YOUR FREE LOCAL VISIBILITY AUDIT
      </h2>
      <p className="font-body text-[#AAAAAA] text-sm max-w-sm mx-auto mb-6">
        Send us a quick message and we&apos;ll reach out to set up your audit.
      </p>
      <button
        type="button"
        onClick={() => openChatWidget()}
        className="glass-btn-inferno font-display text-sm px-6 py-3 rounded-full tracking-widest"
      >
        CHAT WITH US
      </button>
    </div>
  )
}
