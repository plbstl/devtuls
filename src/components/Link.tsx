import { forwardRef } from 'react'
import {
  assertSlots,
  useLink_unstable,
  useLinkStyles_unstable,
  type ForwardRefComponent,
  type LinkProps,
  type LinkSlots,
} from '@fluentui/react-components'
import { Link as RouterLink } from 'react-router-dom'

const Link: ForwardRefComponent<LinkProps> = forwardRef((props, ref) => {
  const state = useLink_unstable(props, ref)
  useLinkStyles_unstable(state)
  assertSlots<LinkSlots>(state)

  return (
    // @ts-expect-error - href is an optional string
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <RouterLink className={state.root.className} to={state.root.href ?? '#'}>
      {state.root.children}
    </RouterLink>
  )
})

Link.displayName = 'DTLink'

export default Link
