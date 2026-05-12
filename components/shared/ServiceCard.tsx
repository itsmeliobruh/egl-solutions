import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  slug: string
  name: string
  emoji: string
  description: string
  price: string
  originalPrice?: string
  badge?: string
}

export default function ServiceCard({
  slug,
  name,
  emoji,
  description,
  price,
  originalPrice,
  badge,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-mid border border-steel rounded p-6 hover:border-inferno transition-all duration-300 relative overflow-hidden"
    >
      {/* Top orange border on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-inferno scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {badge && (
        <span className="absolute top-4 right-4 font-mono text-[9px] text-black bg-inferno px-2 py-0.5 rounded uppercase tracking-widest">
          {badge}
        </span>
      )}

      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{emoji}</span>
        <h3 className="font-display text-xl text-bone tracking-wide group-hover:text-inferno transition-colors">
          {name}
        </h3>
      </div>

      <p className="font-body text-sm text-muted leading-relaxed mb-4">{description}</p>

      <div className="flex items-center justify-between mt-auto">
        <div>
          {originalPrice && (
            <span className="font-body text-xs text-muted line-through mr-2">{originalPrice}</span>
          )}
          <span className="font-display text-xl text-inferno">{price}</span>
        </div>
        <span className="text-muted group-hover:text-inferno transition-colors">
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
