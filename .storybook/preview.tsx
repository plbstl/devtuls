import '../src/index.css'
import { FluentProvider, webDarkTheme } from '@fluentui/react-components'
import { withActions } from '@storybook/addon-actions/decorator'
import type { Decorator } from '@storybook/react'

export const decorators: Decorator[] = [
  withActions,
  (Story) => (
    <FluentProvider theme={webDarkTheme}>
      <Story />
    </FluentProvider>
  ),
]
