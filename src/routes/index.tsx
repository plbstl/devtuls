import { useState } from 'react'
import { Button } from '@fluentui/react-components'
import viteLogo from '/vite.svg'
import Link from '~/components/Link'
import reactLogo from '../assets/react.svg'

function IndexRoute() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <Link href="/about">About Devtuls</Link>
        </p>
        <p>
          <Link href="/tool">Tool</Link>
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
