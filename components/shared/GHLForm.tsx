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
      // Navbar (80px) + hero top padding (80px) + hero bottom padding (16px) + small buffer (8px)
      const reserved = 184
      const available = window.innerHeight - reserved
      const calculated = Math.min(1, available / FORM_NATURAL_HEIGHT)
      setZoom(Math.max(0.65, calculated))
    }

    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [fitToViewport])

  return (
    <div className="w-full" id="contact-form">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL"
        style={{
          width: '100%',
          height: `${FORM_NATURAL_HEIGHT}px`,
          border: 'none',
          borderRadius: '20px',
          display: 'block',
          // CSS zoom shrinks both visual size AND layout footprint — no clipping wrapper needed
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
        data-height={FORM_NATURAL_HEIGHT}
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
