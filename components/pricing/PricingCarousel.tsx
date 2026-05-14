'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PricingCard, type PricingCardData } from './PricingCard'

interface Props {
  cards: PricingCardData[]
  resetKey: string
}

export function PricingCarousel({ cards, resetKey }: Props) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    setActive(0)
  }, [resetKey])

  function prev() {
    setActive((i) => (i === 0 ? cards.length - 1 : i - 1))
  }

  function next() {
    setActive((i) => (i === cards.length - 1 ? 0 : i + 1))
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <PricingCard {...cards[active]} />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FF5500] transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? 'bg-[#FF5500]' : 'bg-[#444]'
              }`}
              aria-label={`Card ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-[#1A1A1A] text-white hover:bg-[#FF5500] transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
