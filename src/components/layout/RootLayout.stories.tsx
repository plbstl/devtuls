import { withActions } from '@storybook/addon-actions/decorator'
import type { Meta } from '@storybook/react'
import RootLayout from './RootLayout'

const meta: Meta<typeof RootLayout> = {
  component: RootLayout,
  decorators: [withActions],
  parameters: { actions: { handles: ['click a'] } },
}

export default meta

export const DefaultLayout = () => (
  <RootLayout>
    <p>I am in the Root Layout</p>
  </RootLayout>
)
