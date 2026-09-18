'use client'

import Script from 'next/script'
import { useState, useLayoutEffect, useRef } from 'react'

// Fallback guess used only until the GHL embed script reports the form's
// real content height (it overwrites the iframe's inline height itself —
// this used to be a hardcoded 1060 that drifted from the real ~939,
// leaving the wrapper sized for content taller than what actually renders).
const FORM_NATURAL_HEIGHT_FALLBACK = 1060

interface GHLFormProps {
  fitToViewport?: boolean
}

export default function GHLForm({ fitToViewport = false }: GHLFormProps) {
  const [zoom, setZoom] = useState(1)
  const [zoomReady, setZoomReady] = useState(!fitToViewport)
  // Held back until GHL's script reports the form's real height (or a
  // timeout elapses) — reveals the form only once, already at its final
  // size, instead of showing it at the fallback size and visibly resizing.
  const [heightConfirmed, setHeightConfirmed] = useState(!fitToViewport)
  const [naturalHeight, setNaturalHeight] = useState(FORM_NATURAL_HEIGHT_FALLBACK)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const ready = zoomReady && heightConfirmed
  // GHL's embed script expects this exact id to find and resize the
  // iframe (it appends its own "___1"/"___2" suffix internally when it
  // finds more than one on the page, to tell our two instances apart).
  // A custom id here makes it unable to find the iframe at all, so it
  // never fires its resize — that's what caused the iframe to get stuck.
  const iframeId = 'inline-wBCLWyveluv1QqGnAKzL'

  useLayoutEffect(() => {
    if (!fitToViewport) return

    const calculate = () => {
      // Navbar (80) + pt-28 (112) + pb-12 (48) + stats-bar area (155) + form top padding (40) + buffer (8)
      const reserved = 443
      const available = window.innerHeight - reserved
      const calculated = Math.min(1, available / naturalHeight)
      setZoom(Math.max(0.45, calculated))
      setZoomReady(true)
    }

    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [fitToViewport, naturalHeight])

  // GHL's embed script overwrites the iframe's own inline height once it
  // measures the real content — pick that up so our wrapper matches it
  // instead of the fallback guess. Don't reveal the form until this
  // fires (or a timeout elapses), so it never visibly resizes on screen.
  useLayoutEffect(() => {
    if (!fitToViewport || !iframeRef.current) return
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
    // Safety net: reveal anyway after 2.5s in case GHL's script is
    // blocked or slow, so the form doesn't stay hidden indefinitely.
    const timeout = setTimeout(() => setHeightConfirmed(true), 2500)
    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [fitToViewport, naturalHeight])

  const scaledHeight = naturalHeight * zoom

  return (
    <div
      className="w-full"
      id={fitToViewport ? undefined : 'contact-form'}
      style={{ height: fitToViewport ? `${scaledHeight}px` : undefined }}
    >
      {/* Liquid glass container */}
      <div
        style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          // Deep shadow + orange glow — tight, low blur radius so the
          // glow hugs the card evenly on all four sides instead of a
          // large 80px blur that reads unevenly against the dark bg
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 0 10px rgba(0, 0, 0, 0.35),
            0 0 24px rgba(0, 0, 0, 0.4),
            0 0 24px rgba(255, 85, 0, 0.10),
            0 0 0 1px rgba(255, 85, 0, 0.07) inset
          `,
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {/* Specular highlight — top-left shine like glass */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Top edge highlight */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        <iframe
          ref={iframeRef}
          src="https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL"
          style={{
            width: '100%',
            height: `${naturalHeight}px`,
            border: 'none',
            borderRadius: 0,
            display: 'block',
            zoom: fitToViewport ? zoom : 1,
          }}
          id={iframeId}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Main: Website Form"
          data-height="1060"
          data-layout-iframe-id={iframeId}
          data-form-id="wBCLWyveluv1QqGnAKzL"
          title="Main: Website Form"
          scrolling="no"
        />
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
