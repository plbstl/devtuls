import { Card, makeStyles, shorthands, tokens } from '@fluentui/react-components'
import { List, ListItem } from '@fluentui/react-list-preview'
import useLocalStorage from '~/utils/use-local-storage'
import type { DnsRecord } from './dns-lookup-results-history'

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
    marginBottom: tokens.spacingVerticalS,
  },
  txtList: {
    overflowX: 'auto',
  },
  txtListItem: {
    marginTop: tokens.spacingVerticalS,
  },
  dnsData: {
    overflowWrap: 'anywhere',
  },
  txtKey: {
    fontWeight: '600',
  },
  txtValue: {
    overflowWrap: 'anywhere',
  },
})

const DnsLookupResultsCard = () => {
  const styles = useStyles()
  const [items] = useLocalStorage<DnsRecord[]>('items', [])
  const [viewedItemTimestamp] = useLocalStorage('viewedItemTimestamp')
  const item = items.find((item) => item.timestamp === viewedItemTimestamp)

  if (!item) return null

  const TxtRecord = ({ index, txtRecord }: { index: number; txtRecord: string }) => (
    <>
      {index !== 0 && <hr className={styles.divider} />}
      <b className={styles.txtKey}>{txtRecord.split('=').at(0)}=</b>
      <br />
      <span className={styles.txtValue}>{txtRecord.split('=').at(1)}</span>
    </>
  )

  return (
    <Card className={styles.card}>
      <List>
        <ListItem className={styles.listItem}>
          <b>Type:</b> {item.result.type}
        </ListItem>

        <ListItem className={styles.listItem}>
          <b>TTL:</b> {item.result.ttl}
        </ListItem>

        <ListItem className={styles.listItem}>
          <b>Host:</b> {item.host}
        </ListItem>

        <ListItem className={styles.listItem}>
          <b>Data:</b>
          <List className={styles.txtList}>
            {item.result.data.map((dataItem, index) => (
              <ListItem key={index} className={styles.txtListItem}>
                {item.type.toUpperCase() === 'TXT' ? (
                  <TxtRecord index={index} txtRecord={dataItem} />
                ) : (
                  <span className={styles.dnsData}>{dataItem}</span>
                )}
              </ListItem>
            ))}
          </List>
        </ListItem>
      </List>
    </Card>
  )
}

export default DnsLookupResultsCard
