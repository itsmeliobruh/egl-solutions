import Link from 'next/link'
import { Card } from '@/components/shared/Card'

interface ServiceCardProps {
  slug: string
  name: string
  emoji: string
  description: string
  price: string
  originalPrice?: string
  badge?: string
  number?: string
}

export default function ServiceCard({
  slug,
  name,
  emoji,
  description,
  price,
  originalPrice,
  badge,
  number,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="group block">
      <Card badge={badge} number={number} featured={!!badge} className="p-6 h-full">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">{emoji}</span>
          <h3 className="font-display text-xl text-[#0A0A0A] tracking-wide group-hover:text-[#FF5500] transition-colors">
            {name}
          </h3>
        </div>

        <p className="font-body text-sm text-[#666666] leading-relaxed mb-4">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            {originalPrice && (
              <span className="font-body text-xs text-[#999] line-through mr-2">{originalPrice}</span>
            )}
            <span className="font-display text-xl text-[#FF5500]">{price}</span>
          </div>
          <span className="font-mono text-[11px] text-[#FF5500] tracking-[0.1em] group-hover:underline">
            GET STARTED →
          </span>
        </div>
      </Card>
    </Link>
  )
}
