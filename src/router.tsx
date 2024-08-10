import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import RootLayout from './components/layout/RootLayout'

const index: RouteObject = {
  index: true,
  lazy: () => import('./routes/index'),
}

const about: RouteObject = {
  path: 'about',
  lazy: () => import('./routes/about'),
}

const dnsLookupTool: RouteObject = {
  path: 'dns-lookup',
  children: [
    {
      index: true,
      lazy: () => import('./routes/dns-lookup/page'),
      loader: async (args) => {
        const { loader } = await import('./routes/dns-lookup/page.router')
        return loader(args)
      },
      action: async (args) => {
        const { action } = await import('./routes/dns-lookup/page.router')
        return action(args)
      },
    },
    { path: 'docs', lazy: () => import('./routes/dns-lookup/page') },
    { path: 'changelog', lazy: () => import('./routes/dns-lookup/page') },
  ],
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [index, about, dnsLookupTool],
  },
]

// https://github.com/remix-run/react-router/issues/10787
export const appRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes, {
  basename: '/devtuls',
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
})
