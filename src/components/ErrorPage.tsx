/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { LargeTitle, makeStyles, mergeClasses, Subtitle1, Text, tokens } from '@fluentui/react-components'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Link from '~/components/Link'

const useStyles = makeStyles({
  text: {
    display: 'block',
    marginTop: tokens.spacingVerticalM,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: tokens.spacingVerticalXXXL,
  },
  container: {
    width: 'fit-content',
    margin: 'auto',
    marginTop: tokens.spacingVerticalXXXL,
  },
})

function ErrorPage() {
  const styles = useStyles()
  const error = useRouteError()
  if (import.meta.env.DEV) console.warn(error)

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page" className={styles.container}>
        <LargeTitle as="h1">
          {error.status}: {error.statusText}
        </LargeTitle>
        {error.data.message ? (
          <Text as="p" className={styles.text}>
            {error.data.message}
          </Text>
        ) : (
          <Text as="pre" className={styles.text}>
            {JSON.stringify(error.data)}
          </Text>
        )}
        <Subtitle1 as="p" className={mergeClasses(styles.text, styles.subtitle)}>
          <Link href="/">Go Home</Link>
        </Subtitle1>
      </div>
    )
  }

  if (error instanceof Error) {
    return (
      <div id="error-page" className={styles.container}>
        <Text as="h1" className={styles.text}>
          Oops! Unexpected Error
        </Text>
        <Text as="p" className={styles.text}>
          Something went wrong.
        </Text>
        <Text as="pre" className={styles.text}>
          {error.message}
        </Text>
        <Subtitle1 as="p" className={mergeClasses(styles.text, styles.subtitle)}>
          <Link href="/">Go Home</Link>
        </Subtitle1>
      </div>
    )
  }

  return (
    <div id="error-page" className={styles.container}>
      <Text as="h1" className={styles.text}>
        Oops!
      </Text>
      <Text as="p" className={styles.text}>
        Sorry, an unknown error has occurred.
      </Text>
      <Subtitle1 as="p" className={mergeClasses(styles.text, styles.subtitle)}>
        <Link href="/">Go Home</Link>
      </Subtitle1>
    </div>
  )
}

export default ErrorPage
