import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',
  label: 'Hero Section',
  admin: { group: 'Site Config' },
  fields: [
    { name: 'badgeText', type: 'text', label: 'Badge Text', admin: { description: 'e.g. LIMITED TIME: FREE WEBSITE BUILD ON US' } },
    { name: 'headlineL1', type: 'text', label: 'Headline Line 1', admin: { description: 'e.g. EMPOWERING' } },
    { name: 'headlineL2', type: 'text', label: 'Headline Line 2', admin: { description: 'e.g. LOCAL BUSINESS' } },
    { name: 'headlineL3prefix', type: 'text', label: 'Headline Line 3 — Prefix', admin: { description: 'e.g. WITH (normal text)' } },
    { name: 'headlineL3outline', type: 'text', label: 'Headline Line 3 — Outline Word', admin: { description: 'e.g. SMART (shown as outline/stroke text)' } },
    { name: 'headlineL4', type: 'text', label: 'Headline Line 4 (Orange)', admin: { description: 'e.g. MARKETING' } },
    { name: 'headlineL5', type: 'text', label: 'Headline Line 5', admin: { description: 'e.g. SOLUTIONS!' } },
    { name: 'subtext', type: 'textarea', label: 'Subtext Paragraph' },
    { name: 'ctaPrimary', type: 'text', label: 'Primary CTA Label', admin: { description: 'e.g. ⚡ WORK WITH US' } },
    { name: 'ctaSecondary', type: 'text', label: 'Secondary CTA Label', admin: { description: 'e.g. VIEW PRICING' } },
  ],
}
