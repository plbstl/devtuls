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

const tool: RouteObject = {
  path: 'tool',
  children: [
    { index: true, lazy: () => import('./routes/tool') },
    { path: 'docs', lazy: () => import('./routes/tool') },
    { path: 'changelog', lazy: () => import('./routes/tool') },
  ],
}

const dnsLookupTool: RouteObject = {
  path: 'dns-lookup',
  children: [
    { index: true, lazy: () => import('./routes/tools/dns-lookup') },
    { path: 'docs', lazy: () => import('./routes/tools/dns-lookup') },
    { path: 'changelog', lazy: () => import('./routes/tools/dns-lookup') },
  ],
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [index, about, tool, dnsLookupTool],
  },
]

// https://github.com/remix-run/react-router/issues/10787
export const appRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
})
