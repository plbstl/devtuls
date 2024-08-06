import { expect, it } from 'vitest'
import dnsLookup from './dns-lookup'

it('returns DNS data', async () => {
  const result = await dnsLookup({ name: 'google.com', do: true })

  expect(result.data).not.toBeNull()
})
