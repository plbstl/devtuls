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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  mergeClasses,
  shorthands,
  TableCellLayout,
  TableColumnDefinition,
  TableColumnSizingOptions,
  Text,
  tokens,
} from '@fluentui/react-components'
import { AppsListDetailRegular, ArrowRepeatAllRegular, DeleteRegular, MoreHorizontalRegular } from '@fluentui/react-icons'
import { List, ListItem } from '@fluentui/react-list-preview'

interface DnsRecord {
  status: 'success' | 'error'
  type: string
  host: string
  result: string
  service: string
  timestamp: number
}

const items: DnsRecord[] = [
  {
    status: 'success',
    type: 'TXT',
    host: 'api.github.com',
    result: 'ns-1707.awsdns-21.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400',
    service: 'Google Public DNS',
    timestamp: 1,
  },
  {
    status: 'success',
    type: 'A',
    host: 'plbstl.github.io',
    result: '185.199.110.153, 185.199.108.153, 185.199.109.153, 185.199.111.153',
    service: 'https://dns.custom-query/json',
    timestamp: 2,
  },
  {
    status: 'error',
    type: 'NS',
    host: 'google.com',
    result: 'Your client has issued a malformed or illegal request. Invalid query name: ‘’.',
    service: 'Cloudflare Families (Malware/Adult)',
    timestamp: 3,
  },
  {
    status: 'success',
    type: 'MX',
    host: 'https://dns-long-dn-name.custom-domain-long-name.co.cu',
    result: 'ns1.etecsa.net. admin.enet.cu. 2024080900 7200 1800 1209600 2000',
    service: 'Cloudflare DNS',
    timestamp: 4,
  },
  {
    status: 'success',
    type: 'TXT',
    host: 'api.github.com',
    result: 'ns-1707.awsdns-21.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400',
    service: 'Google Public DNS',
    timestamp: 5,
  },
  {
    status: 'success',
    type: 'A',
    host: 'plbstl.github.io',
    result: '185.199.110.153, 185.199.108.153, 185.199.109.153, 185.199.111.153',
    service: 'https://dns.custom-query/json',
    timestamp: 6,
  },
  {
    status: 'error',
    type: 'NS',
    host: 'google.com',
    result: 'Your client has issued a malformed or illegal request. Invalid query name: ‘’.',
    service: 'Cloudflare Families (Malware/Adult)',
    timestamp: 7,
  },
  {
    status: 'success',
    type: 'MX',
    host: 'https://dns-long-dn-name.custom-domain-long-name.co.cu',
    result: 'ns1.etecsa.net. admin.enet.cu. 2024080900 7200 1800 1209600 2000',
    service: 'Cloudflare DNS',
    timestamp: 8,
  },
  {
    status: 'success',
    type: 'TXT',
    host: 'api.github.com',
    result: 'ns-1707.awsdns-21.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400',
    service: 'Google Public DNS',
    timestamp: 9,
  },
  {
    status: 'success',
    type: 'A',
    host: 'plbstl.github.io',
    result: '185.199.110.153, 185.199.108.153, 185.199.109.153, 185.199.111.153',
    service: 'https://dns.custom-query/json',
    timestamp: 10,
  },
  {
    status: 'error',
    type: 'NS',
    host: 'google.com',
    result: 'Your client has issued a malformed or illegal request. Invalid query name: ‘’.',
    service: 'Cloudflare Families (Malware/Adult)',
    timestamp: 11,
  },
  {
    status: 'success',
    type: 'MX',
    host: 'https://dns-long-dn-name.custom-domain-long-name.co.cu',
    result: 'ns1.etecsa.net. admin.enet.cu. 2024080900 7200 1800 1209600 2000',
    service: 'Cloudflare DNS',
    timestamp: 12,
  },
]

