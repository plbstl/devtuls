import { useState } from 'react'
import { Button, makeStyles, Tab, TabList, type TabListProps } from '@fluentui/react-components'
import { useMatch } from 'react-router-dom'
import Link from '~/components/Link'

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '50px 20px',
    rowGap: '20px',
  },
  tabName: {
    ':hover': { textDecoration: 'none' },
    ':active': { textDecoration: 'none' },
    ':focus': { textDecoration: 'none' },
  },
})

const ToolRoute = (props: Partial<TabListProps>) => {
  const styles = useStyles()
  const matchedTool = useMatch(':tool')?.params.tool
  const matchParams = useMatch(':tool/:tab')?.params
  const defaultSelected = matchParams?.tab ?? 'tool'
  const baseHref = matchedTool || matchParams?.tool ? `/${matchedTool ?? matchParams?.tool}` : ''
  const [count, setCount] = useState(0)

  return (
    <div className={styles.root}>
      <TabList {...props} defaultSelectedValue={defaultSelected}>
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

      <div>
        {defaultSelected === 'tool' && (
          <Button
            onClick={() => {
              setCount((count) => count + 1)
            }}
          >
            count is {count}
          </Button>
        )}
        {defaultSelected === 'docs' && 'Documentation'}
        {defaultSelected === 'changelog' && 'Changelog'}
      </div>
    </div>
  )
}

export { ToolRoute as Component }
