import { useEffect, useState, type FormEvent } from 'react'
import { Button, Field, Input, makeStyles, Spinner, tokens } from '@fluentui/react-components'
import { GlobeSearchFilled } from '@fluentui/react-icons'
import { Form, useLoaderData, useNavigation, useSubmit } from 'react-router-dom'
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
  const submit = useSubmit()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const [domainName, setDomainName] = useState(loaderData.domainName)

  // Allow browser history to update form values.
  useEffect(() => {
    setDomainName(loaderData.domainName)
  }, [loaderData.domainName])

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    // We are staying on the same page after the form's action is done executing.
    // Do not disable any form element so focus can remain on the submit button.
    // Just ignore if the user continues to click while submitting.
    if (submitting) return
    // Extract relevant fields from the loader data.
    const submitData = { ...loaderData }
    delete submitData.openToolConfig
    // Submit form data to the route action. Everything is executed in the browser.
    submit(submitData, {
      encType: 'application/json',
      method: 'POST',
      preventScrollReset: true,
    })
  }

  return (
    <div className={styles.container}>
      <Form id="dnsLookup" method="POST" onSubmit={handleSubmit}>
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
