'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'
import ServiceCard from '@/components/shared/ServiceCard'
import { BOOKING_LINKS } from '@/lib/bookingLinks'

const systemServices = [
  {
    slug: 'website-and-systems',
    name: 'Growth Foundation',
    emoji: '🚀',
    description: 'Build the system before you buy more traffic. Website, CRM, follow-up, reviews, and tracking.',
    price: '$297/mo',
    badge: 'MOST POPULAR',
    number: '01',
  },
  {
    slug: 'lead-generation',
    name: 'Lead Flow System',
    emoji: '🚀',
    description: 'Generate, capture, and follow up with new leads every month. Ads, tracking, reporting.',
    price: '$1,500/mo',
    badge: 'MOST VALUE',
    number: '02',
  },
  {
    slug: 'all-in-one-system',
    name: 'Revenue Engine',
    emoji: '🚀',
    description: 'The complete done-for-you growth system. Website, CRM, ads, AI, content, and reporting.',
    price: '$2,997/mo',
    badge: 'MOST RESULTS',
    number: '03',
  },
]

const contentServices = [
  {
    slug: 'content-foundation',
    name: 'Content Starter',
    emoji: '📸',
    description: '1 filming day/mo, 8–12 short-form videos, captions, and posting guidance.',
    price: '$997/mo',
    number: '01',
  },
  {
    slug: 'content-growth',
    name: 'Content Growth',
    emoji: '📸',
    description: '2 filming days/mo, 15–20 videos, full strategy, scripting, and posting support.',
    price: '$1,997/mo',
    number: '02',
  },
  {
    slug: 'content-authority',
    name: 'Local Authority Content',
    emoji: '📸',
    description: '3 filming days max, 25–30 videos, founder content, testimonials, and campaign themes.',
    price: '$3,997/mo',
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
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider">OUR GROWTH SYSTEMS</h2>
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
                className="h-full"
              >
                <ServiceCard {...s} bookingHref={BOOKING_LINKS[s.slug]} />
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
                className="h-full"
              >
                <ServiceCard {...s} bookingHref={BOOKING_LINKS[s.slug]} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
