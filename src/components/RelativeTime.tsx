import { useState } from 'react'
import { detailedRelativeTimeFormat, relativeTimeFormat } from '~/utils/relative-time'

interface RelativeTimeProps {
  timestamp: number
}

function RelativeTime({ timestamp }: RelativeTimeProps) {
  const [detailedDescription, setDetailedDescription] = useState(false)

  const handleOnClick = () => {
    setDetailedDescription(!detailedDescription)
  }

  return (
    <time dateTime={new Date(timestamp).toISOString()} onClick={handleOnClick}>
      {detailedDescription ? detailedRelativeTimeFormat(timestamp) : relativeTimeFormat(timestamp)}
    </time>
  )
}

export default RelativeTime
