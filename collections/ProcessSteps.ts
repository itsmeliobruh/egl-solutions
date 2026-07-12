import type { CollectionConfig } from 'payload'

export const ProcessSteps: CollectionConfig = {
  slug: 'process-steps',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['number', 'title', 'time'],
    group: 'Content',
  },
  fields: [
    { name: 'order', type: 'number', required: true },
    { name: 'number', type: 'text', required: true, admin: { description: 'e.g. 01' } },
    { name: 'title', type: 'text', required: true },
    { name: 'time', type: 'text', admin: { description: 'e.g. 15–25 mins' } },
    { name: 'description', type: 'textarea', required: true },
  ],
}
