const items = [
  'Results Driven',
  'Full Service',
  'Marketing Experts',
  'Transparent Pricing',
  'Trusted',
  'AI-Powered',
  'Results Driven',
  'Full Service',
  'Marketing Experts',
  'Transparent Pricing',
  'Trusted',
  'AI-Powered',
]

export default function TrustBar() {
  return (
    <div className="bg-ash border-y border-steel overflow-hidden py-4" aria-hidden="true">
      <div className="flex animate-ticker" style={{ width: 'max-content' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-3">
            <span className="font-mono text-xs text-light uppercase tracking-[0.18em] whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-inferno flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
