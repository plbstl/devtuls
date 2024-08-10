import type { Meta, StoryObj } from '@storybook/react'
import { createMemoryRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import { Component as DnsLookupRoute } from './page'
import { loader, type DnsLookupLoaderData } from './page.router'

const meta: Meta<typeof DnsLookupRoute> = {
  component: DnsLookupRoute,
  decorators: [
    (Story, { args }) => {
      const routes: RouteObject[] = [{ path: '*', loader, element: <Story /> }]
      const {
        serviceUrl: url,
        domainName: name,
        resourceRecordType: type,
        disableValidation: cd,
        receiveDnssecData: d0,
      } = args as DnsLookupLoaderData

      const previewRouter = createMemoryRouter(routes, {
        initialEntries: [`/dns-lookup?url=${url}&name=${name}&type=${type}&cd=${cd}&do=${d0}`],
        future: {
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_relativeSplatPath: true,
          v7_skipActionErrorRevalidation: true,
        },
      })

      return <RouterProvider router={previewRouter} />
    },
  ],
}

export default meta
type Story = StoryObj<typeof meta>

type PreviewArgs = Omit<DnsLookupLoaderData, 'disableValidation' | 'receiveDnssecData'> & {
  disableValidation: string
  receiveDnssecData: string
}

export const Preview = {
  args: {
    serviceUrl: 'cfm',
    domainName: 'github.com',
    resourceRecordType: 'A',
    disableValidation: '0',
    receiveDnssecData: 'true',
  } satisfies PreviewArgs,
} satisfies Story
