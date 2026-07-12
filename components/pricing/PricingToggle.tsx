'use client'

interface Props {
  activeTab: 'systems' | 'content'
  onTabChange: (t: 'systems' | 'content') => void
}

export function PricingToggle({ activeTab, onTabChange }: Props) {
  return (
    <div className="inline-flex bg-[#1A1A1A] rounded-full p-1.5 mb-10 ring-1 ring-[#FF5500]/30 shadow-[0_0_24px_rgba(255,85,0,0.35),0_0_60px_rgba(255,85,0,0.15)]">
      {(
        [
          ['systems', '⚡ SYSTEMS'],
          ['content', '📸 CONTENT'],
        ] as const
      ).map(([tab, label]) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`font-display text-base tracking-widest px-7 py-2.5 rounded-full transition-all duration-200 ${
            activeTab === tab
              ? 'bg-[#FF5500] text-black shadow-[0_0_16px_rgba(255,85,0,0.7)]'
              : 'bg-transparent text-[#888] hover:text-[#ccc]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
