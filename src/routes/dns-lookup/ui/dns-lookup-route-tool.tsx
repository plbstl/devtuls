import type { FormEvent } from 'react'
import { makeStyles, tokens } from '@fluentui/react-components'
import { Form, useLoaderData, useNavigation, useSubmit } from 'react-router-dom'
import type { DnsLookupLoaderData } from '../page.router'
import ConfigurationAccordion from './configuration-accordion'
import DnsLookupResults from './dns-lookup-results'
import DomainNameInputField from './domain-name-input-field'
import SubmitButton from './submit-button'

const useStyles = makeStyles({
  container: {
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
  },
})

function DnsLookupRouteTool() {
  const styles = useStyles()
  const submit = useSubmit()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

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
        <DomainNameInputField />
        <ConfigurationAccordion />
        <SubmitButton />
      </Form>

      <DnsLookupResults />
    </div>
  )
}

export default DnsLookupRouteTool
