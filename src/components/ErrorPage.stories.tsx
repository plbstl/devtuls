import { withActions } from '@storybook/addon-actions/decorator'
import type { Meta } from '@storybook/react'
import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'

const meta: Meta<typeof ErrorPage> = {
  component: ErrorPage,
  decorators: [
    withActions,
    (Story) => {
      const routes: RouteObject[] = [{ path: '*', element: <Story /> }]

      const previewRouter = createMemoryRouter(routes, {
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
  parameters: { actions: { handles: ['click a'] } },
}

export default meta

// TODO: implement

export const RouteError = () => <ErrorPage />

export const RouteError_withDataMessage = () => <ErrorPage />

export const UnknownError = () => <ErrorPage />

export const UnexpectedError = () => <ErrorPage />
