'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'
import Link from 'next/link'

const counties = [
  { name: 'Hartford County', towns: 'Wethersfield, Hartford, West Hartford, Glastonbury, Newington' },
  { name: 'New Haven County', towns: 'New Haven, Milford, Hamden, West Haven, Naugatuck' },
  { name: 'Fairfield County', towns: 'Bridgeport, Stamford, Norwalk, Danbury, Greenwich' },
  { name: 'Litchfield County', towns: 'Torrington, Waterbury, Watertown, Thomaston' },
  { name: 'Middlesex County', towns: 'Middletown, Cromwell, Portland, East Hampton' },
  { name: 'Tolland County', towns: 'Vernon, Tolland, Ellington, Coventry, Mansfield' },
  { name: 'New London County', towns: 'New London, Norwich, Groton, Montville' },
  { name: 'Western MA', towns: 'Springfield, Chicopee, Westfield, Holyoke' },
]

export default function ServiceAreaMap() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-4 md:px-8" id="service-areas">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <SectionLabel label="05 — WHERE WE SERVE" className="mb-3" />
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wide">
            SERVICE AREAS
          </h2>
          <p className="font-body text-[#AAAAAA] mt-4 max-w-xl text-sm leading-relaxed">
            Based in Wethersfield, CT — but we work with businesses across multiple regions. Fit matters more than zip code.
          </p>
        </motion.div>

        {/* Map + Counties grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-[#2A2A2A] shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            style={{ height: 460 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d370514.4!2d-72.9!3d41.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e655f24f5a5a3d%3A0x6ca2d09e3fc2b78e!2sWethersfield%2C%20CT!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EGL Marketing service area map"
            />
          </motion.div>

          {/* County cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {counties.map((county, i) => (
              <motion.div
                key={county.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
              >
                <p className="font-display text-base text-[#0A0A0A] tracking-wide leading-tight mb-1">
                  {county.name}
                </p>
                <p className="font-body text-[11px] text-[#666] leading-snug">
                  {county.towns}
                </p>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="sm:col-span-2 mt-2">
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[#FF5500] hover:text-[#FF8C00] transition-colors"
              >
                VIEW ALL SERVICE AREAS →
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* "Don't see your area?" CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-16 rounded-2xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FF5500 0%, #CC3300 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center py-14 px-6">
          <h3 className="font-display text-3xl md:text-4xl text-black tracking-wider mb-3">
            Don&apos;t see your area? No problem.
          </h3>
          <p className="font-body text-black/70 text-base mb-8 max-w-xl mx-auto">
            We don&apos;t limit ourselves to specific locations — we work with businesses that are ready to grow. Fit matters more than zip code.
          </p>
          <a
            href="/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding"
            className="inline-block bg-black text-bone font-display text-base px-10 py-4 rounded tracking-widest hover:bg-[#111] transition-colors shadow-lg"
          >
            ⚡ SCHEDULE A CALL ⚡
          </a>
        </div>
      </motion.div>
    </section>
  )
}
