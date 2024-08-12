import { Fragment } from 'react/jsx-runtime'
import {
  Card,
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  makeStyles,
  shorthands,
  TableCellLayout,
  TableColumnDefinition,
  Text,
  tokens,
} from '@fluentui/react-components'
import { List, ListItem } from '@fluentui/react-list-preview'
import { useActionData } from 'react-router-dom'

interface DnsRecord {
  status: 'success' | 'error'
  type: string
  host: string
  result: string
  service: string
  timestamp: number
}

const useStyles = makeStyles({
  marginTop: {
    marginTop: tokens.spacingVerticalXXXL,
  },
  table: {
    overflowX: 'scroll',
  },
  cell: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  divider: {
    border: 'none',
    ...shorthands.borderBottom('.1px', 'groove', tokens.colorNeutralForeground3),
    marginTop: '8px',
  },
})

const tableItems = [
  ['atlassian-domain-verification', 'jjgw98AKv2aeoYFxiL/VFaoyPkn3undEssTRuMg6C/3Fp/iqhkV4HVV7WjYlVeF8'],
  ['miro-verification', 'd2e174fdb00c71e0bcf58f8e58c3da2dd80dcfa9'],
  ['calendly-site-verification', 'at0DQARi7IZvJtXQAWhMqpmIzpvoBNF7aam5VKKxP'],
  ['apple-domain-verification', 'RyQhdzTl6Z6x8ZP4'],
  ['loom-site-verification', 'f3787154f1154b7880e720a511ea664d'],
  ['google-site-verification', 'UTM-3akMgubp6tQtgEuAkYNYLyYAvpTnnSrDMWoDR3o'],
  ['adobe-idp-site-verification', 'b92c9e999aef825edc36e0a3d847d2dbad5b2fc0e05c79ddd7a16139b48ecf4b'],
  ['docusign', '087098e3-3d46-47b7-9b4e-8a23028154cd'],
  ['beautifulai-site-verification', 'e478d764-9335-4af3-ac7a-2d5ab61b59aa'],
  ['krisp-domain-verification', 'ZlyiK7XLhnaoUQb2hpak1PLY7dFkl1WE'],
  ['google-site-verification', '82Le34Flgtd15ojYhHlGF_6g72muSjamlMVThBOJpks'],
  ['MS', 'ms58704441'],
  ['stripe-verification', 'f88ef17321660a01bab1660454192e014defa29ba7b8de9633c69d6b4912217f'],
  ['facebook-domain-verification', '39xu4jzl7roi7x0n93ldkxjiaarx50'],
  ['MS', 'ms44452932'],
  ['MS', '6BF03E6AF5CB689E315FB6199603BABF2C88D805'],
  [
    'v',
    'spf1 ip4:192.30.252.0/22 include:_netblocks.google.com include:_netblocks2.google.com include:_netblocks3.google.com include:spf.protection.outlook.com include:mail.zendesk.com include:_spf.salesforce.com include:servers.mcsv.net ip4:166.78.69.169 ip4:166.78.69.170 ip4:166.78.71.131 ip4:167.89.101.2 ip4:167.89.101.192/28 ip4:192.254.112.60 ip4:192.254.112.98/31 ip4:192.254.113.10 ip4:192.254.113.101 ip4:192.254.114.176 ip4:62.253.227.114 ~all',
  ],
]

const tableColumns: TableColumnDefinition<string[]>[] = [
  createTableColumn<string[]>({
    columnId: 'field',
    compare: (a, b) => a.at(0)?.localeCompare(b.at(0) ?? '') ?? 0,
    renderHeaderCell: () => 'Field',
    renderCell: (item) => <TableCellLayout appearance="primary">{item.at(0)}</TableCellLayout>,
  }),
  createTableColumn<string[]>({
    columnId: 'value',
    compare: (a, b) => a.at(1)?.localeCompare(b.at(1) ?? '') ?? 0,
    renderHeaderCell: () => 'Value',
    renderCell: (item) => item.at(1),
  }),
]

const DnsLookupResultsCard = () => {
  const styles = useStyles()
  useActionData()

  return (
    <Card className={styles.marginTop} style={{ width: 'fit-content', margin: 'auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '16px' }}>
        <Text as="p">
          <b>Type:</b> TXT
        </Text>
        <Text as="p">
          <b>TTL:</b> 1800
        </Text>
        <Text as="p">
          <b>Host:</b> enet.api.github.com
        </Text>
      </div>

      <Text as="p">
        <b>Data:</b>
      </Text>

      <List as="ul" style={{ overflowX: 'auto' }}>
        {tableItems.map((item, index) => (
          <Fragment key={index}>
            {index !== 0 && <hr className={styles.divider} />}

            <ListItem key={index} style={{ marginTop: '8px' }}>
              <b style={{ fontWeight: '600' }}>{item.at(0)}:</b>
              <br />
              <span style={{ overflowWrap: 'anywhere' }}>{item.at(1)}</span>
            </ListItem>
          </Fragment>
        ))}
      </List>

      <div className={styles.table} style={{ display: 'none' }}>
        <DataGrid sortable items={tableItems} columns={tableColumns}>
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<DnsRecord>>
            {({ item, rowId }) => (
              <DataGridRow<DnsRecord> key={rowId}>
                {({ renderCell }) => <DataGridCell> {renderCell(item)}</DataGridCell>}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </div>
    </Card>
  )
}

export default DnsLookupResultsCard
