/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { useEffect, useState, type FormEvent } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Combobox,
  Field,
  Input,
  Option,
  Switch,
} from '@fluentui/react-components'
import { GlobeSearchFilled, SettingsRegular } from '@fluentui/react-icons'
import { Form, useLoaderData, useNavigation, useSubmit } from 'react-router-dom'
import { useSearchParam } from '~/utils/use-search-param'
import { DnsLookupLoaderData } from './dns-lookup.lib'

function DnsLookupRouteTool() {
  const submit = useSubmit()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  // Controlled input is needed so that the caret movement is predictable, as we are syncing with search params.
  const [domainName, setDomainName] = useState(loaderData.domainName)
  const [serviceUrl, setServiceUrl] = useState(loaderData.serviceUrl)
  const [resourceRecordType, setResourceRecordType] = useState(loaderData.resourceRecordType)
  const [disableValidation, setDisableValidation] = useState(loaderData.disableValidation)
  const [receiveDnssecData, setReceiveDnssecData] = useState(loaderData.receiveDnssecData)
  const [, setNameSearchParam] = useSearchParam('name')
  const [, setUrlSearchParam] = useSearchParam('url')
  const [, setTypeSearchParam] = useSearchParam('type')
  const [, setCdSearchParam] = useSearchParam('cd')
  const [, setDoSearchParam] = useSearchParam('do')

  // Allow browser history to update value.
  useEffect(() => setDomainName(loaderData.domainName), [loaderData.domainName])
  useEffect(() => setServiceUrl(loaderData.serviceUrl), [loaderData.serviceUrl])
  useEffect(() => setResourceRecordType(loaderData.resourceRecordType), [loaderData.resourceRecordType])
  useEffect(() => setDisableValidation(loaderData.disableValidation), [loaderData.disableValidation])
  useEffect(() => setReceiveDnssecData(loaderData.receiveDnssecData), [loaderData.receiveDnssecData])

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    // We are staying on the same page after the form's action is done executing.
    // Do not disable any form element so focus can remain on the submit button.
    // Just ignore if the user continues to click while submitting.
    if (submitting) return
    // Submit to the route action. Everything is executed in the browser.
    submit(JSON.stringify(loaderData), {
      encType: 'application/json',
      method: 'POST',
      preventScrollReset: true,
    })
  }

  return (
    <div style={{ padding: '1rem' }}>
      <Form id="dnsLookup" method="POST" onSubmit={handleSubmit}>
        <Field
          label="Domain Name"
          hint="Must be between 1 and 253 characters long."
          size="large"
          style={{
            margin: '0.75rem 0.15rem',
          }}
        >
          <Input
            form="dnsLookup"
            name="name"
            placeholder="devtuls.com, google.com"
            contentBefore={<GlobeSearchFilled />}
            readOnly={submitting}
            value={domainName}
            onChange={(_, { value }) => {
              setDomainName(value)
              setNameSearchParam(value)
            }}
          />
        </Field>

        <div>
          <Accordion collapsible>
            <AccordionItem value="1">
              <AccordionHeader expandIconPosition="end" icon={<SettingsRegular />}>
                Configuration
              </AccordionHeader>
              <AccordionPanel>
                <Field label="DNS-Over-HTTPS server URL">
                  <Combobox form="dnsLookup" name="url" readOnly={submitting} freeform clearable>
                    <Option>Option 1</Option>
                    <Option>Option 2</Option>
                    <Option>Option 3</Option>
                  </Combobox>
                </Field>
                <Field label="Resource Record (RR) type">
                  <Combobox form="dnsLookup" name="type" readOnly={submitting} freeform clearable>
                    <Option>Option 1</Option>
                    <Option>Option 2</Option>
                    <Option>Option 3</Option>
                  </Combobox>
                </Field>
                <div>
                  <Switch
                    form="dnsLookup"
                    name="cd"
                    label="Disable validation"
                    readOnly={submitting}
                    checked={disableValidation}
                    onChange={(_, { checked }) => {
                      setDisableValidation(checked)
                      setCdSearchParam(checked ? '1' : '0')
                    }}
                  />
                  <Switch
                    form="dnsLookup"
                    name="do"
                    label="Receive DNSSEC data"
                    readOnly={submitting}
                    checked={receiveDnssecData}
                    onChange={(_, { checked }) => {
                      setReceiveDnssecData(checked)
                      setDoSearchParam(checked ? '1' : '0')
                    }}
                  />
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div style={{ margin: 'auto', marginTop: '1rem', width: 'fit-content' }}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  )
}

export default DnsLookupRouteTool
