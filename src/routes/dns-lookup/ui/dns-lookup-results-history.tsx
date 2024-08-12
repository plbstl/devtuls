import {
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  makeStyles,
  TableCellLayout,
  TableColumnDefinition,
  TableColumnSizingOptions,
  Text,
  tokens,
} from '@fluentui/react-components'
import RelativeTime from '~/components/RelativeTime'
import type { DnsLookupInput } from '~/lib/dns-lookup'
import useLocalStorage from '~/utils/use-local-storage'
import RowOptionsMenu from './row-options-menu'

export interface DnsLookupResult {
  input: DnsLookupInput
  results: { name: string; type: number; TTL?: number; data: string }[]
  resultError: boolean
  serviceUsed: string
  timestamp: number
}

const columns: TableColumnDefinition<DnsLookupResult>[] = [
  createTableColumn<DnsLookupResult>({
    columnId: 'options',
    renderHeaderCell: () => <Text aria-label="Options" />,
    renderCell: (item) => <RowOptionsMenu input={item.input} timestamp={item.timestamp} />,
  }),
  createTableColumn<DnsLookupResult>({
    columnId: 'type',
    compare: (a, b) => a.input.resourceRecordType.localeCompare(b.input.resourceRecordType),
    renderHeaderCell: () => 'Type',
    renderCell: (item) => item.input.resourceRecordType || 'A',
  }),
  createTableColumn<DnsLookupResult>({
    columnId: 'host',
    compare: (a, b) => a.input.domainName.localeCompare(b.input.domainName),
    renderHeaderCell: () => 'Host',
    renderCell: (item) => item.input.domainName || '-',
  }),
  createTableColumn<DnsLookupResult>({
    columnId: 'results',
    renderHeaderCell: () => 'Results',
    renderCell: (item) => (
      <>
        {item.resultError && <b style={{ color: tokens.colorStatusDangerForeground1 }}>ERROR:</b>}{' '}
        {item.results.map(({ data }) => data).join(', ') || '-'}
      </>
    ),
  }),
  createTableColumn<DnsLookupResult>({
    columnId: 'serviceUsed',
    compare: (a, b) => a.serviceUsed.localeCompare(b.serviceUsed),
    renderHeaderCell: () => 'Service Used',
    renderCell: (item) => item.serviceUsed,
  }),
  createTableColumn<DnsLookupResult>({
    columnId: 'timestamp',
    compare: (a, b) => a.timestamp.toString().localeCompare(b.timestamp.toString()),
    renderHeaderCell: () => 'Timestamp',
    renderCell: (item) => <RelativeTime timestamp={item.timestamp} />,
  }),
]

const columnSizingOptions: TableColumnSizingOptions = {
  options: { minWidth: 45, idealWidth: 50 },
  type: { minWidth: 70, idealWidth: 90 },
  host: { minWidth: 150, idealWidth: 180 },
  results: { minWidth: 280, idealWidth: 300 },
  serviceUsed: { minWidth: 250, idealWidth: 280 },
  timestamp: { minWidth: 170, idealWidth: 190 },
}

const useStyles = makeStyles({
  table: {
    marginTop: tokens.spacingVerticalXXXL,
    overflowX: 'scroll',
  },
})

const DnsLookupResultsHistory = () => {
  const styles = useStyles()
  const [dnsLookupHistory] = useLocalStorage('dnsLookupHistory', [])

  if (!dnsLookupHistory.length) return null

  return (
    <div className={styles.table}>
      <DataGrid
        sortable
        resizableColumns
        focusMode="composite"
        items={dnsLookupHistory}
        columns={columns}
        columnSizingOptions={columnSizingOptions}
      >
        <DataGridHeader>
          <DataGridRow>
            {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
          </DataGridRow>
        </DataGridHeader>
        <DataGridBody<DnsLookupResult>>
          {({ item, rowId }) => (
            <DataGridRow<DnsLookupResult> key={rowId}>
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
  )
}

export default DnsLookupResultsHistory
