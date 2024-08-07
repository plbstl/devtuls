import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

/**
 * React hook that gets and sets a specific search parameter in the URL.
 */
export function useSearchParam(key: string) {
  // Get the search params from the URL
  const [searchParams, setSearchParamsReactRouter] = useSearchParams()
  const [currentValue, setCurrentValue] = useState(searchParams.get(key))

  /** Updates a specific search param with a value. */
  function setSearchParam(newValue: string) {
    const oldSearchParams = new URLSearchParams(searchParams)
    if (oldSearchParams.has(key)) {
      // Update the specific search param in place.
      const newSearchParams = new URLSearchParams()
      oldSearchParams.forEach((paramValue, paramKey) => {
        if (paramKey === key) newSearchParams.set(paramKey, newValue)
        else newSearchParams.set(paramKey, paramValue)
      })
      setSearchParamsReactRouter(newSearchParams)
    } else {
      // Set new search param if it wasn't already available.
      oldSearchParams.set(key, newValue)
      setSearchParamsReactRouter(oldSearchParams)
    }
    setCurrentValue(newValue)
  }

  // Return the current value and a function to update it.
  return [currentValue, setSearchParam] as const
}
