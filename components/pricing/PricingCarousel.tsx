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
  // Internal index: 0 = clone-of-last, 1..N = real cards, N+1 = clone-of-first
  const [index, setIndex]       = useState(1)
  const [animate, setAnimate]   = useState(true)
  const [cardW, setCardW]       = useState(280)
  const [isAuto, setIsAuto]     = useState(true)

  const containerRef   = useRef<HTMLDivElement>(null)
  const touchStartX    = useRef<number | null>(null)
  const autoTimerRef   = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitioning  = useRef(false)

  const N = cards.length

  // Cloned track: [last, ...cards, first]
  const track = [cards[N - 1], ...cards, cards[0]]

  // Active card index (0-based) for dot/button logic
  const active = index - 1  // 0..N-1 when in real range

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

  // ── Reset to first real card when tab changes ───────────────────────────
  useEffect(() => {
    setAnimate(false)
    setIndex(1)
    // Re-enable animation after one frame
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
  }, [resetKey])

  // ── Snap logic: after transition ends, silently jump back into real range ─
  const handleTransitionEnd = useCallback(() => {
    transitioning.current = false
    if (index === 0) {
      // Jumped past the start — snap to real last card
      setAnimate(false)
      setIndex(N)
    } else if (index === N + 1) {
      // Jumped past the end — snap to real first card
      setAnimate(false)
      setIndex(1)
    }
  }, [index, N])

  // Re-enable animation after a snap (next paint after animate=false)
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
      return () => cancelAnimationFrame(id)
    }
  }, [animate])

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
      setIndex(i => i + 1)
      setAnimate(true)
    }, AUTO_DELAY)
  }, [stopAuto])

  const onEngage = useCallback(() => {
    stopAuto()
    setIsAuto(false)
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(startAuto, RESUME_DELAY)
  }, [stopAuto, startAuto])

  useEffect(() => {
    startAuto()
    return () => {
      stopAuto()
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [startAuto, stopAuto])

  // ── Navigation ─────────────────────────────────────────────────────────
  const go = (realIndex: number) => {
    setAnimate(true)
    setIndex(realIndex + 1)
    onEngage()
  }
  const prev = () => {
    setAnimate(true)
    setIndex(i => i - 1)
    onEngage()
  }
  const next = () => {
    setAnimate(true)
    setIndex(i => i + 1)
    onEngage()
  }

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

  // Clamp active for dot display (handles clone positions 0 and N+1)
  const activeDot = index <= 0 ? N - 1 : index >= N + 1 ? 0 : index - 1

  const translateX = index * (cardW + GAP)

  return (
    <div className="flex flex-col gap-5">

      {/* ── Sliding track ─────────────────────────────────────────── */}
      <div ref={containerRef} className="overflow-hidden w-full">
        <div
          className={animate ? 'flex transition-transform duration-300 ease-in-out' : 'flex'}
          style={{ gap: `${GAP}px`, transform: `translateX(-${translateX}px)` }}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {track.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 transition-opacity duration-300"
              style={{
                width: cardW,
                opacity: i === index ? 1 : 0.55,
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
          className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#333] text-white
                     flex items-center justify-center hover:bg-[#FF5500] hover:border-[#FF5500]
                     transition-all"
          aria-label="Previous card"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Pill dots */}
        <div className="flex items-center gap-1.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeDot
                  ? 'w-6 h-2 bg-[#FF5500]'
                  : 'w-2 h-2 bg-[#444] hover:bg-[#666]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#333] text-white
                     flex items-center justify-center hover:bg-[#FF5500] hover:border-[#FF5500]
                     transition-all"
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
