'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Minus, Plus } from 'lucide-react'

const BOOKING_URL = 'https://egl.solutions/booking-step1'

type CellValue = boolean | string | 'addon' | '—'

interface PricingRow {
  feature: string
  plans: CellValue[]
}

const systemsPlans = {
  names: ['Website + Systems', 'Lead Generation', 'All-In-One System'],
  prices: ['$297/mo', '$1,499/mo', '$2,499/mo'],
  originalPrices: [null, '$1,999/mo', null],
  badges: ['Essentials', 'High-Performance', 'Most Value'],
  popular: [false, true, false],
  hrefs: [
    '/services/website-and-systems',
    '/services/lead-generation',
    '/services/all-in-one-system',
  ],
}

const systemsRows: PricingRow[] = [
  { feature: 'Website Design', plans: [true, true, true] },
  { feature: 'SEO Optimization', plans: [true, true, true] },
  { feature: 'Lead Capture Form', plans: [true, true, true] },
  { feature: 'Central Marketing Hub', plans: [true, true, true] },
  { feature: 'Appointment Reminders', plans: [true, true, true] },
  { feature: 'Google Review Capture', plans: [true, true, true] },
  { feature: 'AI Chat Agents', plans: [true, true, true] },
  { feature: 'Lead Reactivation Campaigns', plans: [true, true, true] },
  { feature: 'Reputation Management', plans: [true, true, true] },
  { feature: 'Ongoing Support', plans: [true, true, true] },
  { feature: 'Google Business Setup', plans: ['+$499 add-on', true, true] },
  { feature: 'Google LSA', plans: ['+$299 add-on', true, true] },
  { feature: 'Facebook Business Setup', plans: ['—', true, true] },
  { feature: 'Facebook Ads Campaign', plans: ['—', true, true] },
  { feature: 'Ad Creatives & Copy', plans: ['—', true, true] },
  { feature: 'Pixel & Tracking Setup', plans: ['—', true, true] },
  { feature: 'Monthly Performance Report', plans: ['—', true, true] },
  { feature: 'In-Person Content Shoot', plans: ['—', '+$499 add-on', '1/month included'] },
  { feature: 'Custom Marketing Hub', plans: ['—', '—', '✓ Advanced'] },
  { feature: 'AI Receptionist', plans: ['—', '—', true] },
  { feature: 'AI Appointment Setter', plans: ['—', '—', true] },
  { feature: 'AI Chat Bot', plans: ['—', '—', true] },
  { feature: 'Pipeline Automations', plans: ['—', '—', true] },
  { feature: 'Power Dialers', plans: ['—', '—', true] },
  { feature: 'Email & SMS Marketing', plans: ['—', '—', true] },
  { feature: 'Lead Attribution & Distribution', plans: ['—', '—', true] },
  { feature: 'Dedicated 24/7 Support', plans: ['—', '—', true] },
  { feature: 'Client Success Manager', plans: ['—', '—', true] },
]

const contentPlans = {
  names: ['Content Foundation', 'Content Growth', 'Content Authority'],
  prices: ['$997/mo', '$2,499/mo', '$4,997/mo'],
  originalPrices: [null, '$3,299/mo', null],
  badges: ['Establish Presence', 'Get More Leads', 'Dominate Market'],
  popular: [false, true, false],
  hrefs: [
    '/services/content-foundation',
    '/services/content-growth',
    '/services/content-authority',
  ],
}

const contentRows: PricingRow[] = [
  { feature: 'Filming Days / Month', plans: ['1', '2', '3–4'] },
  { feature: 'Short-Form Videos / Month', plans: ['10–12', '15–25', '30–40'] },
  { feature: 'Editing Level', plans: ['Simple', 'Advanced', 'Advanced'] },
  { feature: 'Posting Guidance', plans: [true, '✓ (IG, TikTok, FB, YT)', '✓ (IG, TikTok, FB, YT)'] },
  { feature: 'Content Calendar', plans: [true, '✓ + Scripting', '✓ + Scripting'] },
  { feature: 'Content Dashboard', plans: [true, true, true] },
  { feature: 'Content Strategy + Topic Planning', plans: ['—', true, true] },
  { feature: 'CRM & Lead Nurture', plans: ['—', '—', true] },
  { feature: 'Monthly Review', plans: [true, true, true] },
]

