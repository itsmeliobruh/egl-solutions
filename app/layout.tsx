import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/shared/JsonLd'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'EGL Solutions | Marketing Agency for Local Service Businesses in CT',
    template: '%s | EGL Solutions',
  },
  description:
    'EGL Solutions helps local service businesses in Connecticut grow with high-converting websites, lead generation, AI automation, and content creation. Based in Wethersfield, CT. Call (860) 200-3455.',
  keywords: [
    'marketing agency Connecticut',
    'lead generation CT',
    'local service business marketing',
    'HVAC marketing CT',
    'roofing contractor marketing',
    'plumber marketing Connecticut',
    'Wethersfield CT marketing agency',
    'contractor marketing',
    'trades marketing',
  ],
  metadataBase: new URL('https://egl.solutions'),
  openGraph: {
    siteName: 'EGL Solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
