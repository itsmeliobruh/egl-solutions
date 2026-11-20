'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

type Row = { title: string; desc: string; bonus?: boolean }

const BUNDLE: Row[] = [
  { title: 'A monthly shoot at your business', desc: 'One 3-hour shoot, 8 edited videos, ready to post twice a week. Real work, your team, your voice.' },
  { title: 'Your local ad, built and run for you', desc: '3 new ad versions every month. The losers get cut, the winner runs, retargeting stays warm.' },
  { title: 'An AI receptionist, 24/7', desc: 'Answers every DM, text, web chat and missed call in under a minute and books the appointment. Anything tricky comes straight to your phone.' },
  { title: 'Google, handled', desc: 'Your Google profile kept fresh, Local Services Ads managed, a review request after every customer and every review answered.' },
  { title: 'A website that books customers', desc: 'Your site, an ad landing page and a portfolio that grows with every shoot. Unlimited edits.' },
  { title: 'A monthly scoreboard call', desc: "20 minutes: what you spent, how many appointments got booked, how many customers you won, and next month's plan." },
  { title: 'A second shoot day at launch', desc: 'Founding clients only (first 3), in exchange for a short video testimonial.', bonus: true },
  { title: 'Lead reactivation', desc: 'We text and email the customers you already have with a reason to call back. Calls before Google finishes anything.', bonus: true },
]

const LPB_BUILD: Row[] = [
  { title: 'A website that turns visitors into texts', desc: 'Your photos, your services, your towns. Every form fill starts a text conversation on your phone.' },
  { title: 'Your Google profile, fully built', desc: 'Categories, services, hours, photos, questions answered, first posts. Verified and ready to rank.' },
  { title: 'Google Local Services Ads set up', desc: 'The verified Google listing at the very top of search, where your business type qualifies. You only pay Google per lead.' },
  { title: 'Missed-call text-back', desc: "Busy with a customer and can't pick up? We text them back in seconds so they don't call your competitor." },
  { title: 'Automatic review requests', desc: 'After every customer, a text asks for a Google review and reminds them until they leave one.' },
  { title: 'Lead reactivation', desc: 'We reach out to your past customers with a reason to call back, before Google finishes anything.' },
]

const LPB_RUN: Row[] = [
  { title: 'Every review answered', desc: 'Good ones get a thank-you. Bad ones get a real reply from a real person.' },
  { title: 'A fresh Google post every week', desc: 'From your own photos, so your profile never looks dead.' },
  { title: 'Website changes when you need them', desc: 'Prices, hours, photos, services. One change a month on us, and you can edit it yourself anytime.' },
  { title: 'A monthly scoreboard', desc: 'How many calls Google sent you, how many leads came in, and how your reviews stack up against your top 3 competitors.' },
  { title: 'Month to month', desc: 'No contract. Your domain, your photos and your Google profile stay yours.' },
]

const CARDS = [
  { h: 'No contract', body: <><b className="text-bone">Month to month, 30 days&apos; notice.</b> If we&apos;re not earning it, fire us. Most agencies lock you in for a year.</> },
  { h: 'One per trade, per town', body: <>We film every client ourselves, so we take <b className="text-bone">one business per trade in each town.</b> When your spot is taken, it&apos;s taken.</> },
  { h: 'You own everything', body: <>Your domain, your footage, your ad account, your Google profile, your number. <b className="text-bone">Leave and it all goes with you.</b></> },
]

