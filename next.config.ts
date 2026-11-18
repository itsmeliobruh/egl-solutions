import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: '/pricing', destination: '/', permanent: false },
      // The business card QR (GHL iEmc540oEQsO) used to point at /book and its 301 is
      // cached by phones that scanned it then. GHL tags every QR scan with lc_qr_id;
      // the /card page's own Book button doesn't, so this only catches QR scans.
      {
        source: '/book',
        has: [{ type: 'query', key: 'lc_qr_id', value: 'iEmc540oEQsO' }],
        destination: '/card',
        permanent: false,
      },
      // GHL forms link their terms checkbox to /terms-and-conditions by default.
      { source: '/terms-and-conditions', destination: '/terms', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/egl-references.vcf',
        headers: [{ key: 'Content-Type', value: 'text/vcard; charset=utf-8' }],
      },
      {
        source: '/melio-egl-marketing.vcf',
        headers: [{ key: 'Content-Type', value: 'text/vcard; charset=utf-8' }],
      },
      {
        source: '/((?!api|admin).*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
