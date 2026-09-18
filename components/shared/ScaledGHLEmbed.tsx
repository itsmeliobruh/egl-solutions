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
  /**
   * Form widgets default to a trigger-based (e.g. exit-intent popup)
   * behavior that stays hidden until manually activated — which never
   * happens on a plain inline embed, leaving GHL's script hiding the
   * iframe off-screen indefinitely (opacity:0, left:-9999px). These
   * attributes tell it to render inline and show immediately instead.
   * Leave true for form widgets; calendars don't use this trigger model.
   */
  alwaysShow?: boolean
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
  alwaysShow = true,
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
      // Round to 3 decimal places — an arbitrarily precise scale factor
      // (e.g. 0.506864) can land on a fractional sub-pixel boundary that
      // some GPUs render with a faint seam along the transformed edge.
      const rounded = Math.round(Math.max(minZoom, calculated) * 1000) / 1000
      setZoom(rounded)
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
  //
  // GHL's script also sets `overflow: auto` on the iframe itself. When
  // that iframe sits inside our `transform: scale()` wrapper, its native
  // scrollbar chrome doesn't get scaled the way painted content does —
  // it can show up as a faint rectangle at the iframe's original,
  // unscaled bounds. Force it back to `hidden` every time GHL's script
  // touches the style, so a scrollbar (and that ghost outline) can't
  // appear regardless of any height mismatch.
  useLayoutEffect(() => {
    if (!iframeRef.current) return
    const el = iframeRef.current
    const enforceOverflow = () => {
      if (el.style.overflow !== 'hidden') el.style.overflow = 'hidden'
    }
    const observer = new MutationObserver(() => {
      enforceOverflow()
      const match = el.style.height.match(/[\d.]+/)
      if (!match) return
      const measured = parseFloat(match[0])
      if (measured > 100 && Math.abs(measured - naturalHeight) > 1) {
        setNaturalHeight(measured)
        setHeightConfirmed(true)
      }
    })
    observer.observe(el, { attributes: true, attributeFilter: ['style'] })
    enforceOverflow()
    const timeout = setTimeout(() => setHeightConfirmed(true), 2500)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [naturalHeight])

  const scaledHeight = naturalHeight * zoom
  const formId = src.split('?')[0].split('/').filter(Boolean).pop()

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        height: `${scaledHeight}px`,
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.3s ease',
        // Chromium has a known bug where `overflow: hidden` + `border-
        // radius` on a parent doesn't fully clip a `transform`-scaled
        // child right at the rounded corners specifically — the child's
        // rectangular edge peeks through in a "double corner" artifact.
        // `contain: paint` forces the browser to properly contain all
        // painting (including transformed descendants) within this
        // element's own rounded bounds.
        contain: 'paint',
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
          {...(alwaysShow
            ? {
                'data-layout': "{'id':'INLINE'}",
                'data-trigger-type': 'alwaysShow',
                'data-trigger-value': '',
                'data-activation-type': 'alwaysActivated',
                'data-activation-value': '',
                'data-deactivation-type': 'neverDeactivate',
                'data-deactivation-value': '',
                'data-form-id': formId,
              }
            : {})}
          title={title}
          scrolling="no"
        />
      </div>
    </div>
  )
}
