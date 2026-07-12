export function PricingRibbon({ label }: { label: string }) {
  return (
    <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none z-10">
      {/* Thin diagonal strip — not a triangle, a narrow rotated band */}
      <div
        className="absolute bg-[#FF5500] flex items-center justify-center"
        style={{
          width: 140,
          height: 20,
          top: 22,
          right: -36,
          transform: 'rotate(45deg)',
        }}
      >
        <span
          className="font-mono text-[7px] tracking-[0.12em] uppercase text-black font-bold whitespace-nowrap"
        >
          {label}
        </span>
      </div>
    </div>
  )
}
