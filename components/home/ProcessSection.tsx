'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'
import ProcessSteps from '@/components/shared/ProcessSteps'
import type { ProcessStepData } from '@/lib/payload/queries'

const BOOKING_URL = '/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding'

export default function ProcessSection({ steps }: { steps?: ProcessStepData[] | null }) {
  return (
    <section className="bg-[#0D0D0D] py-24 px-4" id="process">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <SectionLabel label="05 — HOW IT WORKS" className="mb-3 justify-center" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider">
            OUR PROCESS IS SIMPLE
          </h2>
        </motion.div>

        <ProcessSteps steps={steps} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={BOOKING_URL}
            className="inline-block bg-inferno text-black font-display text-xl px-10 py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
          >
            ⚡ SCHEDULE A CALL ⚡
          </a>
        </motion.div>
      </div>
    </section>
  )
}
