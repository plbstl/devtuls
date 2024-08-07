import { useState } from 'react'
import { Button } from '@fluentui/react-components'
import Link from '~/components/Link'

function IndexRoute() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Devtuls</h1>
      <div className="card">
        <p>
          <Link href="/about">About Devtuls</Link>
        </p>
        <p>
          <Link href="/dns-lookup">DNS Lookup</Link>
        </p>
        <p>
          <Link href="/err">Error page</Link>
        </p>
        <Button
          onClick={() => {
            setCount((count) => count + 1)
          }}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export { IndexRoute as Component }
