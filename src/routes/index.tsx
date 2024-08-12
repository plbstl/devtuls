import { Caption1, Card, CardHeader, makeStyles, Text, tokens } from '@fluentui/react-components'
import Link from '~/components/Link'

const useStyles = makeStyles({
  container: {
    padding: tokens.spacingVerticalM,
    textAlign: 'center',
  },
  heading: {
    fontSize: tokens.fontSizeHero900,
    marginTop: tokens.spacingVerticalXXXL,
    fontFamily: tokens.fontFamilyMonospace,
  },
  subtitle: {
    fontSize: tokens.fontSizeBase500,
    marginTop: tokens.spacingVerticalXXXL,
    fontFamily: tokens.fontFamilyMonospace,
  },
  subtitle2: {
    fontSize: tokens.fontSizeBase300,
    marginTop: tokens.spacingVerticalXXXL,
    color: tokens.colorNeutralForeground2,
  },
  card: {
    marginTop: tokens.spacingVerticalXXXL,
  },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
})

function IndexRoute() {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Devtuls</h1>

      <p className={styles.subtitle}>Collection of awesome developer tools available as a progressive web application.</p>

      <p className={styles.subtitle2}>This application is focused on usage in mobile devices.</p>

      <Card className={styles.card}>
        <CardHeader
          header={<Text weight="semibold">DNS Lookup</Text>}
          description={
            <Caption1 className={styles.caption}>
              Query any DNS resolver service that supports DNS-over-HTTPS and JSON queries.
            </Caption1>
          }
          action={<Link href="/dns-lookup">open</Link>}
        />
      </Card>
    </div>
  )
}

export { IndexRoute as Component }
