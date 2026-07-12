import { Check } from 'lucide-react'
import { PricingRibbon } from './PricingRibbon'

export interface PricingCardData {
  title: string
  tagline: string
  description: string
  setup: number
  monthly: number
  adSpendSeparate?: boolean
  cta: string
  badge: string | null
  features: string[]
  bookingHref: string
}

export function PricingCard({
  title,
  tagline,
  description,
  setup,
  monthly,
  adSpendSeparate,
  cta,
  badge,
  features,
  bookingHref,
}: PricingCardData) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#F5F0E8] border border-[#E0D8CC] shadow-[0_2px_16px_rgba(0,0,0,0.28)] flex flex-col h-full">
      {badge && <PricingRibbon label={badge} />}

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-[#E0D8CC]">
        <p className="font-display text-2xl tracking-wide text-[#0A0A0A] mb-1">{title}</p>
        <p className="font-body text-sm italic text-[#888]">{tagline}</p>
      </div>

      {/* Description */}
      <div className="px-6 py-4 border-b border-[#EDE8E0]">
        <p className="font-body text-sm text-[#555] leading-relaxed">{description}</p>
      </div>

      {/* Feature list */}
      <div className="flex-1 px-6 py-4 space-y-2">
        {features.map((feature) => {
          if (feature === 'PLUS') {
            return (
              <div
                key="plus-divider"
                className="py-1 text-center font-mono text-[10px] text-[#FF5500] uppercase tracking-widest flex items-center gap-3"
              >
                <span className="flex-1 h-px bg-[#FF5500]/30" />
                PLUS
                <span className="flex-1 h-px bg-[#FF5500]/30" />
              </div>
            )
          }
          const isEverything = feature.startsWith('Everything in')
          return (
            <div key={feature} className="flex items-start gap-2">
              <Check size={13} className="text-[#FF5500] flex-shrink-0 mt-0.5" />
              <span className={`font-body text-sm text-[#333] ${isEverything ? 'font-bold' : ''}`}>{feature}</span>
            </div>
          )
        })}
      </div>

      {/* Price block */}
      <div className="px-6 py-5 border-t border-[#E0D8CC] text-center">
        <p className="font-display text-4xl tracking-wide text-[#0A0A0A]">
          ${monthly.toLocaleString()}
          <span className="font-body text-base text-[#888] font-normal">/mo</span>
        </p>
        {setup > 0 && (
          <p className="font-body text-sm text-[#888] mt-1">+ ${setup.toLocaleString()} one-time setup</p>
        )}
        {adSpendSeparate && (
          <p className="font-body text-xs text-[#999] mt-2 leading-snug">
            Ad spend billed separately & paid directly by client.
          </p>
        )}
      </div>

      {/* CTA */}
      <a
        href={bookingHref}
        className="mx-6 mb-6 w-[calc(100%-48px)] bg-[#FF5500] text-white font-display text-lg tracking-widest py-4 rounded-lg hover:bg-[#CC3300] transition-colors text-center block"
      >
        {cta}
      </a>
    </div>
  )
}
