import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './importMap.js'
import configPromise from '@payload-config'
import type { ServerFunctionClient } from 'payload'
import React from 'react'
import '@payloadcms/next/css'

type Args = { children: React.ReactNode }

const serverFunction: ServerFunctionClient = async (args) => {
  'use server'
  return handleServerFunctions({ ...args, config: configPromise, importMap })
}

export default function Layout({ children }: Args) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}
