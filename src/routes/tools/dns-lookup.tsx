import { useState } from 'react'
import { Body1, Button, makeStyles, Tab, TabList, Text, Title2, tokens } from '@fluentui/react-components'
import { useLoaderData, useMatch } from 'react-router-dom'
import Link from '~/components/Link'

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
  const loaderData = useLoaderData()
  const styles = useStyles()
  const matchedTool = useMatch(':tool')?.params.tool
  const matchParams = useMatch(':tool/:tab')?.params
  const defaultSelected = matchParams?.tab ?? 'tool'
  const baseHref = matchedTool || matchParams?.tool ? `/${matchedTool ?? matchParams?.tool}` : ''
  const [count, setCount] = useState(0)

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

        <TabList className={styles.headingTabs} defaultSelectedValue={defaultSelected}>
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
        {defaultSelected === 'tool' && (
          <div style={{ padding: '1rem' }}>
            <Button
              onClick={() => {
                setCount((count) => count + 1)
              }}
            >
              count is {count}
            </Button>

            <div style={{ padding: '1rem' }}>
              <Text as="pre">{JSON.stringify(loaderData, null, 2)}</Text>
            </div>
          </div>
        )}
        {defaultSelected === 'docs' && 'Documentation'}
        {defaultSelected === 'changelog' && 'Changelog'}
      </div>
    </div>
  )
}

export { DnsLookupRoute as Component }
