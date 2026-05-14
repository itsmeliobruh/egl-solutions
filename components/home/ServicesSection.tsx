'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'
import ServiceCard from '@/components/shared/ServiceCard'

const systemServices = [
  {
    slug: 'website-and-systems',
    name: 'Website + Systems',
    emoji: '🚀',
    description: 'High-converting website + full backend automation. Your 24/7 sales engine.',
    price: '$297/mo',
    number: '01',
  },
  {
    slug: 'lead-generation',
    name: 'Lead Generation',
    emoji: '🚀',
    description: 'Google, Facebook ads, LSA, tracking. Consistent leads on autopilot.',
    price: '$1,499/mo',
    originalPrice: '$1,999/mo',
    badge: 'MOST POPULAR',
    number: '02',
  },
  {
    slug: 'all-in-one-system',
    name: 'All-In-One System',
    emoji: '🚀',
    description: 'The complete growth powerhouse. Everything combined.',
    price: '$2,499/mo',
    badge: 'MOST VALUE',
    number: '03',
  },
]

const contentServices = [
  {
    slug: 'content-foundation',
    name: 'Content Foundation',
    emoji: '📸',
    description: '1 filming day/mo, 10–12 short-form videos, posting guidance.',
    price: '$997/mo',
    number: '01',
  },
  {
    slug: 'content-growth',
    name: 'Content Growth',
    emoji: '📸',
    description: '2 filming days/mo, 15–25 videos, full strategy + scripting.',
    price: '$2,499/mo',
    originalPrice: '$3,299/mo',
    badge: 'MOST POPULAR',
    number: '02',
  },
  {
    slug: 'content-authority',
    name: 'Content Authority',
    emoji: '📸',
    description: '3–4 filming days/mo, 30–40 videos, dominate locally.',
    price: '$4,997/mo',
    badge: 'MOST RESULTS',
    number: '03',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-4 grid-overlay" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <SectionLabel label="02 — WHAT WE DO" className="mb-3" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider">OUR SERVICES</h2>
        </motion.div>

        {/* Marketing Systems */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">⚡</span>
            <h3 className="font-display text-2xl text-bone tracking-wide">MARKETING SYSTEMS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemServices.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Creation */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">📸</span>
            <h3 className="font-display text-2xl text-bone tracking-wide">CONTENT CREATION</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentServices.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
