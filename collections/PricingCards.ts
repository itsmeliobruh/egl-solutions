import type { CollectionConfig } from 'payload'

export const PricingCards: CollectionConfig = {
  slug: 'pricing-cards',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'monthly', 'badge'],
    group: 'Content',
  },
  fields: [
    { name: 'order', type: 'number', required: true, admin: { description: '1, 2, or 3 — controls display order' } },
    { name: 'title', type: 'text', required: true },
    { name: 'tagline', type: 'text' },
    { name: 'description', type: 'textarea' },
    { name: 'setup', type: 'number', required: true, admin: { description: 'One-time setup fee in dollars (no $ sign)' } },
    { name: 'monthly', type: 'number', required: true, admin: { description: 'Monthly price in dollars (no $ sign)' } },
    { name: 'adSpendSeparate', type: 'checkbox', label: 'Ad spend billed separately', defaultValue: false },
    { name: 'cta', type: 'text', label: 'Button Label' },
    { name: 'badge', type: 'text', admin: { description: 'e.g. MOST POPULAR — leave blank for none' } },
    {
      name: 'features',
      type: 'array',
      label: 'Features / Bullet Points',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'bookingHref', type: 'text', label: 'Booking URL', admin: { description: 'e.g. /book?services_interested=...' } },
  ],
}
