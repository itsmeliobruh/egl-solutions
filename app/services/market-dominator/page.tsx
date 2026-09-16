import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Market Dominator | Full-Service Marketing System for Local Service Businesses',
  description:
    'The complete done-for-you marketing system — website, ads, content, CRM, AI automations, and monthly strategy. Built to dominate your local market. EGL Marketing, Wethersfield CT.',
  alternates: { canonical: 'https://eglmarketing.co/services/market-dominator' },
  openGraph: {
    title: 'Market Dominator — EGL Marketing',
    description: 'The complete done-for-you marketing system built to dominate your local market.',
    url: 'https://eglmarketing.co/services/market-dominator',
  },
}

export default function Page() {
  const service = getServiceBySlug('market-dominator')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