function CellIcon({ value }: { value: CellValue }) {
  if (value === true) return <Check size={16} className="text-inferno mx-auto" />
  if (value === '—' || value === false) return <Minus size={14} className="text-steel mx-auto" />
  return <span className="font-body text-xs text-light text-center block leading-tight">{value}</span>
}

function PricingTableGrid({
  plans,
  rows,
}: {
  plans: typeof systemsPlans
  rows: PricingRow[]
}) {
  return (
    <div className="overflow-x-auto relative">
      {/* Swipe hint on mobile */}
      <p className="text-xs text-muted font-mono text-center mb-3 md:hidden">← swipe to view all →</p>
      <table className="w-full min-w-[700px] border-collapse">
        <thead>
          <tr>
            <th className="text-left font-mono text-[10px] text-muted uppercase tracking-[0.18em] p-4 border-b border-steel w-48" />
            {plans.names.map((name, i) => (
              <th
                key={name}
                className={`p-4 border-b border-steel text-center ${
                  plans.popular[i] ? 'border-t-2 border-t-inferno bg-inferno/5' : ''
                }`}
              >
                {plans.popular[i] && (
                  <span className="font-mono text-[9px] text-black bg-inferno px-2 py-0.5 rounded uppercase tracking-widest block mb-2">
                    MOST POPULAR
                  </span>
                )}
                <div className="font-display text-lg text-bone tracking-wide">{name}</div>
                <div>
                  {plans.originalPrices[i] && (
                    <span className="font-body text-xs text-muted line-through mr-1">{plans.originalPrices[i]}</span>
                  )}
                  <span className="font-display text-2xl text-inferno">{plans.prices[i]}</span>
                </div>
                <div className="font-mono text-[9px] text-muted uppercase tracking-widest mt-1">{plans.badges[i]}</div>
                <Link
                  href={plans.hrefs[i]}
                  className={`mt-3 inline-block text-xs font-display tracking-widest px-4 py-2 rounded transition-colors ${
                    plans.popular[i]
                      ? 'bg-inferno text-black hover:bg-scorch'
                      : 'border border-inferno text-inferno hover:bg-inferno/10'
                  }`}
                >
                  GET STARTED
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={row.feature} className={ri % 2 === 0 ? 'bg-void/30' : ''}>
              <td className="p-4 font-body text-sm text-muted border-b border-steel/50">{row.feature}</td>
              {row.plans.map((val, ci) => (
                <td
                  key={ci}
                  className={`p-4 border-b border-steel/50 text-center ${
                    plans.popular[ci] ? 'bg-inferno/5' : ''
                  }`}
                >
                  <CellIcon value={val} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4" />
            {plans.names.map((name, i) => (
              <td key={name} className={`p-4 text-center ${plans.popular[i] ? 'bg-inferno/5' : ''}`}>
                <a
                  href={BOOKING_URL}
                  className={`inline-block font-display text-sm tracking-widest px-6 py-3 rounded transition-colors shadow-inferno ${
                    plans.popular[i]
                      ? 'bg-inferno text-black hover:bg-scorch'
                      : 'border border-steel text-light hover:border-inferno hover:text-inferno'
                  }`}
                >
                  GET STARTED
                </a>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState<'systems' | 'content'>('systems')

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 bg-mid border border-steel rounded p-1 w-fit">
        <button
          onClick={() => setActiveTab('systems')}
          className={`font-display text-sm tracking-widest px-6 py-2.5 rounded transition-all ${
            activeTab === 'systems'
              ? 'bg-inferno text-black shadow-inferno'
              : 'text-muted hover:text-light'
          }`}
        >
          ⚡ SYSTEMS
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`font-display text-sm tracking-widest px-6 py-2.5 rounded transition-all ${
            activeTab === 'content'
              ? 'bg-inferno text-black shadow-inferno'
              : 'text-muted hover:text-light'
          }`}
        >
          📸 CONTENT
        </button>
      </div>

      {activeTab === 'systems' ? (
        <PricingTableGrid plans={systemsPlans} rows={systemsRows} />
      ) : (
        <PricingTableGrid plans={contentPlans} rows={contentRows} />
      )}
    </div>
  )
}
