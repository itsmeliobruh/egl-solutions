'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import type { FAQItemData } from '@/lib/payload/queries'

const DEFAULT_FAQS: FAQItemData[] = [
  { question: 'Can you provide references from past clients?', answer: 'Absolutely. We can provide references from past clients. You can also read reviews from our satisfied customers on Google. Contact information for specific past clients available upon request.', group: 'homepage' },
  { question: 'What sets you apart from other agencies?', answer: 'At EGL Marketing, we distinguish ourselves through meticulous attention to detail, a dedication to quality results, and a personalized approach. We prioritize communication to seamlessly bring your vision to life.', group: 'homepage' },
  { question: 'Is there a fee for a consultation?', answer: 'No. EGL Marketing offers complimentary consultations and estimates to all prospective clients.', group: 'homepage' },
  { question: 'How long does it take to build my system?', answer: 'Most systems are built and launched within 7–10 business days after receiving your onboarding information.', group: 'homepage' },
  { question: 'Do I need a contract?', answer: 'We offer month-to-month agreements. No long-term contracts required.', group: 'homepage' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border-b border-[#E0D8CC] last:border-0 transition-colors duration-200 ${open ? 'bg-[#FFFCF7]' : ''}`}>
      {open && (
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF5500] rounded-l-xl" aria-hidden="true" />
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group px-6"
        aria-expanded={open}
      >
        <span className={`font-body font-medium transition-colors pr-4 ${open ? 'text-[#0A0A0A]' : 'text-[#0A0A0A] group-hover:text-[#FF5500]'}`}>
          {q}
        </span>
        <span className="flex-shrink-0 text-[#FF5500]">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-[#666666] leading-relaxed pb-5 pr-8 px-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection({ faqs }: { faqs?: FAQItemData[] | null }) {
  const items = faqs ?? DEFAULT_FAQS

  return (
    <section className="bg-[#0D0D0D] py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <SectionLabel label="FAQ" className="mb-3 justify-center" />
          <h2 className="font-display text-5xl text-bone tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.28)] overflow-hidden relative"
        >
          {items.map((faq) => (
            <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
