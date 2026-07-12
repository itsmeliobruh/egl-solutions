export interface Service {
  slug: string
  name: string
  emoji: string
  category: 'systems' | 'content'
  headline: string
  subheadline: string
  price: string
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
    slug: 'website-and-systems',
    name: 'Growth Foundation',
    emoji: '🚀',
    category: 'systems',
    headline: 'BUILD THE SYSTEM BEFORE YOU BUY MORE TRAFFIC',
    subheadline: 'Build the system before you buy more traffic.',
    price: '$297/mo',
    setup: '$1,000 setup',
    badge: 'MOST POPULAR',
    description: 'A clean website, CRM, lead capture, review system, and basic follow-up automation built to stop leads from slipping through the cracks.',
    whyImportant: 'Most local service businesses lose leads not because they lack visibility, but because they lack the systems to capture and follow up in time. Before spending money on ads or content, you need a solid foundation — a website that converts, a CRM that tracks leads, and automation that follows up so nothing falls through the cracks.',
    whenToConsider: 'Your online presence is weak or inconsistent. Leads come in but you lose track of them. You rely on word of mouth and want to build something more reliable. You need a clean system in place before investing in ads.',
    included: [
      '10–15 page high-converting website or landing page',
      'Lead capture form',
      'Call button',
      'Booking link',
      'CRM pipeline setup',
      'Basic SMS/email follow-up automations',
      'Google review request workflow',
      'Basic review capture system',
      'Lead source tracking',
      'Light monthly support',
    ],
    notIncluded: [
      'Ads management',
      'Full content creation',
      'Advanced AI receptionist',
      'Full SEO',
      'Full lead reactivation',
      'Monthly strategy calls',
    ],
  },
  {
    slug: 'lead-generation',
    name: 'Lead Flow System',
    emoji: '🚀',
    category: 'systems',
    headline: 'GENERATE, CAPTURE, AND FOLLOW UP WITH NEW LEADS EVERY MONTH',
    subheadline: 'Generate, capture, and follow up with new leads every month.',
    price: '$1,500/mo',
    setup: '$2,000 setup',
    pricingNote: 'Ad spend is billed separately and paid directly by the client.',
    badge: 'MOST VALUE',
    description: 'A done-for-you lead generation system that helps local service businesses generate, capture, and follow up with new opportunities every month.',
    whyImportant: 'Organic growth is slow. Paid acquisition — when set up correctly — is the fastest path to a predictable pipeline. We build your campaigns, write your ads, set up tracking, and send you a monthly report so you always know what your leads are costing and where they come from.',
    whenToConsider: 'You want consistent inbound leads beyond referrals. You\'re ready to invest in ads and want experts to manage everything. You need a full lead system, not just an ad account.',
    included: [
      'Everything in Growth Foundation',
      'Website or landing page',
      'CRM setup',
      'Lead capture',
      'Follow-up automations',
      'Google review workflow',
      'Lead source tracking',
      'Google Business Profile setup & optimization',
      'Local Service Ads setup, if eligible',
      'Meta Ads setup',
      'Google Ads setup, optional depending on industry',
      'Offer-specific landing page',
      'Pixel setup',
      'UTM tracking',
      'Call tracking',
      'Monthly performance report',
      'Leads, appointments, and cost per lead reporting',
      'Weekly campaign adjustments',
    ],
  },
  {
    slug: 'all-in-one-system',
    name: 'Revenue Engine',
    emoji: '🚀',
    category: 'systems',
    headline: 'THE COMPLETE DONE-FOR-YOU GROWTH SYSTEM',
    subheadline: 'Attract leads, follow up instantly, book more appointments, and build trust with content.',
    price: '$2,997/mo',
    setup: '$5,000 setup',
    pricingNote: 'Ad spend is billed separately and paid directly by the client.',
    badge: 'MOST RESULTS',
    description: 'Your complete local growth system: website, CRM, ads, AI follow-up, content, reviews, reporting, and optimization.',
    whyImportant: 'Scaling past a certain point requires more than ads and a website. You need AI that handles missed calls and follow-up, automated pipelines that nurture leads, content that builds trust, and a team managing all of it. The Revenue Engine is built for businesses serious about becoming the dominant name in their local market.',
    whenToConsider: 'You\'re ready to scale aggressively and want everything handled. You want AI following up with leads instantly, even after hours. You need ads, content, automation, and reporting all working together as one system.',
    included: [
      'Everything in Lead Flow System',
      'Website',
      'Ads',
      'CRM',
      'Reporting',
      'Advanced AI agents',
      'AI chat agent',
      'Missed-call text-back',
      'AI appointment setter',
      'AI receptionist (optional depending on niche)',
      'Sales pipeline automations',
      'Lead reactivation campaign',
      'Automated review engine',
      'Email/SMS nurture',
      '1 filming day per month',
      '8–12 edited short-form videos per month',
      'Monthly strategy call',
      'Priority support',
    ],
  },
  {
    slug: 'content-foundation',
    name: 'Content Starter',
    emoji: '📸',
    category: 'content',
    headline: 'BUILD TRUST AND STAY VISIBLE WITH MONTHLY CONTENT',
    subheadline: 'Build trust, stay visible, and give local customers a reason to choose you.',
    price: '$997/mo',
    description: 'We come to your job site or business once a month, capture authentic content, edit 8–12 short-form videos, and give you everything you need to stay consistently visible — without spending hours creating content yourself.',
    whyImportant: 'People buy from businesses they trust. Regular video content showing your work, your team, and your expertise builds that trust faster than any ad. Content Starter gets you consistently visible to local customers with minimal effort on your end.',
    whenToConsider: 'You have little or no social media presence. You want professional content without managing it yourself. You\'re looking for an affordable way to start building trust and visibility with local customers.',
    included: [
      '1 filming day per month',
      '8–12 short-form videos per month',
      'Captions included',
      'Posting guidance included',
      'Basic content calendar',
    ],
  },
  {
    slug: 'content-growth',
    name: 'Content Growth',
    emoji: '📸',
    category: 'content',
    headline: 'POST MORE CONSISTENTLY AND BUILD STRONGER LOCAL AUTHORITY',
    subheadline: 'Post more consistently and build stronger local authority.',
    price: '$1,997/mo',
    badge: 'MOST POPULAR',
    description: 'More filming days, more videos, full content strategy, scripting, and posting support across all major platforms. We treat your content like a marketing campaign, not just filler posts.',
    whyImportant: 'Volume and strategy are what separate brands that get noticed from ones that get ignored. With 15–20 strategic videos per month, scripted and planned around what your ideal customers care about, you start becoming the obvious local choice.',
    whenToConsider: 'You want to post more consistently across multiple platforms. You need hooks, scripts, and strategy — not just filming. You\'re ready to take content seriously as a trust-building and lead-generation channel.',
    included: [
      '2 filming days per month',
      '15–20 short-form videos per month',
      'Hooks/scripts included',
      'Content calendar included',
      'Posting support included',
      'Monthly strategy included',
    ],
  },
  {
    slug: 'content-authority',
    name: 'Local Authority Content',
    emoji: '📸',
    category: 'content',
    headline: 'DOMINATE YOUR LOCAL MARKET WITH CONTENT',
    subheadline: 'Founder content, trust content, testimonials, and local authority — every single month.',
    price: '$3,997/mo',
    badge: 'MOST RESULTS',
    description: 'Maximum content output for businesses that want to be impossible to ignore — 25–30 videos per month, founder and team content, testimonials, and monthly campaign themes.',
    whyImportant: 'Authority in a local market is won by showing up consistently, everywhere, at scale. At 25–30 videos per month with strategic campaign themes and testimonial content, you\'re flooding every platform your customers use and building the kind of trust that makes price a non-issue.',
    whenToConsider: 'You want to be the most recognized brand in your trade locally. You\'re ready to invest in dominant content positioning. You want founder-led content, testimonials, and trust-building working alongside your ads and follow-up system.',
    included: [
      '3 filming days per month max',
      '25–30 short-form videos per month',
      'Founder/owner content',
      'Team/trust content',
      'Testimonial content',
      'Monthly campaign themes',
      'Posting support',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
