/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { ChangeEvent, useEffect, useState, type FormEvent } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Combobox,
  Field,
  Input,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Option,
  Spinner,
  Switch,
  Text,
  tokens,
} from '@fluentui/react-components'
import { DatabaseLinkFilled, DocumentSearchFilled, GlobeSearchFilled, SettingsRegular } from '@fluentui/react-icons'
import { Form, useLoaderData, useNavigation, useSubmit } from 'react-router-dom'
import { DNS_RESOURCE_RECORD_TYPES } from '~/utils/dns-rrt-types'
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
          size="large"
          style={{
            margin: '0.75rem 0.15rem',
          }}
        >
          <Input
            form="dnsLookup"
            name="name"
            placeholder="github.com, google.com"
            contentBefore={<GlobeSearchFilled />}
            value={domainName}
            onChange={(_, { value }) => {
              setDomainName(value)
              setNameSearchParam(value)
            }}
            style={{
              animationName: submitting ? 'pulse' : 'none',
              animationDuration: '2s',
              animationTimingFunction: tokens.curveEasyEase,
              animationIterationCount: 'infinite',
            }}
          />
        </Field>

        <div>
          <Accordion collapsible>
            <AccordionItem value="1">
              <AccordionHeader expandIconPosition="end" icon={<SettingsRegular />}>
                Configuration
              </AccordionHeader>
              <AccordionPanel style={{ padding: '0.15rem 0.15rem' }}>
                <Field label="DNS-Over-HTTPS service URL" size="small">
                  <Input
                    form="dnsLookup"
                    name="url"
                    placeholder="https://dns.google/resolve"
                    contentAfter={
                      <Menu>
                        <MenuTrigger>
                          <Button icon={<DatabaseLinkFilled />} style={{ margin: '0.15rem -0.2rem' }} />
                        </MenuTrigger>
                        <MenuPopover>
                          <MenuList>
                            <MenuItem onClick={() => setUrlSearchParam('gg')}>
                              <Text block>Google Public DNS</Text>
                              <Text style={{ color: tokens.colorNeutralForeground4, fontSize: tokens.fontSizeBase200 }}>
                                Google Public DNS
                              </Text>
                            </MenuItem>
                            <MenuItem onClick={() => setUrlSearchParam('cf')}>
                              <Text block>Cloudflare DNS</Text>
                              <Text style={{ color: tokens.colorNeutralForeground4, fontSize: tokens.fontSizeBase200 }}>
                                Default Security
                              </Text>
                            </MenuItem>
                            <MenuItem onClick={() => setUrlSearchParam('cfm')}>
                              <Text block>Cloudflare DNS Families (Malware)</Text>
                              <Text style={{ color: tokens.colorNeutralForeground4, fontSize: tokens.fontSizeBase200 }}>
                                Block malicious content
                              </Text>
                            </MenuItem>
                            <MenuItem onClick={() => setUrlSearchParam('cfa')}>
                              <Text block>Cloudflare DNS Families (Malware/Adult)</Text>
                              <Text style={{ color: tokens.colorNeutralForeground4, fontSize: tokens.fontSizeBase200 }}>
                                Block malicious and adult content
                              </Text>
                            </MenuItem>
                          </MenuList>
                        </MenuPopover>
                      </Menu>
                    }
                    value={serviceUrl}
                    onChange={(_, { value }) => {
                      setServiceUrl(value)
                      setUrlSearchParam(value)
                    }}
                    style={{
                      animationName: submitting ? 'pulse' : 'none',
                      animationDuration: '2s',
                      animationTimingFunction: tokens.curveEasyEase,
                      animationIterationCount: 'infinite',
                    }}
                  />
                </Field>
                <Field label="Resource Record (RR) type" style={{ marginTop: '0.75rem' }} size="small">
                  <Combobox
                    freeform
                    inlinePopup
                    form="dnsLookup"
                    name="type"
                    placeholder="A"
                    expandIcon={<DocumentSearchFilled />}
                    value={resourceRecordType}
                    onOptionSelect={(_, data) => {
                      setResourceRecordType(data.optionText ?? '')
                      setTypeSearchParam(data.optionText ?? '')
                    }}
                    onInput={(ev: ChangeEvent<HTMLInputElement>) => {
                      setResourceRecordType(ev.target.value)
                      setTypeSearchParam(ev.target.value)
                    }}
                    input={{ style: { fontSize: '12px' } }}
                    style={{
                      animationName: submitting ? 'pulse' : 'none',
                      animationDuration: '2s',
                      animationTimingFunction: tokens.curveEasyEase,
                      animationIterationCount: 'infinite',
                    }}
                  >
                    {DNS_RESOURCE_RECORD_TYPES.map((record) => (
                      <Option key={`${record.TYPE}-${record.Value}`} text={record.TYPE} value={record.TYPE}>
                        <Text style={{ fontSize: tokens.fontSizeBase200 }}>{record.TYPE}</Text>
                        <Text
                          as="pre"
                          font="monospace"
                          style={{
                            fontSize: tokens.fontSizeBase100,
                            backgroundColor: tokens.colorNeutralBackground2,
                            padding: '0px 4px',
                          }}
                        >
                          {record.Value}
                        </Text>
                        <Text block style={{ color: tokens.colorNeutralForeground4, fontSize: tokens.fontSizeBase100 }}>
                          {record.Meaning}. {record.Reference}
                        </Text>
                      </Option>
                    ))}
                  </Combobox>
                </Field>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', marginBottom: '1rem' }}
                >
                  <Switch
                    form="dnsLookup"
                    name="cd"
                    checked={disableValidation}
                    onChange={(_, { checked }) => {
                      setDisableValidation(checked)
                      setCdSearchParam(checked ? '1' : '0')
                    }}
                    style={{ alignItems: 'center' }}
                    label={{
                      children: 'Disable validation',
                      style: { fontSize: '11px', padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}` },
                    }}
                    indicator={{
                      style: {
                        margin: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXXS}`,
                        animationName: submitting ? 'pulse' : 'none',
                        animationDuration: '2s',
                        animationTimingFunction: tokens.curveEasyEase,
                        animationIterationCount: 'infinite',
                      },
                    }}
                  />
                  <Switch
                    form="dnsLookup"
                    name="do"
                    checked={receiveDnssecData}
                    onChange={(_, { checked }) => {
                      setReceiveDnssecData(checked)
                      setDoSearchParam(checked ? '1' : '0')
                    }}
                    style={{ alignItems: 'center' }}
                    label={{
                      children: 'Receive DNSSEC data',
                      style: { fontSize: '11px', padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}` },
                    }}
                    indicator={{
                      style: {
                        margin: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXXS}`,
                        animationName: submitting ? 'pulse' : 'none',
                        animationDuration: '2s',
                        animationTimingFunction: tokens.curveEasyEase,
                        animationIterationCount: 'infinite',
                      },
                    }}
                  />
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div style={{ margin: 'auto', marginTop: '1rem', width: 'fit-content' }}>
          <Button type="submit">
            {submitting ? <Spinner label="Submitting" appearance="inverted" size="extra-tiny" /> : <Text>Submit</Text>}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default DnsLookupRouteTool
