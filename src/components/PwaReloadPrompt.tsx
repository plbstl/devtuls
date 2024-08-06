import { Link, Toast, Toaster, ToastFooter, ToastTitle, ToastTrigger, useToastController } from '@fluentui/react-components'
import { useRegisterSW } from 'virtual:pwa-register/react'

const ONE_HOUR = 60 * 60 * 1000 // check for updates every hour

function PwaReloadPrompt() {
  const { dispatchToast } = useToastController()

  const {
    offlineReady: [offlineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swScriptUrl, swRegistration) {
      if (!swRegistration) return

      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      setInterval(async () => {
        if (swRegistration.installing) return

        const userIsOffline = 'connection' in navigator && !navigator.onLine
        if (userIsOffline) return

        try {
          const response = await fetch(swScriptUrl, {
            cache: 'no-store',
            headers: { cache: 'no-store', 'cache-control': 'no-cache' },
          })
          const serverIsOnline = response.status === 200
          if (serverIsOnline) await swRegistration.update()
        } catch {
          /*do nothing*/
        }
      }, ONE_HOUR)
    },

    onRegisterError(error) {
      dispatchToast(<PwaToast message="Failed to install Devtuls for offline usage." />, { intent: 'error' })
      console.log('SW registration error', error)
    },
  })

  if (offlineReady) {
    dispatchToast(<PwaToast message="Devtuls is ready to work offline." />, { intent: 'success' })
  }

  if (needRefresh) {
    dispatchToast(
      <PwaToast
        message="New content available, click on Reload to update."
        reloadAction={() => void updateServiceWorker()}
      />,
      { intent: 'info' },
    )
  }

  return <Toaster pauseOnHover pauseOnWindowBlur position="top-end" timeout={999999} />
}

export default PwaReloadPrompt

export interface PwaToastProps {
  message: string
  reloadAction?: () => void
}

export function PwaToast({ message, reloadAction }: PwaToastProps) {
  return (
    <Toast>
      <ToastTitle>{message}</ToastTitle>
      <ToastFooter>
        {reloadAction && <Link onClick={reloadAction}>Reload</Link>}
        <ToastTrigger>
          <Link>Dismiss</Link>
        </ToastTrigger>
      </ToastFooter>
    </Toast>
  )
}
