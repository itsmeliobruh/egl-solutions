'use client'

import Script from 'next/script'

export default function GHLForm() {
  return (
    <div className="w-full" id="contact-form">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/wBCLWyveluv1QqGnAKzL"
        style={{
          width: '100%',
          height: '760px',
          border: 'none',
          borderRadius: '20px',
          display: 'block',
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
        data-height="760"
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
