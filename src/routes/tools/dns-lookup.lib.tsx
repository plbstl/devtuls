import { json, type ActionFunction, type LoaderFunction } from 'react-router-dom'
import dnsLookup, { dohResolvers, type DnsLookupInput, type DnsLookupOutput } from '~/lib/dns-lookup'

/** `/dns-lookup` route loader. */
export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url)

  // ?url=
  let dohUrl = url.searchParams.get('url')?.toLowerCase()
  switch (dohUrl) {
    case 'gg':
      dohUrl = dohResolvers.Google
      break
    case 'cf':
      dohUrl = dohResolvers.Cloudflare
      break
    case 'cfm':
      dohUrl = dohResolvers['Cloudflare Families (Malware)']
      break
    case 'cfa':
      dohUrl = dohResolvers['Cloudflare Families (Malware/Adult)']
      break
  }

  return json<DnsLookupLoaderData>({
    domainName: url.searchParams.get('name') ?? '',
    resourceRecordType: url.searchParams.get('type') ?? '',
    disableValidation: url.searchParams.get('cd') === '1' || url.searchParams.get('cd') === 'true',
    receiveDnssecData: url.searchParams.get('do') === '1' || url.searchParams.get('do') === 'true',
    serviceUrl: dohUrl ?? '',
  })
}

/** Data returned by `/dns-lookup` route loader. */
export type DnsLookupLoaderData = DnsLookupInput

/** `/dns-lookup` route action */
export const action: ActionFunction = async ({ request }) => {
  const submittedData = (await request.json()) as DnsLookupLoaderData
  const result = await dnsLookup(submittedData)
  return json<DnsLookupActionData>(result)
}

/** Data returned by `/dns-lookup` route action. */
export type DnsLookupActionData = DnsLookupOutput
