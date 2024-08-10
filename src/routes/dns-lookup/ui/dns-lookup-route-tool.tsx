import { useEffect, useState } from 'react'
import { Button, Field, Input, makeStyles, Spinner, tokens } from '@fluentui/react-components'
import { GlobeSearchFilled } from '@fluentui/react-icons'
import { Form, useLoaderData, useNavigation } from 'react-router-dom'
import type { DnsLookupLoaderData } from '../page.router'

const useStyles = makeStyles({
  container: {
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
  },
  domainNameField: {
    margin: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalXXS}`,
  },
  domainNameInput: {
    animationDuration: '2s',
    animationTimingFunction: tokens.curveEasyEase,
    animationIterationCount: 'infinite',
  },
  submitBtnContainer: {
    margin: 'auto',
    marginTop: tokens.spacingVerticalL,
    width: 'fit-content',
  },
})

function DnsLookupRouteTool() {
  const styles = useStyles()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const [domainName, setDomainName] = useState(loaderData.domainName)

  // Allow browser history to update form values.
  useEffect(() => {
    setDomainName(loaderData.domainName)
  }, [loaderData.domainName])

  return (
    <div className={styles.container}>
      <Form id="dnsLookup" method="POST">
        <Field label="Domain Name" size="large" className={styles.domainNameField}>
          <Input
            form="dnsLookup"
            name="name"
            placeholder="github.com, google.com"
            contentBefore={<GlobeSearchFilled />}
            value={domainName}
            onChange={(_, { value }) => {
              setDomainName(value)
            }}
            className={styles.domainNameInput}
            style={{ animationName: submitting ? 'pulse' : 'none' }}
          />
        </Field>

        <div>Tool Config</div>

        <div className={styles.submitBtnContainer}>
          <Button type="submit">
            {submitting ? <Spinner label="Submitting" appearance="inverted" size="extra-tiny" /> : 'Submit'}
          </Button>
        </div>
      </Form>

      <div>Tool Output</div>
    </div>
  )
}

export default DnsLookupRouteTool
