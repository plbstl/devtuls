import { useEffect } from 'react'
import { makeStyles, tokens } from '@fluentui/react-components'
import { useActionData, useLoaderData } from 'react-router-dom'
import { dohResolvers } from '~/lib/dns-lookup'
import useLocalStorage from '~/utils/use-local-storage'
import type { DnsLookupActionData, DnsLookupLoaderData } from '../page.router'
import DnsLookupResultCard from './dns-lookup-result-card'
import DnsLookupResultsHistory, { type DnsLookupResult } from './dns-lookup-results-history'

const useStyles = makeStyles({
  results: {
    marginTop: tokens.spacingVerticalXXXL,
  },
})

const DnsLookupResults = () => {
  const styles = useStyles()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const actionData = useActionData() as DnsLookupActionData | undefined
  const [dnsLookupHistory, setDnsLookupHistory] = useLocalStorage<DnsLookupResult[]>('dnsLookupHistory', [])
  const [, setViewedDnsLookupHistoryTimestamp] = useLocalStorage<number>('viewedDnsLookupHistoryTimestamp')

  useEffect(() => {
    if (!actionData) {
      // Clear the result card.
      setViewedDnsLookupHistoryTimestamp(0)
      return
    }

    // Clone loader data as input.
    const input = { ...loaderData }
    delete input.openToolConfig

    // Create new result history
    const result: DnsLookupResult = {
      input,
      results: actionData.data?.Answer ?? actionData.data?.Authority ?? actionData.data?.Additional ?? [],
      resultError: Boolean(actionData.error),
      serviceUsed: loaderData.serviceUrl ? loaderData.serviceUrl : dohResolvers.Google,
      timestamp: Date.now(),
    }

    // Append the new result to resultHistory and set as currently viewed.
    setDnsLookupHistory([result, ...dnsLookupHistory])
    setViewedDnsLookupHistoryTimestamp(result.timestamp)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData])

  return (
    <div className={styles.results}>
      <DnsLookupResultCard />
      <DnsLookupResultsHistory />
    </div>
  )
}

export default DnsLookupResults
