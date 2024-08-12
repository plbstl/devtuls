import { Fragment } from 'react/jsx-runtime'
import { Card, makeStyles, shorthands, Text, tokens } from '@fluentui/react-components'
import { List, ListItem } from '@fluentui/react-list-preview'
import RelativeTime from '~/components/RelativeTime'
import { DNS_RESOURCE_RECORD_TYPES } from '~/utils/dns-rr-types'
import useLocalStorage from '~/utils/use-local-storage'
import type { DnsLookupResult } from './dns-lookup-results-history'

const useStyles = makeStyles({
  card: {
    marginTop: tokens.spacingVerticalXXXL,
  },
  listItem: {
    marginTop: tokens.spacingVerticalM,
  },
  divider: {
    border: 'none',
    ...shorthands.borderBottom('.1px', 'groove', tokens.colorNeutralForeground3),
  },
})

const DnsLookupResultCard = () => {
  const styles = useStyles()
  const [dnsLookupHistory] = useLocalStorage<DnsLookupResult[]>('dnsLookupHistory', [])
  const [viewedDnsLookupHistoryTimestamp] = useLocalStorage('viewedDnsLookupHistoryTimestamp')
  const historyItem = dnsLookupHistory.find((item) => item.timestamp === viewedDnsLookupHistoryTimestamp)

  if (!historyItem) return null

  return (
    <Card className={styles.card}>
      <header style={{ fontStyle: 'italic' }}>
        <Text block as="p" style={{ fontSize: tokens.fontSizeBase100 }}>
          - {historyItem.serviceUsed} <br />- <RelativeTime timestamp={historyItem.timestamp} />
        </Text>
      </header>
      {historyItem.results.map((result, index) => (
        <Fragment key={index}>
          {index !== 0 && <hr className={styles.divider} />}

          <List>
            <ListItem className={styles.listItem}>
              <b>Type:</b> {formatDnsResourceRecordTypeLabel(result.type)}
            </ListItem>
            <ListItem className={styles.listItem}>
              <b>Domain Name:</b> {result.name}
            </ListItem>
            <ListItem className={styles.listItem}>
              <b>TTL:</b> {result.TTL ?? '-'}
            </ListItem>
            <ListItem className={styles.listItem}>
              <b>Data:</b> {result.data}
            </ListItem>
          </List>
        </Fragment>
      ))}
    </Card>
  )
}

// @ts-expect-error - No need for several gymnastics.
// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
const formatDnsResourceRecordTypeLabel = (type: number) => DNS_RESOURCE_RECORD_TYPES[type].TYPE ?? '- '

export default DnsLookupResultCard
