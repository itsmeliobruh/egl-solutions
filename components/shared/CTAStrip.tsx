import Link from 'next/link'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

interface CTAStripProps {
  headline?: string
  subtext?: string
}

export default function CTAStrip({
  headline = 'READY TO GROW YOUR BUSINESS?',
  subtext = 'Schedule a free 15-minute intro call. No obligation, no contracts.',
}: CTAStripProps) {
  return (
    <section
      className="bg-inferno py-16 px-4"
      style={{ background: 'linear-gradient(135deg, #FF5500 0%, #CC3300 100%)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl text-black mb-3 tracking-wider">
          {headline}
        </h2>
        <p className="font-body text-black/70 mb-8 text-lg">{subtext}</p>
        <a
          href={BOOKING_URL}
          className="inline-block bg-black text-bone font-display text-lg px-10 py-4 rounded tracking-widest hover:bg-void transition-colors shadow-lg"
        >
          ⚡ SCHEDULE A CALL ⚡
        </a>
      </div>
    </section>
  )
}
