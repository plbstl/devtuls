import { expect, it, vitest } from 'vitest'
import dnsLookup, { dohResolvers } from './dns-lookup'

it('returns DNS data', async () => {
  // Needs internet connectivity to pass
  const result = await dnsLookup({ domainName: 'google.com', receiveDnssecData: true })

  expect(result.data).not.toBeNull()
})

it('does not throw', async () => {
  const dnsLookupSpy = vitest.fn(dnsLookup)

  await dnsLookupSpy({})

  expect(dnsLookupSpy).not.toThrow()
})

it('fallbacks to google DNS resolver when url input is empty', async () => {
  const resultForEmptyStringUrl = await dnsLookup({ serviceUrl: '' })
  expect(resultForEmptyStringUrl.resolvedUrl).toContain(dohResolvers.Google)

  const resultForUndefinedUrl = await dnsLookup({})
  expect(resultForUndefinedUrl.resolvedUrl).toContain(dohResolvers.Google)
})

it('constructs a predictable resolver url', async () => {
  const result = await dnsLookup({ domainName: 'google.com', receiveDnssecData: true })

  expect(result.resolvedUrl).toContain('name=google.com')
  expect(result.resolvedUrl).toContain('do=1')
  expect(result.resolvedUrl).not.toContain('type=')
  expect(result.resolvedUrl).not.toContain('cd=')
})

it('returns friendly error messages', async () => {
  const result = await dnsLookup({ serviceUrl: 'invalid url' })

  expect(result.error?.toLowerCase()).toContain('dns-over-https url')
})
