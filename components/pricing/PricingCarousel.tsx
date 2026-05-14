'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PricingCard, type PricingCardData } from './PricingCard'

const AUTO_DELAY   = 3500  // ms between auto-advances
const RESUME_DELAY = 5000  // ms after last interaction before resuming
const GAP          = 12    // px gap between cards
const PEEK         = 36    // px of next card visible on the right

interface Props {
  cards: PricingCardData[]
  resetKey: string
}

export function PricingCarousel({ cards, resetKey }: Props) {
  const [active, setActive]     = useState(0)
  const [cardW, setCardW]       = useState(280)   // updated on mount/resize
  const [isAuto, setIsAuto]     = useState(true)

  const containerRef  = useRef<HTMLDivElement>(null)
  const touchStartX   = useRef<number | null>(null)
  const autoTimerRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Measure card width from container ──────────────────────────────────
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setCardW(containerRef.current.offsetWidth - PEEK - GAP)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // ── Reset to first card when tab changes ───────────────────────────────
  useEffect(() => { setActive(0) }, [resetKey])

  // ── Auto-scroll helpers ────────────────────────────────────────────────
  const stopAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current)
      autoTimerRef.current = null
    }
  }, [])

  const startAuto = useCallback(() => {
    stopAuto()
    setIsAuto(true)
    autoTimerRef.current = setInterval(() => {
      setActive(i => (i + 1) % cards.length)
    }, AUTO_DELAY)
  }, [cards.length, stopAuto])

  // Called on any user interaction — pauses auto, schedules resume
  const onEngage = useCallback(() => {
    stopAuto()
    setIsAuto(false)
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(startAuto, RESUME_DELAY)
  }, [stopAuto, startAuto])

  // Start auto-scroll on mount, clean up on unmount
  useEffect(() => {
    startAuto()
    return () => {
      stopAuto()
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [startAuto, stopAuto])

  // ── Navigation ─────────────────────────────────────────────────────────
  const go   = (i: number) => { setActive(i); onEngage() }
  const prev = () => { setActive(i => Math.max(0, i - 1)); onEngage() }
  const next = () => { setActive(i => Math.min(cards.length - 1, i + 1)); onEngage() }

  // ── Touch / swipe ──────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    onEngage()
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev()
    touchStartX.current = null
  }

  // Pixel offset of the sliding track
  const translateX = active * (cardW + GAP)

  return (
    <div className="flex flex-col gap-5">

      {/* ── Sliding track ─────────────────────────────────────────── */}
      <div ref={containerRef} className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ gap: `${GAP}px`, transform: `translateX(-${translateX}px)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 transition-opacity duration-300"
              style={{
                width: cardW,
                opacity: i === active ? 1 : 0.55,
              }}
            >
              <PricingCard {...card} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Controls ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          disabled={active === 0}
          className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#333] text-white
                     flex items-center justify-center hover:bg-[#FF5500] hover:border-[#FF5500]
                     disabled:opacity-20 transition-all"
          aria-label="Previous card"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Pill dots — active dot stretches wide */}
        <div className="flex items-center gap-1.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 h-2 bg-[#FF5500]'
                  : 'w-2 h-2 bg-[#444] hover:bg-[#666]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={active === cards.length - 1}
          className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#333] text-white
                     flex items-center justify-center hover:bg-[#FF5500] hover:border-[#FF5500]
                     disabled:opacity-20 transition-all"
          aria-label="Next card"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Auto-scroll status ─────────────────────────────────────── */}
      <p className="text-center font-mono text-[9px] tracking-[0.2em] uppercase text-[#444]">
        {isAuto ? '● auto scrolling' : '◯ paused — resuming soon'}
      </p>

    </div>
  )
}