const columns: TableColumnDefinition<DnsRecord>[] = [
  createTableColumn<DnsRecord>({
    columnId: 'status',
    renderHeaderCell: () => <Text aria-label="Options" />,
    renderCell: () => (
      <Menu>
        <MenuTrigger>
          <MenuButton
            aria-label="Show row options"
            appearance="subtle"
            style={{ marginLeft: '-2px' }}
            icon={<MoreHorizontalRegular />}
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem icon={<AppsListDetailRegular />}>View details</MenuItem>
            <MenuItem icon={<ArrowRepeatAllRegular />}>Load input</MenuItem>
            <MenuItem icon={<DeleteRegular />}>Remove entry</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    ),
  }),
  createTableColumn<DnsRecord>({
    columnId: 'type',
    compare: (a, b) => a.type.localeCompare(b.type),
    renderHeaderCell: () => 'Type',
    renderCell: (item) => item.type,
  }),
  createTableColumn<DnsRecord>({
    columnId: 'host',
    compare: (a, b) => a.host.localeCompare(b.host),
    renderHeaderCell: () => 'Host',
    renderCell: (item) => item.host,
  }),
  createTableColumn<DnsRecord>({
    columnId: 'result',
    compare: (a, b) => a.result.localeCompare(b.result),
    renderHeaderCell: () => 'Result',
    renderCell: (item) => (
      <>
        {item.status === 'error' && <b style={{ color: tokens.colorStatusDangerForeground1 }}>ERROR:</b>} {item.result}
      </>
    ),
  }),
  createTableColumn<DnsRecord>({
    columnId: 'service',
    compare: (a, b) => a.service.localeCompare(b.service),
    renderHeaderCell: () => 'Service Used',
    renderCell: (item) => item.service,
  }),
  createTableColumn<DnsRecord>({
    columnId: 'timestamp',
    compare: (a, b) => a.timestamp.toString().localeCompare(b.timestamp.toString()),
    renderHeaderCell: () => 'Timestamp',
    renderCell: (item) => item.timestamp,
  }),
]

const columnSizingOptions: TableColumnSizingOptions = {
  status: {
    minWidth: 45,
    idealWidth: 50,
  },
  type: {
    minWidth: 70,
    idealWidth: 90,
  },
  host: {
    minWidth: 150,
    idealWidth: 180,
  },
  result: {
    minWidth: 280,
    idealWidth: 300,
  },
  service: {
    minWidth: 250,
    idealWidth: 280,
  },
  timestamp: {
    minWidth: 170,
    idealWidth: 190,
  },
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

const DnsLookupResults = () => {
  const styles = useStyles()

  return (
    <>
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
          {/* <ListItem>ns1.etecsa.net. admin.enet.cu. 2024080900 7200 1800 1209600 2000</ListItem> */}
          {/* <hr className={styles.divider} /> */}
          {/* <ListItem style={{ marginTop: '4px' }}>185.199.110.153</ListItem>
          <hr className={styles.divider} />
          <ListItem style={{ marginTop: '4px' }}>185.199.108.153</ListItem>
          <hr className={styles.divider} />
          <ListItem style={{ marginTop: '4px' }}>185.199.109.153</ListItem>
          <hr className={styles.divider} />
          <ListItem style={{ marginTop: '4px' }}>185.199.111.153</ListItem> */}

          {tableItems.map((item, index) => (
            <>
              {index !== 0 && <hr className={styles.divider} />}

              <ListItem key={index} style={{ marginTop: '8px' }}>
                <b style={{ fontWeight: '600' }}>{item.at(0)}:</b>
                <br />
                <span style={{ overflowWrap: 'anywhere' }}>{item.at(1)}</span>
              </ListItem>
            </>
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

      <div className={mergeClasses(styles.table, styles.marginTop)}>
        <DataGrid
          sortable
          resizableColumns
          items={items}
          columns={columns}
          focusMode="composite"
          columnSizingOptions={columnSizingOptions}
        >
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<DnsRecord>>
            {({ item, rowId }) => (
              <DataGridRow<DnsRecord> key={rowId}>
                {({ renderCell }) => (
                  <DataGridCell>
                    <TableCellLayout truncate>{renderCell(item)}</TableCellLayout>
                  </DataGridCell>
                )}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      </div>
    </>
  )
}

export default DnsLookupResults
