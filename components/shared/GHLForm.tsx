'use client'

import Script from 'next/script'
import { useState, useEffect } from 'react'

const FORM_NATURAL_HEIGHT = 900

interface GHLFormProps {
  fitToViewport?: boolean
}

export default function GHLForm({ fitToViewport = false }: GHLFormProps) {
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    if (!fitToViewport) return

    const calculate = () => {
      // Navbar (80px) + hero top padding (80px) + hero bottom padding (16px)
      const reserved = 176
      const available = window.innerHeight - reserved
      const calculated = Math.min(1, available / FORM_NATURAL_HEIGHT)
      // Never go below 0.65 so the form stays readable
      setZoom(Math.max(0.65, calculated))
    }

    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [fitToViewport])

  const wrapperStyle = fitToViewport
    ? {
        width: '100%',
        height: `${FORM_NATURAL_HEIGHT * zoom}px`,
        overflow: 'hidden' as const,
        borderRadius: '20px',
      }
    : { width: '100%' }

  const iframeStyle = fitToViewport
    ? {
        width: `${100 / zoom}%`,
        height: `${FORM_NATURAL_HEIGHT}px`,
        border: 'none',
        display: 'block' as const,
        transform: `scale(${zoom})`,
        transformOrigin: 'top left',
      }
    : {
        width: '100%',
        height: `${FORM_NATURAL_HEIGHT}px`,
        border: 'none',
        borderRadius: '20px',
        display: 'block' as const,
      }

  return (
    <div className="w-full" id="contact-form" style={wrapperStyle}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL"
        style={iframeStyle}
        id="inline-wBCLWyveluv1QqGnAKzL"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Main: Website Form"
        data-height={FORM_NATURAL_HEIGHT}
        data-layout-iframe-id="inline-wBCLWyveluv1QqGnAKzL"
        data-form-id="wBCLWyveluv1QqGnAKzL"
        title="Main: Website Form"
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
