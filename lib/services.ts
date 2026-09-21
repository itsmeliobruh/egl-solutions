export interface Service {
  slug: string
  name: string
  emoji: string
  category: 'systems' | 'content'
  headline: string
  subheadline: string
  price?: string
  setup?: string
  pricingNote?: string
  badge?: string
  description: string
  whyImportant: string
  whenToConsider: string
  included: string[]
  notIncluded?: string[]
  addons?: { name: string; price: string }[]
}

export const services: Service[] = [
  {
    slug: 'local-presence-builder',
    name: 'Local Presence Builder',
    emoji: '📍',
    category: 'systems',
    badge: 'Foundation First',
    headline: 'GET FOUND. LOOK LEGIT. CAPTURE EVERY LEAD.',
    subheadline: 'Before ads, before content, before anything else — build the foundation that turns searchers into callers.',
    description: 'A professional website, Google Business Profile, automated review system, CRM pipeline, and local SEO — everything a local service business needs to be found, trusted, and contacted online.',
    whyImportant: 'Most local businesses lose leads not because they lack visibility, but because they have no system in place to capture and convert it. A weak website, no reviews, and no follow-up means you\'re sending money to your competitors every week. This fixes that — fast.',
    whenToConsider: 'Your website is outdated or nonexistent. You have fewer than 20 Google reviews. Leads come in but fall through the cracks. You want a solid foundation before investing in ads or content.',
    included: [
      'Standard website with portfolio gallery',
      'Google Business Profile setup & optimization',
      'Google Local Service Ads (LSA) setup',
      'Automated Google review capture system',
      'GHL CRM & pipeline setup',
      'Lead capture forms',
      'Local SEO & schema markup',
      'Mobile optimization',
      'Monthly website updates',
      'GBP maintenance & review monitoring',
    ],
  },
  {
    slug: 'market-dominator',
    name: 'Market Dominator',
    emoji: '🔥',
    category: 'systems',
    badge: 'Full System',
    headline: 'THE COMPLETE SYSTEM TO OWN YOUR LOCAL MARKET.',
    subheadline: 'Full-service marketing built to generate consistent leads and dominate your local market month after month.',
    description: 'Everything in Local Presence Builder plus paid ads, monthly content shoots, AI automations, full CRM build, and ongoing strategy — one system, one team, one goal: filling your pipeline every month.',
    whyImportant: 'Getting found is only the first step. Dominating your market requires ads bringing in new leads, content building trust, automations following up instantly, and a team optimizing everything month after month. This is the system that makes your phone ring consistently.',
    whenToConsider: 'You\'re ready to scale past referrals and word of mouth. You want a team handling your marketing end to end. You want leads coming in every month without doing it yourself.',
    included: [
      'Premium custom website — fully bespoke design',
      'Meta ads account setup & campaign build',
      'AI automations — missed call text-back, lead follow-up sequences',
      'Full GHL CRM & pipeline build',
      '1 on-site content shoot per month (EGL films)',
      '8–10 short-form videos cut from that footage',
      'Meta ads management with fresh creative monthly',
      'Ongoing GBP optimization',
      'Automated review system monitoring',
      'Monthly performance report',
      'Monthly strategy call',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
