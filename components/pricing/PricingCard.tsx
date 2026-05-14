import { PricingRibbon } from './PricingRibbon'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

export interface PricingCardData {
  title: string
  subtitle: string
  price: number
  oldPrice: number | null
  savings: string | null
  cta: string
  badge: string | null
  features: string[]
  subFeatures?: string[]
  addons: string[]
  href: string
}

export function PricingCard({
  title,
  subtitle,
  price,
  oldPrice,
  savings,
  cta,
  badge,
  features,
  subFeatures,
  addons,
}: PricingCardData) {
  // Index of "PLUS" feature if present
  const hasSub = subFeatures && subFeatures.length > 0

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#F5F0E8] border border-[#E0D8CC] shadow-[0_2px_16px_rgba(0,0,0,0.28)] flex flex-col h-full">
      {badge && <PricingRibbon label={badge} />}

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-[#E0D8CC]">
        <p className="font-sans font-bold text-xl text-[#0A0A0A] mb-1">{title}</p>
        <p className="font-sans text-sm italic text-[#888]">{subtitle}</p>
      </div>

      {/* Feature list */}
      <div className="flex-1">
        {features.map((feature) => {
          if (feature === 'PLUS') {
            return (
              <div
                key="plus-divider"
                className="px-6 py-2 text-center font-mono text-[11px] text-[#FF5500] uppercase tracking-widest flex items-center gap-3 border-b border-[#EDE8E0]"
              >
                <span className="flex-1 h-px bg-[#FF5500]/40" />
                PLUS
                <span className="flex-1 h-px bg-[#FF5500]/40" />
              </div>
            )
          }

          const isAfterAdvancedAI =
            hasSub &&
            feature === 'Advanced AI Agents'

          return (
            <div key={feature}>
              <div className="border-b border-[#EDE8E0] px-6 py-3 text-sm text-[#333] font-medium text-center">
                {feature}
              </div>
              {isAfterAdvancedAI &&
                subFeatures!.map((sf) => (
                  <div
                    key={sf}
                    className="pl-8 py-2 text-xs text-[#888] italic text-center border-b border-[#EDE8E0]"
                  >
                    {sf}
                  </div>
                ))}
            </div>
          )
        })}

        {addons.length > 0 && (
          <>
            <div className="px-6 py-2 text-xs text-[#888] font-mono uppercase tracking-wider text-center border-b border-[#EDE8E0]">
              Additional Services:
            </div>
            {addons.map((addon) => (
              <div
                key={addon}
                className="border-b border-[#EDE8E0] px-6 py-3 text-sm text-[#FF5500] font-medium text-center"
              >
                {addon}
              </div>
            ))}
          </>
        )}
      </div>

      {/* Price block */}
      <div className="px-6 py-5 border-t border-[#E0D8CC] text-center">
        {oldPrice && (
          <p className="text-sm text-[#AAA] line-through mb-1">${oldPrice.toLocaleString()}/month</p>
        )}
        <p className="text-5xl font-extrabold text-[#0A0A0A]">
          ${price.toLocaleString()}
          <span className="text-base text-[#888] font-normal">/month</span>
        </p>
        {savings && <p className="text-sm font-bold text-[#22C55E] mt-1">{savings}</p>}
      </div>

      {/* CTA */}
      <a
        href={BOOKING_URL}
        className="mx-6 mb-6 w-[calc(100%-48px)] bg-[#FF5500] text-white font-bold text-base py-4 rounded-lg hover:bg-[#CC3300] transition-colors text-center block"
      >
        {cta}
      </a>
    </div>
  )
}
