'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'
import PricingTable from '@/components/shared/PricingTable'

export default function PricingSection() {
  return (
    <section className="bg-ash py-24 px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <SectionLabel label="04 — PRICING" className="mb-3" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider mb-2">
            CHOOSE A PACKAGE THAT SUITS YOUR NEEDS
          </h2>
          <p className="font-body text-muted text-base max-w-xl">
            All plans are month-to-month. No long-term contracts required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <PricingTable />
        </motion.div>
      </div>
    </section>
  )
}
