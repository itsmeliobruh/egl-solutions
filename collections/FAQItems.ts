import type { CollectionConfig } from 'payload'

export const FAQItems: CollectionConfig = {
  slug: 'faq-items',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'group', 'order'],
    group: 'Content',
  },
  fields: [
    { name: 'order', type: 'number', required: true },
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'textarea', required: true },
    {
      name: 'group',
      type: 'select',
      required: true,
      options: [
        { label: 'Homepage', value: 'homepage' },
        { label: 'Pricing Page', value: 'pricing' },
      ],
    },
  ],
}
