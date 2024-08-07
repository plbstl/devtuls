import type { Meta, StoryObj } from '@storybook/react'
import { createMemoryRouter, RouterProvider, type RouteObject } from 'react-router-dom'
import { Component as <:NewTool>Route } from './<:new-tool>'
import { loader, type <:NewTool>LoaderData } from './<:new-tool>.lib'

const meta: Meta<typeof <:NewTool>Route> = {
  component: <:NewTool>Route,
  decorators: [
    (Story, { args }) => {
      const routes: RouteObject[] = [{ path: '*', loader, element: <Story /> }]
      const { dummyValue } = args as <:NewTool>LoaderData

      const previewRouter = createMemoryRouter(routes, {
        initialEntries: [`/<:new-tool>?dummyValue=${dummyValue}`],
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

type PreviewArgs = <:NewTool>LoaderData

export const Preview = {
  args: {
    dummyValue: 'dummy value',
  } satisfies PreviewArgs,
} satisfies Story
