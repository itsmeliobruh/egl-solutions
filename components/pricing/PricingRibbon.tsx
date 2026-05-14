'use client'

export function PricingRibbon({ label }: { label: string }) {
  return (
    <div className="absolute top-0 right-0 overflow-hidden w-[110px] h-[110px] pointer-events-none">
      <div
        className="absolute top-0 right-0 w-0 h-0"
        style={{
          borderStyle: 'solid',
          borderWidth: '0 110px 110px 0',
          borderColor: 'transparent #FF5500 transparent transparent',
        }}
      />
      <span
        className="absolute font-mono text-[8px] tracking-[0.12em] uppercase text-black font-bold whitespace-nowrap"
        style={{ top: 22, right: -84, transform: 'rotate(45deg)' }}
      >
        {label}
      </span>
    </div>
  )
}
