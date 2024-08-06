import {
  Button,
  Link as FUiLink,
  Toast,
  Toaster,
  ToastFooter,
  ToastTitle,
  ToastTrigger,
  useToastController,
} from '@fluentui/react-components'
import Link from '~/components/Link'

export const Default = () => {
  const { dispatchToast } = useToastController()
  const notify = () => {
    dispatchToast(
      <Toast>
        <ToastTitle>New content available, ssclick on Reload to update.</ToastTitle>
        <ToastFooter>
          <FUiLink>Reload</FUiLink>
          <ToastTrigger>
            <FUiLink>Dismiss</FUiLink>
          </ToastTrigger>
        </ToastFooter>
      </Toast>,
      { intent: 'info', timeout: 999999 },
    )
  }

  return (
    <>
      <Toaster pauseOnHover pauseOnWindowBlur position="top-end" />
      <Button onClick={notify}>Make toast</Button>
    </>
  )
}

function AboutRoute() {
  return (
    <>
      <h1>Devtuls</h1>
      <div className="card">
        <Default />

        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/tool">Tool</Link>
        </p>
        <p>
          <Link href="/dns-lookup">DNS Lookup</Link>
        </p>
        <p>
          <Link href="/err">Error page</Link>
        </p>
      </div>
    </>
  )
}

export { AboutRoute as Component }
