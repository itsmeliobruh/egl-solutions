export interface Service {
  slug: string
  name: string
  emoji: string
  category: 'systems' | 'content'
  headline: string
  subheadline: string
  price: string
  originalPrice?: string
  badge?: string
  description: string
  whyImportant: string
  whenToConsider: string
  included: string[]
  addons?: { name: string; price: string }[]
}

export const services: Service[] = [
  {
    slug: 'website-and-systems',
    name: 'Website + Systems',
    emoji: '🚀',
    category: 'systems',
    headline: 'YOUR 24/7 SALES ENGINE',
    subheadline: 'High-converting website + full backend automation. Everything you need to capture and convert leads around the clock.',
    price: '$297/mo',
    description: 'A professionally designed, high-converting website paired with a complete marketing backend — lead capture forms, AI chat agents, automated follow-up sequences, and reputation management — all working 24/7 so you never miss an opportunity.',
    whyImportant: 'Most local service businesses lose leads simply because they lack the systems to capture and follow up in time. A website alone isn\'t enough. Customers expect instant responses, easy booking, and consistent communication. Our Website + Systems package closes that gap with automation that works even while you\'re on the job.',
    whenToConsider: 'You\'re ready to stop relying on word of mouth alone. You want a professional online presence that actually generates leads. You need automated follow-up and booking without hiring extra staff.',
    included: [
      'Website Design',
      'SEO Optimization',
      'Lead Capture Form',
      'Central Marketing Hub',
      'Appointment Reminders',
      'Google Review Capture',
      'AI Chat Agents',
      'Lead Reactivation Campaigns',
      'Reputation Management',
      'Ongoing Support',
    ],
    addons: [
      { name: 'Google Business Setup', price: '$499' },
      { name: 'Google LSA', price: '$299' },
    ],
  },
  {
    slug: 'lead-generation',
    name: 'Lead Generation',
    emoji: '🚀',
    category: 'systems',
    headline: 'CONSISTENT LEADS ON AUTOPILOT',
    subheadline: 'Google, Facebook ads, LSA, tracking. A complete paid acquisition engine that fills your pipeline every single month.',
    price: '$1,499/mo',
    originalPrice: '$1,999/mo',
    badge: 'MOST POPULAR',
    description: 'Everything in Website + Systems, plus a fully managed paid advertising operation across Google, Facebook, and Local Services Ads. We build the campaigns, write the creatives, set up tracking, and deliver monthly performance reports so you always know your ROI.',
    whyImportant: 'Organic growth is slow. Paid acquisition — when done right — is the fastest way to predictably fill your calendar. We handle Google Business optimization, LSA setup, Facebook campaigns, and ad creative so you can focus on doing the work while the leads come in.',
    whenToConsider: 'You want consistent inbound leads beyond referrals. You\'ve tried ads before but didn\'t see results. You want a fully managed system where experts handle every piece of your paid growth.',
    included: [
      'Everything in Website + Systems',
      'Google Business Setup',
      'Google LSA (Local Services Ads)',
      'Facebook Business Page Setup',
      'Facebook Ads Campaign Setup',
      'Ad Creatives & Copy',
      'Pixel & Tracking Setup',
      'Monthly Performance Report',
      'Appointment Reminders',
      'Reputation Management',
      'Ongoing Support',
    ],
    addons: [
      { name: 'In-Person Content Shoot', price: '$499' },
    ],
  },
  {
    slug: 'all-in-one-system',
    name: 'All-In-One System',
    emoji: '🚀',
    category: 'systems',
    headline: 'THE COMPLETE GROWTH POWERHOUSE',
    subheadline: 'The complete growth powerhouse. Every marketing system, every automation, every tool — all combined.',
    price: '$2,499/mo',
    badge: 'MOST VALUE',
    description: 'The ultimate marketing stack for local service businesses ready to dominate their market. Everything in Lead Generation, plus advanced AI agents, pipeline automations, power dialers, email & SMS marketing, and a dedicated Client Success Manager.',
    whyImportant: 'Scaling past a certain point requires more than ads and a website. You need automated pipelines that nurture leads, AI that handles intake calls, and marketing that works across every channel simultaneously. The All-In-One System is built for businesses serious about becoming the dominant brand in their market.',
    whenToConsider: 'You\'re ready to scale aggressively. You want AI handling intake so your team focuses on revenue-generating work. You need full pipeline automation, power dialers, and a dedicated success manager guiding your growth.',
    included: [
      'Everything in Lead Generation',
      'Custom Built Central Marketing Hub',
      'AI Receptionist',
      'AI Appointment Setter',
      'AI Chat Bot',
      'AI Reputation Management',
      'Pipeline Automations',
      'Power Dialers',
      'Email & SMS Marketing',
      'Lead Attribution & Distribution',
      'Dedicated 24/7 Support',
      'Assigned Client Success Manager',
      '1 In-Person Content Shoot/Month',
    ],
  },
  {
    slug: 'content-foundation',
    name: 'Content Foundation',
    emoji: '📸',
    category: 'content',
    headline: 'ESTABLISH YOUR PRESENCE',
    subheadline: '1 filming day per month, 10–12 short-form videos, posting guidance. Build your brand and stay visible online.',
    price: '$997/mo',
    description: 'We come to your job site or business once a month, capture authentic content, edit 10–12 short-form videos, and give you everything you need to stay consistently visible on social media — without spending hours creating content yourself.',
    whyImportant: 'People buy from businesses they trust. Regular video content showing your work, your team, and your expertise builds that trust faster than any ad. Content Foundation gets you on the map and keeps your brand visible to local customers.',
    whenToConsider: 'You have zero social media presence and need to start. You want professional content without managing it yourself. You\'re looking for an affordable entry into content marketing.',
    included: [
      '1 Filming Day/Month',
      '10–12 Short-Form Videos/Month',
      'Simple Editing',
      'Posting Guidance',
      'Content Calendar',
      'Content Dashboard',
      'Monthly Review',
    ],
  },
  {
    slug: 'content-growth',
    name: 'Content Growth',
    emoji: '📸',
    category: 'content',
    headline: 'GET MORE LEADS WITH CONTENT',
    subheadline: '2 filming days/month, 15–25 videos, full strategy + scripting. Turn your content into a lead generation machine.',
    price: '$2,499/mo',
    originalPrice: '$3,299/mo',
    badge: 'MOST POPULAR',
    description: 'Double the filming days, more videos, full content strategy, scripting, and posting across all major platforms — Instagram, TikTok, Facebook, and YouTube. We treat your content like a marketing campaign, not just filler posts.',
    whyImportant: 'Volume and strategy are what separate brands that get noticed from ones that get ignored. With 15–25 videos per month, scripted and strategically planned, you\'re showing up where customers spend their time — and you\'re doing it better than competitors.',
    whenToConsider: 'You want content that actively generates leads, not just awareness. You need a full strategy and scripting so every video has a purpose. You\'re ready to post across multiple platforms consistently.',
    included: [
      '2 Filming Days/Month',
      '15–25 Short-Form Videos/Month',
      'Advanced Editing',
      'Content Strategy + Topic Planning',
      'Content Calendar + Scripting',
      'Content Dashboard',
      'Posting on IG, TikTok, Facebook, YouTube',
      'Monthly Review',
    ],
  },
  {
    slug: 'content-authority',
    name: 'Content Authority',
    emoji: '📸',
    category: 'content',
    headline: 'DOMINATE YOUR LOCAL MARKET',
    subheadline: '3–4 filming days/month, 30–40 videos. Be everywhere. Become the obvious choice in your market.',
    price: '$4,997/mo',
    badge: 'MOST RESULTS',
    description: 'Maximum content output for businesses that want to be impossible to ignore. 30–40 videos per month across all platforms, CRM integration to nurture leads from content, and the full strategic infrastructure to make you the household name in your trade.',
    whyImportant: 'Authority in a local market is won by showing up consistently, everywhere, at scale. At 30–40 videos per month, you\'re flooding every platform your customers use. Combined with CRM lead nurture, content directly feeds your pipeline.',
    whenToConsider: 'You want to be the #1 most recognized brand in your trade locally. You want content that generates and nurtures leads automatically. You\'re ready to invest in dominant market positioning.',
    included: [
      '3–4 Filming Days/Month',
      '30–40 Short-Form Videos/Month',
      'Advanced Editing',
      'Content Strategy + Topic Planning',
      'Content Calendar + Scripting',
      'Content Dashboard',
      'Posting on IG, TikTok, Facebook, YouTube',
      'CRM & Lead Nurture',
      'Monthly Review',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
