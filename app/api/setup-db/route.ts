import { NextResponse } from 'next/server'

// Temporary route — delete after running once to initialize the DB schema.
// GET /api/setup-db to push the Payload Drizzle schema to Neon.
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET(request: Request) {
  const secret = new URL(request.url).searchParams.get('secret')
  if (secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    process.env.PAYLOAD_FORCE_DRIZZLE_PUSH = 'true'

    const { getPayload } = await import('payload')
    const { default: config } = await import('@payload-config')
    const payload = await getPayload({ config })

    const { pushDevSchema } = await import('@payloadcms/drizzle')

    await pushDevSchema(payload.db as any)

    return NextResponse.json({ success: true, message: 'Schema pushed to database.' })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
