import { makeStyles, Switch, tokens } from '@fluentui/react-components'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { useSearchParams } from '~/utils/use-search-params'
import type { DnsLookupLoaderData } from '../page.router'

const useStyles = makeStyles({
  container: {
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalL,
  },
  switchRoot: {
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: tokens.fontSizeBase200,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}`,
  },
  switchIndicator: {
    margin: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXXS}`,
    animationDuration: '2s',
    animationTimingFunction: tokens.curveEasyEase,
    animationIterationCount: 'infinite',
  },
})

function ValidationAndDnssecDataSwitchInputs() {
  const styles = useStyles()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const [, setSearchParam] = useSearchParams()

  const configs = [
    { name: 'cd', checked: loaderData.disableValidation, label: 'Disable validation' },
    { name: 'do', checked: loaderData.receiveDnssecData, label: 'Receive DNSSEC data' },
  ]

  return (
    // Todo: use flex-gap - marginLeft: tokens.spacingHorizontalL
    <div className={styles.container}>
      {configs.map((config) => (
        <Switch
          key={config.name}
          form="dnsLookup"
          name={config.name}
          checked={config.checked}
          onChange={(ev, data) => {
            setSearchParam(ev.target.name, data.checked ? '1' : '0')
          }}
          className={styles.switchRoot}
          label={{
            children: config.label,
            className: styles.switchLabel,
          }}
          indicator={{
            className: styles.switchIndicator,
            style: { animationName: submitting ? 'pulse' : 'none' },
          }}
        />
      ))}
    </div>
  )
}

export default ValidationAndDnssecDataSwitchInputs
