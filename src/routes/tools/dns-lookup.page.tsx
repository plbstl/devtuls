import { Body1, makeStyles, Tab, TabList, Title2, tokens } from '@fluentui/react-components'
import { useMatch } from 'react-router-dom'
import Link from '~/components/Link'
import DnsLookupRouteTool from './dns-lookup.tool'

const useStyles = makeStyles({
  headingContainer: {
    backgroundColor: tokens.colorNeutralBackground2,
    color: tokens.colorNeutralForeground2,
    paddingTop: tokens.spacingVerticalS,
    paddingLeft: tokens.spacingVerticalXS,
  },
  headingText: {
    padding: '0.75rem',
  },
  headingDescription: {
    marginTop: tokens.spacingVerticalS,
  },
  headingTabs: {
    marginTop: tokens.spacingVerticalXXS,
  },
  tabName: {
    ':hover': { textDecoration: 'none' },
    ':active': { textDecoration: 'none' },
    ':focus': { textDecoration: 'none' },
  },
})

const DnsLookupRoute = () => {
  const styles = useStyles()
  const matchedTool = useMatch(':tool')?.params.tool
  const matchParams = useMatch(':tool/:tab')?.params
  const defaultSelected = matchParams?.tab ?? 'tool'
  const baseHref = matchedTool || matchParams?.tool ? `/${matchedTool ?? matchParams?.tool}` : ''

  return (
    <div>
      <div className={styles.headingContainer}>
        <div className={styles.headingText}>
          <Title2 as="h1" block>
            DNS Lookup
          </Title2>
          <Body1 as="p" block className={styles.headingDescription}>
            Query any DNS resolver service that supports DNS-over-HTTPS and JSON queries.
          </Body1>
        </div>

        <TabList className={styles.headingTabs} selectedValue={defaultSelected}>
          <Link href={baseHref} appearance="subtle" className={styles.tabName}>
            <Tab value="tool">Tool</Tab>
          </Link>
          <Link href={`${baseHref}/docs`} appearance="subtle" className={styles.tabName}>
            <Tab value="docs">Docs</Tab>
          </Link>
          <Link href={`${baseHref}/changelog`} appearance="subtle" className={styles.tabName}>
            <Tab value="changelog">Changelog</Tab>
          </Link>
        </TabList>
      </div>

      <div>
        {defaultSelected === 'tool' && <DnsLookupRouteTool />}
        {defaultSelected === 'docs' && 'Documentation'}
        {defaultSelected === 'changelog' && 'Changelog'}
      </div>
    </div>
  )
}

export { DnsLookupRoute as Component }
