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
    default: 'Home Remodeling Marketing Agency Connecticut | EGL Marketing',
    template: '%s | EGL Marketing',
  },
  description:
    'EGL Marketing helps Connecticut home remodeling contractors book more kitchen and bath jobs with done-for-you growth systems — website, CRM, ads, AI follow-up, reviews, and content. Based in Wethersfield, CT. Call (860) 200-3455.',
  keywords: [
    'home remodeling marketing Connecticut',
    'marketing for remodeling contractors CT',
    'kitchen remodeling marketing CT',
    'bathroom remodeling lead generation Connecticut',
    'remodeling contractor marketing Wethersfield CT',
    'home improvement marketing agency Connecticut',
    'remodeling contractor SEO Connecticut',
    'marketing agency for contractors CT',
    'local SEO remodeling contractors',
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
        <Footer />
      </body>
    </html>
  )
}
