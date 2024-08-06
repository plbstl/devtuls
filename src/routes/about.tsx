import Link from '~/components/Link'

function AboutRoute() {
  return (
    <>
      <h1>Devtuls</h1>
      <div className="card">
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/err">Error page</Link>
        </p>
      </div>
    </>
  )
}

export { AboutRoute as Component }
