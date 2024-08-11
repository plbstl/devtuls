import {
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
  TableColumnDefinition,
  TableColumnSizingOptions,
  Text,
  tokens,
} from '@fluentui/react-components'
import {
  AppsListDetailRegular,
  ArrowRepeatAllRegular,
  DeleteRegular,
  DocumentCheckmarkRegular,
  DocumentDismissRegular,
} from '@fluentui/react-icons'

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
    compare: (a, b) => b.status.localeCompare(a.status), // success is first in ascending order.
    renderHeaderCell: () => <Text aria-label="Status">-</Text>,
    renderCell: (item) => (
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton
            aria-label="Show row options"
            appearance="subtle"
            style={{ marginLeft: '-2px' }}
            icon={
              item.status === 'success' ? (
                <DocumentCheckmarkRegular color={tokens.colorPaletteLightGreenForeground3} />
              ) : (
                <DocumentDismissRegular color={tokens.colorPaletteRedBackground3} />
              )
            }
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
  container: {
    marginTop: tokens.spacingVerticalXXXL,
    overflowX: 'scroll',
  },
  cell: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
})

const DnsLookupResults = () => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
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
                  <Text className={styles.cell}>{renderCell(item)}</Text>
                </DataGridCell>
              )}
            </DataGridRow>
          )}
        </DataGridBody>
      </DataGrid>
    </div>
  )
}

export default DnsLookupResults
