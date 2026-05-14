'use client'

interface Props {
  activeTab: 'systems' | 'content'
  onTabChange: (t: 'systems' | 'content') => void
}

export function PricingToggle({ activeTab, onTabChange }: Props) {
  return (
    <div className="inline-flex bg-[#1A1A1A] rounded-full p-1.5 mb-10">
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
              ? 'bg-[#FF5500] text-black'
              : 'bg-transparent text-[#888] hover:text-[#ccc]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
