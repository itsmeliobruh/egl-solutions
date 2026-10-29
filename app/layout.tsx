import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import ConditionalFooter from '@/components/layout/ConditionalFooter'
import JsonLd from '@/components/shared/JsonLd'
import ChatCTARouter from '@/components/shared/ChatCTARouter'

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
    default: 'EGL Marketing | Marketing Agency for Local Service Businesses in CT',
    template: '%s | EGL Marketing',
  },
  description:
    'EGL Marketing helps local service businesses in Connecticut grow with high-converting websites, lead generation, AI automation, and content creation. Based in Wethersfield, CT.',
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
  metadataBase: new URL('https://eglmarketing.co'),
  openGraph: {
    siteName: 'EGL Marketing',
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
        <ConditionalFooter />
        <ChatCTARouter />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6ae3913730238e54019a645a"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
