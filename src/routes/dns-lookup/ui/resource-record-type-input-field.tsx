import { useEffect, useState, type ChangeEvent } from 'react'
import {
  Combobox,
  Field,
  makeStyles,
  Option,
  SelectionEvents,
  Text,
  tokens,
  type OptionOnSelectData,
} from '@fluentui/react-components'
import { DocumentSearchFilled } from '@fluentui/react-icons'
import { useLoaderData, useNavigation } from 'react-router-dom'
import { DNS_RESOURCE_RECORD_TYPES } from '~/utils/dns-rr-types'
import { getTypedObjectValues } from '~/utils/get-typed-object'
import { useSearchParams } from '~/utils/use-search-params'
import type { DnsLookupLoaderData } from '../page.router'

const useStyles = makeStyles({
  combobox: {
    animationDuration: '2s',
    animationTimingFunction: tokens.curveEasyEase,
    animationIterationCount: 'infinite',
  },
  input: {
    fontSize: tokens.fontSizeBase200,
  },
  label: {
    fontSize: tokens.fontSizeBase200,
  },
  secondaryLabel: {
    fontSize: tokens.fontSizeBase100,
    backgroundColor: tokens.colorNeutralBackground2,
    padding: '0px 4px',
  },
  description: {
    color: tokens.colorNeutralForeground4,
    fontSize: tokens.fontSizeBase100,
  },
})

function ResourceRecordTypeInputField() {
  const styles = useStyles()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'
  const [, setSearchParams] = useSearchParams()
  // Controlled input is needed so that the caret movement is predictable, as we are syncing with search params.
  const [resourceRecordType, setResourceRecordType] = useState(loaderData.resourceRecordType)

  // Allow browser history to update form values.
  useEffect(() => {
    setResourceRecordType(loaderData.resourceRecordType)
  }, [loaderData.resourceRecordType])

  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target
    setResourceRecordType(value)
    setSearchParams(name, value)
  }

  const handleRrTypeOptionSelect = (_: SelectionEvents, data: OptionOnSelectData) => {
    const value = data.optionText ?? ''
    setResourceRecordType(value)
    setSearchParams('type', value)
  }

  return (
    <Field label="Resource Record (RR) type" style={{ marginTop: '0.75rem' }} size="small">
      <Combobox
        freeform
        form="dnsLookup"
        name="type"
        placeholder="A"
        expandIcon={<DocumentSearchFilled />}
        value={resourceRecordType}
        onInput={handleInputChange}
        onOptionSelect={handleRrTypeOptionSelect}
        className={styles.combobox}
        style={{ animationName: submitting ? 'pulse' : 'none' }}
        input={{ className: styles.input }}
      >
        {getTypedObjectValues(DNS_RESOURCE_RECORD_TYPES).map((record) => (
          <Option key={`${record.TYPE}-${record.Value}`} text={record.TYPE} value={record.TYPE}>
            <Text className={styles.label}>{record.TYPE}</Text>
            <Text as="pre" font="monospace" className={styles.secondaryLabel}>
              {record.Value}
            </Text>
            <Text block className={styles.description}>
              {record.Meaning}. {record.Reference}
            </Text>
          </Option>
        ))}
      </Combobox>
    </Field>
  )
}

export default ResourceRecordTypeInputField
