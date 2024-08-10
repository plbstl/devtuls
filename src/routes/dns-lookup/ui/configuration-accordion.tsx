import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleData,
  AccordionToggleEvent,
  makeStyles,
  tokens,
} from '@fluentui/react-components'
import { SettingsRegular } from '@fluentui/react-icons'
import { useLoaderData } from 'react-router-dom'
import { useSearchParams } from '~/utils/use-search-params'
import type { DnsLookupLoaderData } from '../page.router'
import ResourceRecordTypeInputField from './resource-record-type-input-field'
import ServiceUrlInputField from './service-url-input-field'
import ValidationAndDnssecDataSwitchInputs from './validation-and-dnssec-data-switch-inputs'

const useStyles = makeStyles({
  panelContainer: {
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXXS}`,
  },
})

function ConfigurationAccordion() {
  const styles = useStyles()
  const loaderData = useLoaderData() as DnsLookupLoaderData
  const [, setSearchParams] = useSearchParams()

  const handleConfigToggle = (_: AccordionToggleEvent, data: AccordionToggleData) => {
    const opened = data.openItems.includes('config')
    setSearchParams('config', opened ? '1' : '0')
  }

  return (
    <Accordion collapsible openItems={loaderData.openToolConfig ? 'config' : ''} onToggle={handleConfigToggle}>
      <AccordionItem value="config">
        <AccordionHeader expandIconPosition="end" icon={<SettingsRegular />}>
          Configuration
        </AccordionHeader>
        <AccordionPanel className={styles.panelContainer}>
          <ServiceUrlInputField />
          <ResourceRecordTypeInputField />
          <ValidationAndDnssecDataSwitchInputs />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default ConfigurationAccordion
