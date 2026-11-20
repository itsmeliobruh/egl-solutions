'use client'

import { useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

export interface OfferDetailsContent {
  /** Label on the expand link */
  toggleLabel?: string
  /** Lead-in above the bullets */
  intro?: string
  bullets: string[]
  /** Closing line under the bullets */
  outro?: string
}

/**
 * A small "What we'll cover" link that expands the offer details in place,
 * for page headers above a GHL calendar. The copy lives here (not in the GHL
 * calendar's own title/description, which are switched off) so each landing
 * page can pass its own details and reuse one calendar. Melio, 2026-11-20.
 */
export default function OfferDetails({
  toggleLabel = "What we'll cover",
  intro,
  bullets,
  outro,
  defaultOpen = false,
}: OfferDetailsContent & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="mx-auto mb-4 max-w-md">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF5500] hover:text-[#F0EDE8] transition-colors"
      >
        {open ? 'Hide details' : toggleLabel}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left">
            {intro && <p className="mb-3 font-body text-sm text-[#AAAAAA]">{intro}</p>}
            <ul className="space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 font-body text-sm text-[#F0EDE8]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5500]/15">
                    <Check size={12} className="text-[#FF5500]" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            {outro && <p className="mt-4 font-body text-sm text-[#AAAAAA]">{outro}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
