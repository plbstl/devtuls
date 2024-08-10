import { makeStyles, tokens } from '@fluentui/react-components'
import { Form } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
  },
})

function DnsLookupRouteTool() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <Form id="dnsLookup" method="POST">
        <div>Tool Input</div>

        <div>Tool Config</div>

        <div>Submit Button</div>
      </Form>

      <div>Tool Output</div>
    </div>
  )
}

export default DnsLookupRouteTool
