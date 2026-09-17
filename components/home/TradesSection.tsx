'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/shared/SectionLabel'

const categories = [
  {
    label: '🏗️ Home Services',
    trades: [
      'General Contractors', 'Home Builders', 'Remodeling', 'Roofing',
      'Plumbing', 'HVAC', 'Electricians', 'Painters', 'Landscapers',
      'Flooring / Carpet Cleaning', 'Pressure Washing', 'Tree Service',
      'Pest Control', 'Pool Construction', 'Fencing', 'Gutters',
      'Junk Removal', 'Cleaning Services', 'Solar Installation',
      'Garage Doors', 'Concrete / Driveways',
    ],
  },
  {
    label: '💆 Health & Wellness',
    trades: [
      'Dentists', 'Chiropractors', 'Med Spas', 'Day Spas',
      'Personal Trainers', 'Physical Therapy',
    ],
  },
  {
    label: '💅 Beauty',
    trades: [
      'Hair Salons', 'Barbershops', 'Nail Salons', 'Lash Studios', 'Tattoo Studios',
    ],
  },
  {
    label: '🚗 Auto',
    trades: ['Car Cleaning / Detailing', 'Auto Repair', 'Window Tinting'],
  },
  {
    label: '🍕 Food & Hospitality',
    trades: ['Restaurants', 'Catering', 'Food Trucks', 'Bakeries'],
  },
  {
    label: '🐾 Other',
    trades: [
      'Dog Groomers', 'Pet Services', 'Moving Companies',
      'Photographers', 'Event Planners', 'Tutors',
    ],
  },
  {
    label: '👔 Professional',
    trades: ['Real Estate Agents', 'Insurance Agents', 'Financial Advisors', 'Attorneys'],
  },
]

// Group into 4 columns: col1 = Home Services alone, col2 = Health+Beauty, col3 = Auto+Food+Other, col4 = Professional
const columns = [
  [categories[0]],
  [categories[1], categories[2]],
  [categories[3], categories[4], categories[5]],
  [categories[6]],
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
            SERVING ALL THESE TRADES AND MORE
          </h2>
        </motion.div>

        {/* Categorized grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#2A2320] rounded-xl overflow-hidden mb-6"
        >
          {columns.map((col, ci) => (
            <div
              key={ci}
              className={`p-6 lg:p-7 flex flex-col gap-7 ${
                ci < columns.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-[#2A2320]' : ''
              }`}
            >
              {col.map((group) => (
                <div key={group.label}>
                  <span className="font-mono text-[9px] text-inferno uppercase tracking-[0.2em] pb-2.5 mb-3 border-b border-[#2A2320] block">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.trades.map((trade) => (
                      <span
                        key={trade}
                        className="bg-[#F5F0E8] border border-[#E0D8CC] rounded text-[#333] font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1.5 leading-none hover:border-[#FF5500] hover:text-[#FF5500] transition-colors cursor-default whitespace-nowrap"
                      >
                        {trade}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
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
            LET&apos;S TALK
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
