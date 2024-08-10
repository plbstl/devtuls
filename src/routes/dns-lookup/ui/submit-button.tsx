import { Button, makeStyles, Spinner, tokens } from '@fluentui/react-components'
import { useNavigation } from 'react-router-dom'

const useStyles = makeStyles({
  container: {
    margin: 'auto',
    marginTop: tokens.spacingVerticalS,
    width: 'fit-content',
  },
})

function SubmitButton() {
  const styles = useStyles()
  const navigation = useNavigation()
  const submitting = navigation.state === 'submitting'

  return (
    <div className={styles.container}>
      <Button type="submit">
        {submitting ? <Spinner label="Submitting" appearance="inverted" size="extra-tiny" /> : 'Submit'}
      </Button>
    </div>
  )
}

export default SubmitButton
