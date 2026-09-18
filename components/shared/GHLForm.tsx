'use client'

import Script from 'next/script'
import { useState, useLayoutEffect } from 'react'

const FORM_NATURAL_HEIGHT = 1060

interface GHLFormProps {
  fitToViewport?: boolean
}

export default function GHLForm({ fitToViewport = false }: GHLFormProps) {
  const [zoom, setZoom] = useState(1)
  const [ready, setReady] = useState(!fitToViewport)

  useLayoutEffect(() => {
    if (!fitToViewport) return

    const calculate = () => {
      // Navbar (80px) + pt-20 (80px) + pb-8 (32px) + buffer (8px)
      const reserved = 200
      const available = window.innerHeight - reserved
      const calculated = Math.min(1, available / FORM_NATURAL_HEIGHT)
      setZoom(Math.max(0.55, calculated))
      setReady(true)
    }

    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [fitToViewport])

  const scaledHeight = FORM_NATURAL_HEIGHT * zoom

  return (
    <div
      className="w-full"
      id="contact-form"
      style={{ height: fitToViewport ? `${scaledHeight}px` : undefined }}
    >
      {/* Liquid glass container */}
      <div
        style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          // Deep shadow + orange glow
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 8px 16px rgba(0, 0, 0, 0.4),
            0 32px 80px rgba(0, 0, 0, 0.55),
            0 0 80px rgba(255, 85, 0, 0.08),
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
          src="https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL"
          style={{
            width: '100%',
            height: `${FORM_NATURAL_HEIGHT}px`,
            border: 'none',
            borderRadius: 0,
            display: 'block',
            zoom: fitToViewport ? zoom : 1,
          }}
          id="inline-wBCLWyveluv1QqGnAKzL"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Main: Website Form"
          data-height="1060"
          data-layout-iframe-id="inline-wBCLWyveluv1QqGnAKzL"
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
