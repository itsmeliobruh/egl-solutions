import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  number?: string
  badge?: string
  featured?: boolean
  className?: string
}

export function Card({ children, number, badge, featured, className = '' }: CardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-[#F5F0E8] border border-[#E0D8CC]
        shadow-[0_2px_16px_rgba(0,0,0,0.28)] transition-all duration-200
        hover:-translate-y-1 hover:border-[#D4C8BC] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]
        ${featured ? 'border-t-[3px] border-t-[#FF5500]' : ''}
        ${className}`}
    >
      {number && !badge && (
        <span
          className="absolute top-3 right-4 font-display text-[96px] leading-none text-[#C8C0B4] opacity-25 pointer-events-none select-none"
          aria-hidden="true"
        >
          {number}
        </span>
      )}
      {badge && (
        <span className="absolute top-3 right-3 z-10 bg-[#FF5500] text-black font-mono text-[9px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-sm">
          {badge}
        </span>
      )}
      {children}
    </div>
  )
}
