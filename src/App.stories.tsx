import type { Meta } from '@storybook/react'
import App from './App'

const meta: Meta<typeof App> = {
  component: App,
}

export default meta

export const Demo = () => <App />
