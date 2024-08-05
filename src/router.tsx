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

// https://github.com/remix-run/react-router/issues/10787
export const appRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [index, about],
  },
])
