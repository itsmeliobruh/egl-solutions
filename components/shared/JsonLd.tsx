export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EGL Marketing',
    description:
      'Home remodeling marketing agency in Connecticut. We help kitchen and bath remodelers, general remodeling contractors, and home addition specialists book more jobs with done-for-you marketing systems.',
    url: 'https://eglmarketing.co',
    telephone: '+18602003455',
    email: 'info@eglmarketing.co',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wethersfield',
      addressLocality: 'Wethersfield',
      addressRegion: 'CT',
      postalCode: '06109',
      addressCountry: 'US',
    },
    areaServed: [
      'Hartford County CT',
      'New Haven County CT',
      'Litchfield County CT',
      'Middlesex County CT',
      'Tolland County CT',
      'New London County CT',
    ],
    openingHours: 'Mo-Su 09:00-19:00',
    sameAs: ['https://www.instagram.com/eglmarketing.co/'],
    knowsAbout: [
      'Home Remodeling Marketing',
      'Kitchen Remodeling Lead Generation',
      'Bathroom Remodeling Marketing',
      'Connecticut Home Improvement Contractor Marketing',
      'Local SEO for Remodeling Contractors',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
