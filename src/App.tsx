import { StrictMode, useEffect, useState } from 'react'
import { FluentProvider, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import { RouterProvider } from 'react-router-dom'
import PwaReloadPrompt from '~/components/PwaReloadPrompt'
import { appRouter } from './router'
import './index.css'

const App = () => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark')
  const theme = colorScheme === 'dark' ? webDarkTheme : webLightTheme

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    setColorScheme(mql.matches ? 'dark' : 'light')
    const handleMqlChange = (ev: MediaQueryListEvent) => {
      setColorScheme(ev.matches ? 'dark' : 'light')
    }
    mql.addEventListener('change', handleMqlChange)
    return () => {
      mql.removeEventListener('change', handleMqlChange)
    }
  }, [])

  return (
    <StrictMode>
      <FluentProvider theme={theme}>
        <PwaReloadPrompt />
        <RouterProvider router={appRouter} />
      </FluentProvider>
    </StrictMode>
  )
}

export default App