function Stack({ label, rows }: { label: string; rows: Row[] }) {
  return (
    <div className="bg-[#141210] border border-[#2A2622] rounded-[14px] px-5 pt-5 pb-3 md:px-[22px] min-w-0">
      <h3 className="font-mono text-[12px] tracking-[0.12em] uppercase text-inferno mb-2.5 font-medium">{label}</h3>
      {rows.map((r, i) => (
        <div
          key={r.title}
          className={`grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 py-3 ${i ? 'border-t border-[#2A2622]' : ''}`}
        >
          <b className="font-body text-bone font-semibold">
            {r.bonus && <span className="font-mono text-[11px] tracking-[0.1em] text-inferno font-normal">BONUS </span>}
            {r.title}
          </b>
          {r.bonus && (
            <span className="col-start-2 row-start-1 font-mono text-sm text-inferno font-medium whitespace-nowrap">FREE</span>
          )}
          <span className="col-start-1 font-body text-[#A9A197] text-sm leading-[1.45]">{r.desc}</span>
        </div>
      ))}
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="bg-[#0D0D0D] py-16 lg:py-20 px-4 grid-overlay" id="services">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel label="For Connecticut local businesses" className="mb-3" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wide leading-[0.95] max-w-[24ch]">
            Get booked appointments from people who already trust you.
          </h2>
          <p className="font-body text-[#C9C2B8] text-[17px] leading-relaxed mt-4 max-w-[60ch]">
            We film your business, run your local ads, answer every message in under a minute and book the appointment on your calendar. You show up to one 3-hour shoot a month and the appointments we book.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-7"
        >
          <Stack label="Everything in the Market Dominator bundle" rows={BUNDLE} />

          <div className="flex flex-col gap-4 min-w-0">
            <div className="bg-inferno text-void rounded-[14px] p-[22px]">
              <div className="font-mono text-[12px] tracking-[0.12em] uppercase">Your plan</div>
              <div className="font-display text-[40px] leading-none mt-1.5">See if it makes sense for you</div>
              <p className="font-body text-[15px] leading-[1.45] mt-1.5">
                Plans start at $499/month. On your free audit we show you where you&apos;re losing customers on Google, then the exact plan and price for your business. Ad spend goes straight to Meta and Google, never through us.
              </p>
              <a
                href={BOOKING_URL}
                className="block text-center bg-void text-bone font-display text-[26px] tracking-[0.02em] px-4 py-3.5 rounded-[10px] mt-4 hover:bg-[#1A1512] transition-colors"
              >
                Get my free local visibility audit
              </a>
              <p className="font-mono text-[13px] leading-[1.45] mt-2.5">
                <b>This is a no-pressure call.</b> We show you what we found, and if it doesn&apos;t make sense for you, we&apos;ll tell you straight up. You keep the findings either way.
              </p>
            </div>
            {CARDS.map((c) => (
              <div key={c.h} className="bg-[#141210] border border-[#2A2622] rounded-[14px] px-5 py-[18px]">
                <h4 className="font-mono text-[12px] tracking-[0.12em] uppercase text-inferno mb-1.5 font-medium">{c.h}</h4>
                <p className="font-body text-[#C9C2B8] text-[15px] leading-normal">{c.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <details className="group mt-7 border border-dashed border-[#3A332C] rounded-xl text-[#A9A197] text-[15px]">
          <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer px-5 py-4 flex flex-wrap gap-x-[18px] gap-y-2.5 items-center justify-between focus-visible:outline focus-visible:outline-2 focus-visible:outline-inferno focus-visible:outline-offset-[3px] rounded-xl">
            <span className="font-body">
              <b className="text-bone">Just getting started?</b> The Local Presence Builder gets you found on Google, collects reviews automatically and texts back every missed call. Plans start at $499/month.
            </span>
            <span className="font-mono text-[12px] tracking-[0.1em] uppercase text-void bg-inferno px-3.5 py-2 rounded-lg whitespace-nowrap">
              Learn more<span className="hidden group-open:inline"> ×</span>
            </span>
          </summary>
          <div className="px-5 pt-1 pb-[22px] border-t border-[#2A2622]">
            <h3 className="font-display font-normal text-[clamp(30px,4.5vw,44px)] leading-none text-bone mt-[18px] mb-1.5 tracking-[0.01em]">
              The Local Presence Builder
            </h3>
            <p className="font-body text-[#C9C2B8] text-base leading-relaxed mt-1.5 max-w-[60ch]">
              For businesses just getting started. We set up everything that gets you found on Google and stops the leads you already get from slipping away. No shoot, no site visit. You fill out one form and we build it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <Stack label="We build it once" rows={LPB_BUILD} />
              <Stack label="We keep it running" rows={LPB_RUN} />
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 items-center mt-5">
              <a
                href={BOOKING_URL}
                className="block text-center bg-inferno text-void font-display text-[26px] tracking-[0.02em] px-[18px] py-3 rounded-[10px] hover:bg-scorch transition-colors"
              >
                Get my free local visibility audit
              </a>
              <p className="font-body text-[#C9C2B8] text-sm max-w-[46ch]">
                Plans start at $499/month. Ready to grow? Upgrade to the Market Dominator anytime and keep everything you already have.
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  )
}
