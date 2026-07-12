import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price'],
    group: 'Content',
  },
  fields: [
    { name: 'slug', type: 'text', required: true, admin: { description: 'URL identifier — do not change after launch' } },
    { name: 'name', type: 'text', required: true },
    { name: 'emoji', type: 'text' },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Systems', value: 'systems' },
        { label: 'Content', value: 'content' },
      ],
    },
    { name: 'headline', type: 'text' },
    { name: 'subheadline', type: 'text' },
    { name: 'price', type: 'text', required: true, admin: { description: 'e.g. $297/mo' } },
    { name: 'setup', type: 'text', admin: { description: 'e.g. $1,000 setup' } },
    { name: 'pricingNote', type: 'text', admin: { description: 'Small note under price, e.g. ad spend note' } },
    { name: 'badge', type: 'text', admin: { description: 'e.g. MOST POPULAR' } },
    { name: 'description', type: 'textarea', required: true },
    { name: 'whyImportant', type: 'textarea', label: "Why It's Important" },
    { name: 'whenToConsider', type: 'textarea', label: 'When to Consider' },
    {
      name: 'included',
      type: 'array',
      label: "What's Included",
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'notIncluded',
      type: 'array',
      label: 'Not Included',
      fields: [{ name: 'text', type: 'text' }],
    },
  ],
}
