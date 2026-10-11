'use client'

import { useEffect, useState } from 'react'
import { CalendarCheck } from 'lucide-react'

// The calendar's redirect URL passes appt_date, appt_time and reschedule.
// `reschedule` must be the LAST param in that URL: GHL inserts the link
// unencoded, so everything after "reschedule=" is the link itself.
const ALLOWED_HOSTS = ['leadconnectorhq.com', 'msgsndr.com', 'eglmarketing.co']

function safeLink(raw: string | null): string | null {
  if (!raw) return null
  try {
    const url = new URL(raw)
    if (url.protocol !== 'https:') return null
    const ok = ALLOWED_HOSTS.some((h) => url.hostname === h || url.hostname.endsWith(`.${h}`))
    return ok ? url.toString() : null
  } catch {
    return null
  }
}

export default function AppointmentDetails() {
  const [date, setDate] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)
  const [reschedule, setReschedule] = useState<string | null>(null)

  useEffect(() => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    setDate(params.get('appt_date'))
    setTime(params.get('appt_time'))
    const i = search.indexOf('reschedule=')
    if (i !== -1) {
      const raw = search.slice(i + 'reschedule='.length)
      let decoded = raw
      try { decoded = decodeURIComponent(raw) } catch {}
      setReschedule(safeLink(decoded))
    }
  }, [])

  if (!date && !time) {
    return (
      <p className="font-body text-sm text-[#888] mb-8 md:mb-12">
        Need a different time? Use the reschedule link in your confirmation email.
      </p>
    )
  }

  return (
    <div className="rounded-2xl border border-[#FF5500]/30 bg-[#FF5500]/[0.06] p-5 md:p-6 mb-8 md:mb-12 text-left flex flex-col sm:flex-row sm:items-center gap-4">
      <CalendarCheck size={28} className="text-[#FF5500] flex-shrink-0" />
      <div className="flex-1">
        <p className="font-mono text-[10px] text-[#FF5500] uppercase tracking-[0.2em] mb-1">Your audit</p>
        <p className="font-display text-2xl text-white tracking-wide leading-tight">
          {date}
          {date && time ? ' at ' : ''}
          {time}
        </p>
      </div>
      {reschedule ? (
        <a
          href={reschedule}
          className="inline-flex items-center justify-center border border-[#3A3320] text-bone font-display text-sm tracking-widest px-5 py-2.5 rounded hover:text-inferno hover:border-inferno transition-colors whitespace-nowrap"
        >
          NEED A DIFFERENT TIME?
        </a>
      ) : (
        <p className="font-body text-xs text-[#888] sm:max-w-[180px]">
          Need a different time? Use the reschedule link in your confirmation email.
        </p>
      )}
    </div>
  )
}
