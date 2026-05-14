'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/shared/SectionLabel'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

const services = [
  'Website + Systems ($297/mo)',
  'Lead Generation ($1,499/mo)',
  'All-In-One System ($2,499/mo)',
  'Content Foundation ($997/mo)',
  'Content Growth ($2,499/mo)',
  'Content Authority ($4,997/mo)',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    services_interested: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams({
      full_name: form.full_name,
      phone: form.phone,
      email: form.email,
      services_interested: form.services_interested,
    })
    window.location.href = `${BOOKING_URL}?${params.toString()}`
  }

  const inputClass =
    'w-full bg-white border border-[#E0D8CC] rounded px-4 py-3 font-body text-sm text-[#0A0A0A] placeholder:text-[#AAA] focus:border-[#FF5500] focus:outline-none transition-colors'

  return (
    <section className="bg-ash py-24 px-4 relative overflow-hidden" id="contact">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(255,85,0,0.07), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <SectionLabel label="WORK WITH US" className="mb-3 justify-center" />
          <div className="inline-flex items-center gap-2 bg-inferno/10 border border-inferno/40 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-inferno animate-pulse" />
            <span className="font-mono text-[10px] text-inferno uppercase tracking-[0.18em]">
              LIMITED TIME: FREE WEBSITE BUILD ON US
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-bone tracking-wider">
            LET&apos;S GROW YOUR BUSINESS
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-[#F5F0E8] border border-[#E0D8CC] rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.28)] p-8 space-y-5"
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="full_name" className="font-mono text-[10px] text-[#888] uppercase tracking-[0.15em] block mb-1.5">
                Full Name *
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                value={form.full_name}
                onChange={handleChange}
                placeholder="John Smith"
                className={inputClass}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-mono text-[10px] text-[#888] uppercase tracking-[0.15em] block mb-1.5">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(860) 000-0000"
                className={inputClass}
                aria-required="true"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-[10px] text-[#888] uppercase tracking-[0.15em] block mb-1.5">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@yourbusiness.com"
              className={inputClass}
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="services_interested" className="font-mono text-[10px] text-[#888] uppercase tracking-[0.15em] block mb-1.5">
              Service Interested In *
            </label>
            <select
              id="services_interested"
              name="services_interested"
              required
              value={form.services_interested}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
              aria-required="true"
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-[10px] text-[#888] uppercase tracking-[0.15em] block mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your business..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <p className="font-body text-xs text-[#888] leading-relaxed">
            By providing my phone number, I agree to receive text messages from the business.{' '}
            <a href="/terms" className="text-[#FF5500] hover:text-[#FF8C00] underline">Terms & Conditions</a>
            {' '}|{' '}
            <a href="/privacy" className="text-[#FF5500] hover:text-[#FF8C00] underline">Privacy Policy</a>
          </p>

          <button
            type="submit"
            className="w-full bg-inferno text-black font-display text-lg py-4 rounded tracking-widest hover:bg-scorch transition-colors shadow-inferno"
          >
            SELECT APPOINTMENT TIME →
          </button>
        </motion.form>
      </div>
    </section>
  )
}
