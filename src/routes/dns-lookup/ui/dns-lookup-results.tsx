import { makeStyles, tokens } from '@fluentui/react-components'
import DnsLookupResultCard from './dns-lookup-result-card'
import DnsLookupResultsHistory from './dns-lookup-results-history'
import { items } from './tmp-items'

const useStyles = makeStyles({
  results: {
    marginTop: tokens.spacingVerticalXXXL,
  },
})

const DnsLookupResults = () => {
  const styles = useStyles()

  localStorage.setItem('items', JSON.stringify(items))

  return (
    <div className={styles.results}>
      <DnsLookupResultCard />
      <DnsLookupResultsHistory />
    </div>
  )
}

export default DnsLookupResults
