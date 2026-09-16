'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'

const pains = [
  {
    emoji: '🔍',
    heading: "THEY CAN'T FIND YOU",
    body: 'Homeowners Google "kitchen remodeler in Hartford" and your competitor shows up first — even though your work is better. You\'re invisible where it counts.',
  },
  {
    emoji: '🤷',
    heading: "THEY DON'T TRUST YOU YET",
    body: 'You have five Google reviews and an outdated website with no before-and-afters. The contractor down the street has 80 reviews and a portfolio that sells itself.',
  },
  {
    emoji: '🚫',
    heading: 'LEADS FALL THROUGH THE CRACKS',
    body: "Someone calls while you're on a job site. You miss it. They call someone else. You never had a system to catch and follow up with leads automatically.",
  },
  {
    emoji: '🤔',
    heading: "YOU DON'T KNOW WHAT'S WORKING",
    body: "You've tried Facebook ads, a guy who \"does SEO,\" and a mailer. Something brought in that last job, but you have no idea what. So you keep spending money blind.",
  },
]

export default function PainSection() {
  return (
    <section className="bg-[#111] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <SectionLabel label="SOUND FAMILIAR?" className="mb-4" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider leading-tight max-w-3xl">
            WHY LOCAL BUSINESSES LOSE CUSTOMERS THEY SHOULD BE WINNING
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#1A1512] border border-[#2A2320] rounded-xl p-7 relative overflow-hidden"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
                aria-hidden="true"
              />
              <div className="text-3xl mb-4">{pain.emoji}</div>
              <h3 className="font-display text-xl text-bone tracking-wide mb-3 leading-tight">
                {pain.heading}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">{pain.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
