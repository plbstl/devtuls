import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  if (import.meta.env.DEV) console.warn(error)

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          error.data.message ? (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            <p>{error.data.message}</p>
          ) : (
            <code>{JSON.stringify(error.data)}</code>
          )
        }
        <p>
          <a href="/">Go Home</a>
        </p>
      </div>
    )
  }

  if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <code>{JSON.stringify(error.message)}</code>
        <p>
          <a href="/">Go Home</a>
        </p>
      </div>
    )
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unknown error has occurred.</p>
      <p>
        <a href="/">Go Home</a>
      </p>
    </div>
  )
}

export default ErrorPage
