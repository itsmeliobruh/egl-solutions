'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollArrows({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-5 py-4 ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ y: [0, 12, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.22, ease: 'easeInOut' }}
        >
          <ChevronDown size={52} strokeWidth={2.2} className="text-white drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  )
}
