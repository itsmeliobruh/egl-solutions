import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Content Growth | Video Marketing for Local Service Businesses CT',
  description:
    '2 filming days, 15–25 short-form videos, full strategy, scripting and posting on IG, TikTok, Facebook, YouTube. $2,499/mo. EGL Solutions, Wethersfield CT.',
  alternates: { canonical: 'https://egl.solutions/services/content-growth' },
  openGraph: {
    title: 'Content Growth — EGL Solutions',
    description: '2 filming days, 15–25 videos/month, full content strategy and scripting. Generate leads with content. $2,499/mo.',
    url: 'https://egl.solutions/services/content-growth',
  },
}

export default function Page() {
  const service = getServiceBySlug('content-growth')
  if (!service) notFound()
  return <ServicePageTemplate service={service} />
}
