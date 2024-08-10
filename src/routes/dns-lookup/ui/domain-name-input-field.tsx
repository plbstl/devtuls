import { useEffect, useState } from 'react'
import { Field, Input, makeStyles, tokens } from '@fluentui/react-components'
import { GlobeSearchFilled } from '@fluentui/react-icons'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { useSearchParams } from '~/utils/use-search-params'
import type { DnsLookupLoaderData } from '../page.router'

const useStyles = makeStyles({
  label: {
    margin: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalXXS}`,
  },
  input: {
    animationDuration: '2s',
    animationTimingFunction: tokens.curveEasyEase,
    animationIterationCount: 'infinite',
  },
})

function DomainNameInputField() {
  const styles = useStyles()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const [, setSearchParams] = useSearchParams()
  // Controlled input is needed so that the caret movement is predictable, as we are syncing with search params.
  const [domainName, setDomainName] = useState(loaderData.domainName)

  // Allow browser history to update form values.
  useEffect(() => {
    setDomainName(loaderData.domainName)
  }, [loaderData.domainName])

  return (
    <Field label="Domain Name" size="large" className={styles.label}>
      <Input
        form="dnsLookup"
        name="name"
        placeholder="github.com, google.com"
        contentBefore={<GlobeSearchFilled />}
        value={domainName}
        onChange={(_, { value }) => {
          setDomainName(value)
          setSearchParams('name', value)
        }}
        className={styles.input}
        style={{ animationName: submitting ? 'pulse' : 'none' }}
      />
    </Field>
  )
}

export default DomainNameInputField
