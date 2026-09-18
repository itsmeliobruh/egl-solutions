'use client'

import { useState, useLayoutEffect, useRef } from 'react'

interface ScaledGHLEmbedProps {
  src: string
  /** Omit for widgets (e.g. calendars) where GHL assigns its own id */
  iframeId?: string
  title: string
  /** Best-guess content height (px) before GHL's script reports the real one */
  fallbackHeight: number
  /** Vertical px reserved elsewhere on screen (navbar, headings, padding, footer content) */
  reservedSpace: number
  /** Floor for how small the embed is allowed to scale down to */
  minZoom?: number
}

/**
 * Renders a GHL iframe (form or calendar) scaled to fit the available
 * viewport height, without CSS `zoom` — using `zoom` on these iframes
 * confuses GHL's own embed script (it starts reading/reacting to the
 * iframe's own effective layout) and can make the widget go blank a
 * few seconds after load. `transform: scale` is purely visual and
 * leaves the iframe's internal layout untouched.
 */
export default function ScaledGHLEmbed({
  src,
  iframeId,
  title,
  fallbackHeight,
  reservedSpace,
  minZoom = 0.45,
}: ScaledGHLEmbedProps) {
  const [zoom, setZoom] = useState(1)
  const [zoomReady, setZoomReady] = useState(false)
  const [heightConfirmed, setHeightConfirmed] = useState(false)
  const [naturalHeight, setNaturalHeight] = useState(fallbackHeight)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const ready = zoomReady && heightConfirmed

  useLayoutEffect(() => {
    const calculate = () => {
      const available = window.innerHeight - reservedSpace
      const calculated = Math.min(1, available / naturalHeight)
      setZoom(Math.max(minZoom, calculated))
      setZoomReady(true)
    }
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [naturalHeight, reservedSpace, minZoom])

  // GHL's embed script overwrites the iframe's own inline height once it
  // measures the real content — pick that up so sizing matches reality
  // instead of the fallback guess. Hold the reveal until this fires (or
  // a timeout elapses) so the embed never visibly resizes on screen.
  useLayoutEffect(() => {
    if (!iframeRef.current) return
    const el = iframeRef.current
    const observer = new MutationObserver(() => {
      const match = el.style.height.match(/[\d.]+/)
      if (!match) return
      const measured = parseFloat(match[0])
      if (measured > 100 && Math.abs(measured - naturalHeight) > 1) {
        setNaturalHeight(measured)
        setHeightConfirmed(true)
      }
    })
    observer.observe(el, { attributes: true, attributeFilter: ['style'] })
    const timeout = setTimeout(() => setHeightConfirmed(true), 2500)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [naturalHeight])

  const scaledHeight = naturalHeight * zoom

  return (
    <div
      className="rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-[0_4px_32px_rgba(0,0,0,0.5)]"
      style={{
        height: `${scaledHeight}px`,
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        style={{
          width: `${100 / zoom}%`,
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
        }}
      >
        <iframe
          ref={iframeRef}
          src={src}
          style={{ width: '100%', height: `${naturalHeight}px`, border: 'none', display: 'block' }}
          id={iframeId}
          data-layout-iframe-id={iframeId}
          title={title}
          scrolling="no"
        />
      </div>
    </div>
  )
}
