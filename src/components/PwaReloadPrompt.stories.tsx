import { withActions } from '@storybook/addon-actions/decorator'
import type { Meta, StoryObj } from '@storybook/react'
import { PwaToast, type PwaToastProps } from './PwaReloadPrompt'

const meta: Meta<typeof PwaToast> = {
  component: PwaToast,
  parameters: { actions: { handles: ['click a', 'click button'] } },
  decorators: [
    withActions,
    (Story) => (
      <div style={{ margin: 'auto', width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

type PreviewArgs = PwaToastProps

export const RegisterErrorMessage = {
  args: {
    message: 'Failed to install Devtuls for offline usage.',
  } satisfies PreviewArgs,
} satisfies Story

export const OfflineReadyMessage = {
  args: {
    message: 'Devtuls is ready to work offline.',
  } satisfies PreviewArgs,
} satisfies Story

export const ContentAvailableMessage = {
  args: {
    message: 'New content available, click on Reload to update',
    reloadAction: console.log,
  } satisfies PreviewArgs,
} satisfies Story
