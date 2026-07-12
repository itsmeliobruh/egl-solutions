import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: { group: 'Site Config' },
  fields: [
    { name: 'phone', type: 'text', label: 'Phone Number', admin: { description: 'e.g. (860) 200-3455' } },
    { name: 'email', type: 'email', label: 'Email Address' },
    { name: 'address', type: 'text', label: 'Business Address', admin: { description: 'e.g. Wethersfield, CT' } },
    { name: 'consultationUrl', type: 'text', label: 'Free Consultation Booking URL' },
    { name: 'defaultBookingUrl', type: 'text', label: 'Default Booking URL' },
  ],
}
