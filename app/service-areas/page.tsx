import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllServiceAreas } from '@/lib/serviceAreas'
import SectionLabel from '@/components/shared/SectionLabel'
import CTAStrip from '@/components/shared/CTAStrip'
import { MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | Marketing Agency Serving Connecticut & Western MA',
  description:
    'EGL Solutions serves local service businesses throughout Connecticut — Hartford County, New Haven County, Litchfield, Middlesex, Tolland, New London, Fairfield, and western Massachusetts.',
  alternates: { canonical: 'https://egl.solutions/service-areas' },
  openGraph: {
    title: 'Service Areas — EGL Solutions',
    description: 'Marketing systems for local service businesses throughout Connecticut and western Massachusetts.',
    url: 'https://egl.solutions/service-areas',
  },
}

function groupByCounty(areas: ReturnType<typeof getAllServiceAreas>) {
  const groups: Record<string, typeof areas> = {}
  for (const area of areas) {
    const key = area.county
      ? `${area.county}, ${area.state}`
      : area.state === 'MA'
      ? 'Western Massachusetts'
      : 'Connecticut'
    if (!groups[key]) groups[key] = []
    groups[key].push(area)
  }
  return groups
}

export default function ServiceAreasPage() {
  const areas = getAllServiceAreas()
  const grouped = groupByCounty(areas)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-void pt-32 pb-20 px-4 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ background: 'linear-gradient(180deg, #FF5500, #CC3300)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 600px 400px at 80% 40%, rgba(255,85,0,0.12), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="noise-overlay" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <SectionLabel label="WHERE WE WORK" className="mb-4 justify-center" />
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-bone tracking-wider mb-6 leading-tight">
            SERVING CONNECTICUT AND BEYOND
          </h1>
          <p className="font-body text-light/75 text-lg max-w-2xl mx-auto">
            EGL Solutions is based in Wethersfield, CT and serves local service businesses
            throughout Connecticut and into western Massachusetts. Find your area below.
          </p>
        </div>
      </section>

      {/* Areas grid */}
      <section className="bg-ash py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-14">
          {Object.entries(grouped).map(([county, countyAreas]) => (
            <div key={county}>
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={16} className="text-inferno" />
                <h2 className="font-display text-2xl text-bone tracking-wide">{county}</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {countyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="block bg-mid border border-steel rounded px-4 py-3 font-body text-sm text-muted hover:border-inferno hover:text-inferno transition-all hover:bg-inferno/5"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip headline="DON'T SEE YOUR EXACT LOCATION?" subtext="We serve all of Connecticut and the surrounding region. Contact us and we'll confirm your area." />
    </>
  )
}
