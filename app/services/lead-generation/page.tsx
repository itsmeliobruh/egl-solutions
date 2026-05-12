import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Lead Generation | Google & Facebook Ads for Contractors in CT',
  description:
    'Managed Google Ads, Facebook campaigns, LSA, and ad creatives for local service businesses in Connecticut. Consistent leads on autopilot. $1,499/mo. EGL Solutions.',
  alternates: { canonical: 'https://egl.solutions/services/lead-generation' },
  openGraph: {
    title: 'Lead Generation — EGL Solutions',
    description: 'Google, Facebook ads, LSA, and full tracking. Consistent leads for Connecticut contractors. $1,499/mo.',
    url: 'https://egl.solutions/services/lead-generation',
  },
}

export default function Page() {
  const service = getServiceBySlug('lead-generation')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
