import { makeStyles, tokens } from '@fluentui/react-components'
import DnsLookupResultsCard from './dns-lookup-results-card'
import DnsLookupResultsHistory from './dns-lookup-results-history'

const useStyles = makeStyles({
  results: {
    marginTop: tokens.spacingVerticalXXXL,
  },
})

const DnsLookupResults = () => {
  const styles = useStyles()

  return (
    <div className={styles.results}>
      <DnsLookupResultsCard />
      <DnsLookupResultsHistory />
    </div>
  )
}

export default DnsLookupResults
