import { useSearchParams as useReactRouterSearchParams } from 'react-router-dom'

/**
 * Read and update the `URLSearchParams` without deleting previous parameters.
 */
export function useSearchParams() {
  // Get the search params from the URL
  const [reactRouterSearchParams, setReactRouterSearchParams] = useReactRouterSearchParams()

  /** Updates a specific search param with a value. */
  function setSearchParams(name: string, value: string) {
    const oldSearchParams = new URLSearchParams(reactRouterSearchParams)
    if (oldSearchParams.has(name)) {
      // Update the specific search param in place.
      const newSearchParams = new URLSearchParams()
      oldSearchParams.forEach((paramValue, paramKey) => {
        if (paramKey === name) newSearchParams.set(paramKey, value)
        else newSearchParams.set(paramKey, paramValue)
      })
      setReactRouterSearchParams(newSearchParams)
    } else {
      // Set new search param if it wasn't already available.
      oldSearchParams.set(name, value)
      setReactRouterSearchParams(oldSearchParams)
    }
  }

  // Return the current value and a function to update it.
  return [reactRouterSearchParams, setSearchParams] as const
}
