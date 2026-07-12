import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { getPayloadServiceBySlug } from '@/lib/payload/queries'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Lead Flow System | Done-For-You Lead Generation for Local Service Businesses',
  description:
    'Generate, capture, and follow up with new leads every month. Google Ads, Meta Ads, LSA, CRM, tracking, and monthly reporting. $2,000 setup + $1,500/mo. Ad spend separate. EGL Marketing.',
  alternates: { canonical: 'https://egl.solutions/services/lead-generation' },
  openGraph: {
    title: 'Lead Flow System — EGL Marketing',
    description: 'Done-for-you lead generation. Google, Meta Ads, LSA, tracking, and reporting. $2,000 setup + $1,500/mo.',
    url: 'https://egl.solutions/services/lead-generation',
  },
}

export default async function Page() {
  const service = (await getPayloadServiceBySlug('lead-generation')) ?? getServiceBySlug('lead-generation')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
