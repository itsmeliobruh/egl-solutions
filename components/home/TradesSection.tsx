'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/shared/SectionLabel'

const trades = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Basement Finishing',
  'Home Additions',
  'Whole-Home Renovation',
  'Deck & Outdoor Living',
  'Flooring & Interior Finishes',
  'Siding & Exterior',
  'Window & Door Replacement',
  'Custom Closets & Built-Ins',
  'Garage Conversions',
  'ADA / Aging-in-Place Remodels',
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
          <SectionLabel label="03 — REMODELING SPECIALTIES" className="mb-3 justify-center" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider">
            THE REMODELING SPECIALTIES WE SERVE
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
              className="bg-[#F5F0E8] border border-[#E0D8CC] rounded px-4 py-2 font-mono text-xs text-[#333] uppercase tracking-[0.12em] hover:border-[#FF5500] hover:text-[#FF5500] transition-all cursor-default"
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
          <p className="font-body text-[#CCCCCC] mb-4">
            If you&apos;re a home remodeling contractor in Connecticut, we built this for you.
            Book a free 15-minute Local Visibility Audit and see where you&apos;re losing jobs.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#FF5500] text-white font-display text-sm px-8 py-3 rounded tracking-widest hover:bg-[#CC3300] transition-colors shadow-[0_4px_24px_rgba(255,85,0,0.35)]"
          >
            BOOK YOUR FREE AUDIT
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
