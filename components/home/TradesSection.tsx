'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/shared/SectionLabel'

const homeGroups = [
  {
    label: 'Build & Remodel',
    trades: [
      'General Contractors', 'Home Builders', 'Remodeling', 'Roofing',
      'Concrete / Driveways', 'Fencing', 'Pool Construction',
      'Solar Installation', 'Garage Doors',
    ],
  },
  {
    label: 'Mechanical',
    trades: ['HVAC', 'Plumbing', 'Electricians'],
  },
  {
    label: 'Exterior & Property',
    trades: [
      'Landscapers', 'Tree Service', 'Pressure Washing', 'Gutters', 'Painters',
      'Pest Control', 'Cleaning Services', 'Junk Removal', 'Flooring / Carpet Cleaning',
    ],
  },
]

const otherTrades = [
  'Dentists', 'Chiropractors', 'Med Spas', 'Day Spas', 'Personal Trainers', 'Physical Therapy',
  'Hair Salons', 'Barbershops', 'Nail Salons', 'Lash Studios', 'Tattoo Studios',
  'Car Cleaning / Detailing', 'Auto Repair', 'Window Tinting',
  'Restaurants', 'Catering', 'Food Trucks', 'Bakeries',
  'Dog Groomers', 'Pet Services', 'Moving Companies', 'Photographers', 'Event Planners', 'Tutors',
  'Real Estate Agents', 'Insurance Agents', 'Financial Advisors', 'Attorneys',
]

export default function TradesSection() {
  return (
    <section className="bg-void py-16 lg:py-20 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <SectionLabel label="WHO WE WORK WITH" className="mb-3 justify-center" />
          <h2 className="font-display text-5xl md:text-6xl text-bone tracking-wider">
            BUILT FOR CONNECTICUT HOME SERVICE CONTRACTORS
          </h2>
        </motion.div>

        {/* Home services: the focus */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 border border-[#2A2320] rounded-xl overflow-hidden mb-6"
        >
          {homeGroups.map((group, gi) => (
            <div
              key={group.label}
              className={`p-6 lg:p-7 ${
                gi < homeGroups.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#2A2320]' : ''
              }`}
            >
              <span className="font-mono text-[9px] text-inferno uppercase tracking-[0.2em] pb-2.5 mb-3 border-b border-[#2A2320] block">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.trades.map((trade) => (
                  <span
                    key={trade}
                    className="bg-[#1C1612] border border-[#2A2320] rounded text-[#C8C0B0] font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1.5 leading-none hover:border-[#FF5500] hover:text-[#FF5500] transition-colors cursor-default whitespace-nowrap"
                  >
                    {trade}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Other local businesses: secondary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-6 px-1"
        >
          <span className="font-mono text-[9px] text-[#777] uppercase tracking-[0.2em] mb-3 block">
            Other local businesses we work with
          </span>
          <div className="flex flex-wrap gap-1.5">
            {otherTrades.map((trade) => (
              <span
                key={trade}
                className="border border-[#221D19] rounded text-[#7A7266] font-mono text-[9px] uppercase tracking-[0.1em] px-2 py-1 leading-none whitespace-nowrap"
              >
                {trade}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#2A2320] rounded-lg px-6 py-5 bg-white/[0.01]"
        >
          <p className="font-body text-sm text-[#999] leading-relaxed">
            <span className="text-bone font-medium">Don&apos;t see your trade?</span>{' '}
            If you run a local service business, we can build the marketing system to grow it.
          </p>
          <Link
            href="/book?services_interested=✅+FREE+Consultation+-+Need+Help+Deciding"
            className="flex-shrink-0 inline-block bg-[#FF5500] text-white font-display text-sm px-7 py-2.5 rounded tracking-widest hover:bg-[#CC3300] transition-colors shadow-[0_4px_20px_rgba(255,85,0,0.3)]"
          >
            GET MY FREE LOCAL VISIBILITY AUDIT
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
