import type { CollectionConfig } from 'payload'

export const ContentAddOns: CollectionConfig = {
  slug: 'content-add-ons',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price'],
    group: 'Content',
  },
  fields: [
    { name: 'order', type: 'number', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'price', type: 'text', required: true, admin: { description: 'e.g. $997/mo' } },
    { name: 'badge', type: 'text', admin: { description: 'e.g. MOST POPULAR — leave blank for none' } },
    { name: 'bestFor', type: 'textarea', label: 'Best For' },
    {
      name: 'includes',
      type: 'array',
      label: "What's Included",
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'bookingHref', type: 'text', label: 'Booking URL' },
  ],
}
