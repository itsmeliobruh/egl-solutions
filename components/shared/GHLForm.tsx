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
      const reserved = 240
      const available = window.innerHeight - reserved
      const calculated = Math.min(1, available / FORM_NATURAL_HEIGHT)
      setZoom(Math.max(0.55, calculated))
      setReady(true)
    }

    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [fitToViewport])

  return (
    <div
      className="w-full"
      id="contact-form"
      style={{
        // Reserve the correct layout height immediately so the left column doesn't shift
        height: fitToViewport ? `${FORM_NATURAL_HEIGHT * zoom}px` : undefined,
        transition: 'height 0s',
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL"
        style={{
          width: '100%',
          height: `${FORM_NATURAL_HEIGHT}px`,
          border: 'none',
          borderRadius: '20px',
          display: 'block',
          zoom: fitToViewport ? zoom : 1,
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.25s ease',
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
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
