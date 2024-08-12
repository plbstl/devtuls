import { Fragment } from 'react/jsx-runtime'
import { Body1, makeStyles, mergeClasses, Tab, TabList, Title2, tokens, Tooltip } from '@fluentui/react-components'
import { HomeMoreFilled } from '@fluentui/react-icons'
import Markdown from 'markdown-to-jsx'
import { useMatch } from 'react-router-dom'
import Link from '~/components/Link'
import changelog from '~/lib/dns-lookup.CHANGELOG.md?raw'
import docs from '~/lib/dns-lookup.docs.md?raw'
import DnsLookupRouteTool from './ui/dns-lookup-route-tool'

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
  goHome: {
    marginLeft: 'auto',
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
          <Link href="/" appearance="subtle" className={mergeClasses(styles.tabName, styles.goHome)}>
            <Tab value="home">
              <Tooltip content="Home page" relationship="label">
                <HomeMoreFilled fontSize={18} />
              </Tooltip>
            </Tab>
          </Link>
        </TabList>
      </div>

      {defaultSelected === 'tool' && <DnsLookupRouteTool />}

      <div className="prose">
        {defaultSelected === 'docs' && <Markdown options={{ wrapper: Fragment }}>{docs}</Markdown>}
        {defaultSelected === 'changelog' && <Markdown>{changelog}</Markdown>}
      </div>
    </div>
  )
}

export { DnsLookupRoute as Component }
