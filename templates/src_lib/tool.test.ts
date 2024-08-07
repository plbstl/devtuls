import { expect, it, vitest } from 'vitest'
import <:newTool> from './<:new-tool>'

it('execute <:new-tool>', () => {
  const <:newTool>Spy = vitest.fn(<:newTool>)

  <:newTool>Spy({ dummyValue: '' })

  expect(<:newTool>Spy).toHaveReturned()
})

it('does not throw', () => {
  const <:newTool>Spy = vitest.fn(<:newTool>)

  // @ts-expect-error - Intentional invalid input
  const result = <:newTool>Spy()

  expect(<:newTool>Spy).not.toThrow()
  expect(result.error?.toLowerCase()).toContain('error')
})

it('returns friendly error messages', () => {
  const result = <:newTool>({ dummyValue: 'error' })

  expect(result.error?.toLowerCase()).toContain('error')
})
