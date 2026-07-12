import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Services } from './collections/Services'
import { PricingCards } from './collections/PricingCards'
import { ContentAddOns } from './collections/ContentAddOns'
import { ProcessSteps } from './collections/ProcessSteps'
import { FAQItems } from './collections/FAQItems'
import { HeroSection } from './globals/HeroSection'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: '— EGL Marketing CMS',
    },
  },
  collections: [Users, Services, PricingCards, ContentAddOns, ProcessSteps, FAQItems],
  globals: [HeroSection, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? 'fallback-secret-change-in-prod',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL ?? '',
    },
    push: true,
  }),
  cors: [
    'http://localhost:3000',
    'https://egl.solutions',
  ],
})
