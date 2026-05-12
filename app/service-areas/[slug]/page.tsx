import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceAreaBySlug, generateStaticServiceAreaParams } from '@/lib/serviceAreas'
import ServiceAreaTemplate from '@/components/service-areas/ServiceAreaTemplate'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return generateStaticServiceAreaParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = getServiceAreaBySlug(slug)
  if (!area) return {}

  const location = `${area.name}, ${area.state}`
  const title = `Marketing Solutions for Local Businesses in ${location} | EGL Solutions`
  const description = area.description

  return {
    title,
    description,
    alternates: { canonical: `https://egl.solutions/service-areas/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `https://egl.solutions/service-areas/${area.slug}`,
    },
  }
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params
  const area = getServiceAreaBySlug(slug)
  if (!area) notFound()
  return <ServiceAreaTemplate area={area} />
}
