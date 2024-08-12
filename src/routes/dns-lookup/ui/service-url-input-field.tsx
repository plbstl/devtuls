import { useEffect, useState } from 'react'
import {
  Button,
  Field,
  Input,
  makeStyles,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Text,
  tokens,
} from '@fluentui/react-components'
import { DatabaseLinkFilled } from '@fluentui/react-icons'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { dohResolvers } from '~/lib/dns-lookup'
import { useSearchParams } from '~/utils/use-search-params'
import type { DnsLookupLoaderData } from '../page.router'

const useStyles = makeStyles({
  input: {
    animationDuration: '2s',
    animationTimingFunction: tokens.curveEasyEase,
    animationIterationCount: 'infinite',
  },
  menuButton: {
    margin: '0.15rem -0.2rem',
  },
  menuSecondaryText: {
    color: tokens.colorNeutralForeground4,
    fontSize: tokens.fontSizeBase200,
  },
})

function ServiceUrlInputField() {
  const styles = useStyles()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const [, setSearchParam] = useSearchParams()
  // Controlled input is needed so that the caret movement is predictable, as we are syncing with search params.
  const [serviceUrl, setServiceUrl] = useState(loaderData.serviceUrl)

  // Allow browser history to update form values.
  useEffect(() => {
    setServiceUrl(loaderData.serviceUrl)
  }, [loaderData.serviceUrl])

  return (
    <Field label="DNS-Over-HTTPS service URL" size="small">
      <Input
        form="dnsLookup"
        name="url"
        placeholder={dohResolvers.Google}
        autoComplete="off"
        contentAfter={<DnsServiceOptions />}
        value={serviceUrl}
        onChange={(_, { value }) => {
          setServiceUrl(value)
          setSearchParam('url', value)
        }}
        className={styles.input}
        style={{ animationName: submitting ? 'pulse' : 'none' }}
      />
    </Field>
  )
}

function DnsServiceOptions() {
  const styles = useStyles()
  const [, setSearchParam] = useSearchParams()

  const setUrlSearchParamTo = (value: string) => () => {
    setSearchParam('url', value)
  }

  return (
    <Menu>
      <MenuTrigger>
        <Button icon={<DatabaseLinkFilled />} className={styles.menuButton} />
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem onClick={setUrlSearchParamTo('gg')}>
            <Text block>Google Public DNS</Text>
            <Text className={styles.menuSecondaryText}>Google Public DNS</Text>
          </MenuItem>
          <MenuItem onClick={setUrlSearchParamTo('cf')}>
            <Text block>Cloudflare DNS</Text>
            <Text className={styles.menuSecondaryText}>Default Security</Text>
          </MenuItem>
          <MenuItem onClick={setUrlSearchParamTo('cfm')}>
            <Text block>Cloudflare DNS Families (Malware)</Text>
            <Text className={styles.menuSecondaryText}>Block malicious content</Text>
          </MenuItem>
          <MenuItem onClick={setUrlSearchParamTo('cfa')}>
            <Text block>Cloudflare DNS Families (Malware/Adult)</Text>
            <Text className={styles.menuSecondaryText}>Block malicious and adult content</Text>
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export default ServiceUrlInputField
