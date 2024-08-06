import Link from '~/components/Link'

function AboutRoute() {
  return (
    <>
      <h1>Devtuls</h1>
      <div className="card">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/err">Error page</Link>
        </p>
      </div>
    </>
  )
}

export { AboutRoute as Component }
