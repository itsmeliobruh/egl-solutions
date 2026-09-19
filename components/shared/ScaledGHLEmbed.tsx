'use client'

import { useState, useLayoutEffect, useRef } from 'react'

interface ScaledGHLEmbedProps {
  src: string
  /** Omit for widgets (e.g. calendars) where GHL assigns its own id */
  iframeId?: string
  title: string
  /** Best-guess content height (px) before GHL's script reports the real one */
  fallbackHeight: number
  /** Vertical px reserved elsewhere on screen (navbar, headings, padding, footer content) — ignored when scaleToFit is false */
  reservedSpace?: number
  /** Floor for how small the embed is allowed to scale down to */
  minZoom?: number
  /**
   * Default (true): shrink the embed to fit the visible viewport so the
   * whole thing is reachable with no scrolling (used for /book, /schedule
   * — single-screen funnel steps). Set false for embeds on a normal,
   * scrollable content page — it renders at natural size (zoom 1) and
   * the page just scrolls to it like any other section.
   */
  scaleToFit?: boolean
  /**
   * GHL widgets (forms *and* calendars) default to a trigger-based (e.g.
   * exit-intent popup) behavior that stays hidden until manually
   * activated — which never happens on a plain inline embed, leaving
   * GHL's script hiding the iframe off-screen indefinitely (opacity:0,
   * left:-9999px, `data-initial-iframe-hidden="true"`). These attributes
   * tell it to render inline and show immediately instead. Leave true
   * unless a specific embed is confirmed not to need it.
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
  reservedSpace = 0,
  minZoom = 0.45,
  alwaysShow = true,
  scaleToFit = true,
}: ScaledGHLEmbedProps) {
  const [zoom, setZoom] = useState(1)
  const [zoomReady, setZoomReady] = useState(false)
  const [heightConfirmed, setHeightConfirmed] = useState(false)
  const [naturalHeight, setNaturalHeight] = useState(fallbackHeight)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  // Freezes the zoom scale once the embed has been shown, so a *later*
  // height increase (e.g. a calendar's confirmation form appearing after
  // a time slot is picked) makes the card grow taller — the page scrolls
  // to reach it — instead of re-shrinking everything to keep re-fitting
  // the original viewport slot.
  const zoomFrozenRef = useRef(false)
  const ready = zoomReady && heightConfirmed

  useLayoutEffect(() => {
    const calculate = () => {
      if (zoomFrozenRef.current) return
      // Embeds on a normal scrollable page render at natural size —
      // same reasoning as the mobile case below, just opted in explicitly.
      if (!scaleToFit) {
        setZoom(1)
        setZoomReady(true)
        return
      }
      // On mobile, don't shrink the embed to fit one screen — that makes
      // everything tiny and hard to tap. Render it at natural size and
      // let the page scroll normally, same as GHL's own mobile layout.
      if (window.innerWidth < 768) {
        setZoom(1)
        setZoomReady(true)
        return
      }
      const available = window.innerHeight - reservedSpace
      const calculated = Math.min(1, available / naturalHeight)
      // Round to 3 decimal places — an arbitrarily precise scale factor
      // (e.g. 0.506864) can land on a fractional sub-pixel boundary that
      // some GPUs render with a faint seam along the transformed edge.
      const rounded = Math.round(Math.max(minZoom, calculated) * 1000) / 1000
      setZoom(rounded)
      setZoomReady(true)
      if (heightConfirmed) zoomFrozenRef.current = true
    }
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [naturalHeight, reservedSpace, minZoom, heightConfirmed, scaleToFit])

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
  //
  // GHL's script keeps re-measuring on an ongoing basis (not just once
  // at load) and each small correction is a few pixels of noise — acting
  // on every one of those reads as the card jittering/bouncing. But some
  // height changes are real: e.g. a calendar widget growing taller once
  // a time slot is picked, to show the booking confirmation form — and
  // clipping that permanently would hide it with no way to reach it.
  // So: ignore small deltas always (noise), but still apply large ones
  // (a genuine view change) even after the initial reveal.
  useLayoutEffect(() => {
    if (!iframeRef.current) return
    const el = iframeRef.current
    const enforceOverflow = () => {
      if (el.style.overflow !== 'hidden') el.style.overflow = 'hidden'
      // GHL's script also flips the HTML `scrolling` attribute back to
      // "yes" on every re-measure, which some browsers still honor even
      // with the CSS overflow above forced to hidden — giving the form
      // its own visible internal scrollbar. Force it back too.
      if (el.getAttribute('scrolling') !== 'no') el.setAttribute('scrolling', 'no')
    }
    let debounceTimer: ReturnType<typeof setTimeout>
    const observer = new MutationObserver(() => {
      enforceOverflow()
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        const match = el.style.height.match(/[\d.]+/)
        if (!match) return
        const measured = parseFloat(match[0])
        if (measured <= 100) return
        // Before the first reveal, apply any real reading right away.
        // After that, only react to a substantial change — a genuine
        // new view, not measurement noise.
        const threshold = heightConfirmed ? 60 : 4
        if (Math.abs(measured - naturalHeight) > threshold) {
          setNaturalHeight(measured)
          setHeightConfirmed(true)
        }
      }, 250)
    })
    observer.observe(el, { attributes: true, attributeFilter: ['style'] })
    enforceOverflow()
    const timeout = setTimeout(() => setHeightConfirmed(true), 2500)
    return () => {
      observer.disconnect()
      clearTimeout(debounceTimer)
      clearTimeout(timeout)
    }
  }, [naturalHeight, heightConfirmed])

  const scaledHeight = naturalHeight * zoom
  const formId = src.split('?')[0].split('/').filter(Boolean).pop()

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        height: `${scaledHeight}px`,
        opacity: ready ? 1 : 0,
        // GHL can report a *later* height update after the card is
        // already revealed (e.g. the calendar's internal content
        // changes size as a date is picked or time slots load). Without
        // a height transition that resize snaps instantly, which reads
        // as the whole card jumping/bouncing.
        transition: 'opacity 0.3s ease, height 0.3s ease',
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
          allow="payment"
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
