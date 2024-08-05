import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout({ children }: PropsWithChildren) {
  return (
    <main>
      {children}
      <Outlet />
    </main>
  )
}

export default RootLayout
