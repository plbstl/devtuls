import { makeStyles, Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-components'
import { AppsListDetailRegular, ArrowRepeatAllRegular, DeleteRegular, MoreHorizontalRegular } from '@fluentui/react-icons'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '~/utils/use-local-storage'
import { useSearchParams } from '~/utils/use-search-params'
import type { DnsLookupResult } from './dns-lookup-results-history'

interface RowOptionsMenuProps {
  input: DnsLookupResult['input']
  timestamp: DnsLookupResult['timestamp']
}

const useStyles = makeStyles({
  trigger: {
    marginLeft: '-1.5px',
  },
})

const RowOptionsMenu = ({ input, timestamp }: RowOptionsMenuProps) => {
  const styles = useStyles()
  const navigate = useNavigate()
  const [, setViewedDnsLookupHistoryTimestamp] = useLocalStorage('viewedDnsLookupHistoryTimestamp')
  const [dnsLookupHistory, setDnsLookupHistory] = useLocalStorage<DnsLookupResult[]>('dnsLookupHistory', [])
  const [searchParams] = useSearchParams()

  const handleViewDetailsClick = () => {
    setViewedDnsLookupHistoryTimestamp(timestamp)
  }

  const handleLoadInputClick = () => {
    const name = `name=${input.domainName}`
    const url = input.serviceUrl ? `&url=${input.serviceUrl}` : ''
    const type = input.resourceRecordType ? `&type=${input.resourceRecordType}` : ''
    const cd = input.disableValidation ? `&cd=${input.disableValidation}` : ''
    const d0 = input.receiveDnssecData ? `&do=${input.receiveDnssecData}` : ''
    const config = searchParams.get('config') ? `&config=${searchParams.get('config')}` : ''

    const newSearchParamsString = `${name}${url}${type}${cd}${d0}${config}`
    if (newSearchParamsString === searchParams.toString()) return
    navigate(`/dns-lookup?${newSearchParamsString}`)
  }

  const handleRemoveEntryClick = () => {
    setDnsLookupHistory(dnsLookupHistory.filter((singleItem) => singleItem.timestamp !== timestamp))
  }

  return (
    <Menu>
      <MenuTrigger>
        <MenuButton
          aria-label="Show row options"
          appearance="subtle"
          icon={<MoreHorizontalRegular />}
          className={styles.trigger}
        />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem icon={<AppsListDetailRegular />} onClick={handleViewDetailsClick}>
            View details
          </MenuItem>
          <MenuItem icon={<ArrowRepeatAllRegular />} onClick={handleLoadInputClick}>
            Load input
          </MenuItem>
          <MenuItem icon={<DeleteRegular />} onClick={handleRemoveEntryClick}>
            Remove entry
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export default RowOptionsMenu
