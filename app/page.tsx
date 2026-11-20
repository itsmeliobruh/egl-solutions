import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import PainSection from '@/components/home/PainSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import ServicesSection from '@/components/home/ServicesSection'
import TradesSection from '@/components/home/TradesSection'
import ServiceAreaMap from '@/components/home/ServiceAreaMap'
import FAQSection from '@/components/home/FAQSection'

export const metadata: Metadata = {
  title: 'EGL Marketing | Done-For-You Growth Systems for Local Businesses',
  description:
    'EGL Marketing helps local businesses generate more leads, follow up faster and book more appointments with done-for-you video content, Facebook and Instagram ads, Google, websites, AI follow-up and reviews. Based in Wethersfield, CT.',
  alternates: { canonical: 'https://eglmarketing.co' },
  openGraph: {
    title: 'EGL Marketing | Done-For-You Growth Systems for Local Businesses',
    description: 'Turn more attention into booked appointments. Video content, Facebook and Instagram ads, Google and websites for local businesses in Connecticut.',
    url: 'https://eglmarketing.co',
    images: [{ url: 'https://eglmarketing.co/og-image.png', width: 1200, height: 630 }],
  },
}

export default async function HomePage() {

  return (
    <>
      <Hero />
      <TrustBar />
      <PainSection />
      <HowItWorksSection />
      <ServicesSection />
      <TradesSection />
      <ServiceAreaMap />
      <FAQSection />
    </>
  )
}
