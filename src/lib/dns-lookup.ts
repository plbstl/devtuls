import { toASCII } from 'punycode/'

async function dnsLookup(input: Partial<DnsLookupInput>): Promise<DnsLookupOutput> {
  // Prepare resolver url
  const name = toASCII(input.domainName ?? '')
  const type = input.resourceRecordType ? `&type=${input.resourceRecordType}` : ''
  const cd = input.disableValidation ? '&cd=1' : ''
  const d0 = input.receiveDnssecData ? '&do=1' : ''
  const dohUrl = input.serviceUrl ? input.serviceUrl : dohResolvers.Google
  const resolvedUrl = `${dohUrl}?name=${name}${type}${cd}${d0}`

  // Default error output
  const errorOutput: DnsLookupOutput = {
    resolvedUrl,
    data: null,
    error: 'An error occurred.',
  }

  let response: Response

  // Send request
  try {
    response = await fetch(resolvedUrl, { headers: { accept: 'application/dns-json' } })
  } catch (error) {
    // Network or service issue. Or invalid url
    errorOutput.error = `Cannot fetch data. Please check your internet connection, DNS service health status or entered DNS-Over-HTTPS URL, and try again. More information: ${JSON.stringify(
      error,
    )}`
    return errorOutput
  }

  // One of these errors: https://developers.google.com/speed/public-dns/docs/doh#errors
  if (response.status !== 200) {
    let errorText = `Service responded with a ${response.status} ${response.statusText}`

    if (dohUrl.endsWith('cloudflare-dns.com/dns-query')) {
      // Cloudflare (maybe others) sends an error field in JSON
      errorText = ((await response.json()) as { error: string }).error
    } else {
      // Use raw text for others
      errorText = await response.text()

      if (dohUrl === dohResolvers.Google) {
        // Google sends an html document. The html structure may change in the future
        const shortenedHtml = /\/ins>[\w\W]+/i.exec(errorText)?.[0]

        // if there's a shortened html, extract error message the from it
        if (shortenedHtml) {
          const googleErrorText = /<p>(.+)<ins>/i.exec(shortenedHtml.replace(/\/ins>\n/i, ''))?.[1]
          if (googleErrorText) errorText = googleErrorText
        }
      }
    }

    // Use default error text if no custom error is available
    errorOutput.error = errorText
    return errorOutput
  }

  // Extract json from response
  try {
    const returnedData = (await response.json()) as DohJsonPayload
    return { resolvedUrl, data: returnedData, error: null }
  } catch {
    errorOutput.error = 'Cannot parse returned data as JSON. Please check the documentation for the service you are using.'
    return errorOutput
  }
}

/**
 * DNS-Over-HTTPS resolvers with support for JSON queries.
 */
const dohResolvers = {
  Google: 'https://dns.google/resolve',
  Cloudflare: 'https://cloudflare-dns.com/dns-query',
  'Cloudflare Families (Malware)': 'https://security.cloudflare-dns.com/dns-query',
  'Cloudflare Families (Malware/Adult)': 'https://family.cloudflare-dns.com/dns-query',
}

interface DnsLookupInput {
  serviceUrl: string
  domainName: string
  resourceRecordType: string
  disableValidation: boolean
  receiveDnssecData: boolean
}

type DnsLookupOutput = {
  resolvedUrl: string
} & (
  | {
      data: DohJsonPayload
      error: null
    }
  | {
      data: null
      error: string
    }
)

/** JSON payload returned from the DNS-over-HTTPS server. */
interface DohJsonPayload {
  Status: number
  TC: boolean
  RD: boolean
  RA: boolean
  AD: boolean
  CD: boolean
  Question: {
    name: string
    type: number
  }[]
  Answer?: {
    name: string
    type: number
    TTL?: number
    data: string
  }[]
  Authority?: {
    name: string
    type: number
    TTL?: number
    data: string
  }[]
  Additional?: {
    name: string
    type: number
    TTL?: number
    data: string
  }[]
  edns_client_subnet?: string
  Comment?: string
}

export default dnsLookup
export { dohResolvers }
export type { DnsLookupInput, DnsLookupOutput }
