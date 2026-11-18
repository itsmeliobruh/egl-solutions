'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { MessageSquare, UserPlus } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

const NUMBER = '+18608123596'
const DISPLAY = '(860) 812-3596'

export default function TextClient() {
  const params = useSearchParams()
  const name = (params.get('name') || '').trim() || '[your name]'
  const biz = (params.get('biz') || params.get('business') || '').trim() || '[your business]'
  const message = `Hi EGL! This is ${name} from ${biz}. Saving this number to send you video ideas.`

  // iPhones want "&body=", everything else "?body=".
  const [sep, setSep] = useState('?')
  // Computers (e.g. the GHL "Send Video Ideas" menu link) can't text: show a QR to open this on a phone.
  const [desktop, setDesktop] = useState(false)
  const [pageUrl, setPageUrl] = useState('')
  useEffect(() => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) setSep('&')
    setDesktop(!window.matchMedia('(pointer: coarse)').matches)
    setPageUrl(window.location.href)
  }, [])
  const smsHref = `sms:${NUMBER}${sep}body=${encodeURIComponent(message)}`

  return (
    <section className="bg-void min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-md mx-auto text-center">
        <p className="font-mono text-[10px] text-ember uppercase tracking-[0.22em] mb-3">
          EGL Video Ideas
        </p>
        <h1 className="font-display text-5xl text-bone tracking-wide mb-4">
          SEND US YOUR VIDEO IDEAS
        </h1>
        <p className="font-body text-muted text-sm mb-8">
          Seen a video you love? Text it to us and it goes straight into your content plan.
        </p>

        {desktop && pageUrl && (
          <div className="mb-8 rounded-lg border border-ember/40 p-5">
            <p className="font-mono text-[11px] text-ember uppercase tracking-[0.18em] mb-3">On a computer?</p>
            <div className="inline-block bg-bone p-3 rounded">
              <QRCodeSVG value={pageUrl} size={180} bgColor="#F0EDE8" fgColor="#080808" />
            </div>
            <p className="font-body text-sm text-muted mt-3">Scan this with your phone&apos;s camera to save our number and text us from there.</p>
          </div>
        )}

        <div className="space-y-3 mb-10">
          <a
            href="/egl-references.vcf"
            download="EGL Video Ideas.vcf"
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-ember text-void font-display text-xl tracking-wider py-4"
          >
            <UserPlus size={20} /> 1. SAVE OUR NUMBER
          </a>
          <a
            href={smsHref}
            className="flex items-center justify-center gap-2 w-full rounded-lg border border-ember text-bone font-display text-xl tracking-wider py-4"
          >
            <MessageSquare size={20} /> 2. TEXT US TO GET STARTED
          </a>
          <p className="font-mono text-[11px] text-muted tracking-wider">{DISPLAY}</p>
        </div>

        <ol className="text-left font-body text-sm text-bone space-y-3 border-t border-white/10 pt-6">
          <li><span className="text-ember font-mono mr-2">01</span>See a video you like on Instagram, TikTok, YouTube or Facebook.</li>
          <li><span className="text-ember font-mono mr-2">02</span>Copy the link and text it to {DISPLAY}.</li>
          <li><span className="text-ember font-mono mr-2">03</span>Add a line about what you like about it. That&apos;s it.</li>
        </ol>
        <p className="mt-6 text-left font-body text-sm text-muted border border-ember/30 rounded-lg p-4">
          <span className="text-ember font-mono text-[11px] uppercase tracking-[0.18em] block mb-1">Tip</span>
          Add a quick note in the same text as the link, like &ldquo;love the hook, too long though,&rdquo; and we won&apos;t need to ask.
        </p>
      </div>
    </section>
  )
}
