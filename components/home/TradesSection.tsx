'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/shared/SectionLabel'

const trades = [
  'General Contractors',
  'Home Builders',
  'Remodeling',
  'Landscapers',
  'Pressure Washing',
  'Flooring / Carpet Cleaning',
  'Tree Service',
  'Pest Control',
  'Roofing',
  'Plumbing',
  'HVAC',
  'Electricians',
  'Painters',
  'Car Cleaning / Detailing',
  'Pool Construction',
]

export default function TradesSection() {
  return (
    <section className="bg-void py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <SectionLabel label="03 — WHO WE WORK WITH" className="mb-3 justify-center" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider">
            SERVING ALL THESE TRADES AND MORE
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {trades.map((trade, i) => (
            <motion.div
              key={trade}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="border border-steel rounded px-4 py-2 font-mono text-xs text-muted uppercase tracking-[0.12em] hover:border-inferno hover:text-inferno transition-all cursor-default"
            >
              {trade}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <p className="font-body text-muted mb-4">
            Don&apos;t see your trade? No problem — if you run a local service business, we can build the
            marketing system to grow it.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-inferno text-inferno font-display text-sm px-8 py-3 rounded tracking-widest hover:bg-inferno/10 transition-colors"
          >
            LET&apos;S TALK
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
