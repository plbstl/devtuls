import './index.css'
import { StrictMode } from 'react'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import PwaReloadPrompt from '~/components/PwaReloadPrompt'
import { appRouter } from './router'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <FluentProvider theme={webDarkTheme}>
        <PwaReloadPrompt />
        <RouterProvider router={appRouter} />
      </FluentProvider>
    </StrictMode>,
  )
}
