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
import type { DnsLookupInput } from '~/lib/dns-lookup'
import useLocalStorage from '~/utils/use-local-storage'
import RowOptionsMenu from './row-options-menu'

export interface DnsRecord {
  status: 'success' | 'error'
  type: string
  host: string
  result: string
  service: string
  timestamp: number
  input: Partial<DnsLookupInput>
}

const columns: TableColumnDefinition<DnsRecord>[] = [
  createTableColumn<DnsRecord>({
    columnId: 'options',
    renderHeaderCell: () => <Text aria-label="Options" />,
    renderCell: (item) => <RowOptionsMenu input={item.input} timestamp={item.timestamp} />,
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
  options: { minWidth: 45, idealWidth: 50 },
  type: { minWidth: 70, idealWidth: 90 },
  host: { minWidth: 150, idealWidth: 180 },
  result: { minWidth: 280, idealWidth: 300 },
  service: { minWidth: 250, idealWidth: 280 },
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
  const [items] = useLocalStorage('items', [])

  return (
    <div className={styles.table}>
      <DataGrid
        sortable
        resizableColumns
        focusMode="composite"
        items={items}
        columns={columns}
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
  )
}

export default DnsLookupResultsHistory
