const units: { unit: Intl.RelativeTimeFormatUnit; ms: number }[] = [
  { unit: 'year', ms: 24 * 60 * 60 * 1000 * 365 },
  { unit: 'month', ms: (24 * 60 * 60 * 1000 * 365) / 12 },
  { unit: 'day', ms: 24 * 60 * 60 * 1000 },
  { unit: 'hour', ms: 60 * 60 * 1000 },
  { unit: 'minute', ms: 60 * 1000 },
  { unit: 'second', ms: 1000 },
]

const rtf = new Intl.RelativeTimeFormat(navigator.languages, {
  numeric: 'auto',
  style: 'long',
  localeMatcher: 'best fit',
})

/**
 * Get language-sensitive relative time message from timestamps.
 * @param relative Relative dateTime, generally is in the past or future.
 * @param pivot DateTime of reference, generally is the current time.
 */
export function relativeTimeFormat(relative: number, pivot = Date.now()): string {
  if (!relative) return ''
  const elapsed = relative - pivot
  for (const { unit, ms } of units) {
    if (Math.abs(elapsed) >= ms || unit === 'second') {
      // The hour format does not show minutes, at least indicate that this is an estimate.
      const prefix = unit === 'hour' ? 'about ' : ''
      const formattedText = rtf.format(Math.round(elapsed / ms), unit)
      return `${prefix}${formattedText}`
    }
  }
  return ''
}

const dtf = new Intl.DateTimeFormat(navigator.languages, {
  minute: 'numeric',
  hour: 'numeric',
  hour12: false,
  weekday: 'long',
  localeMatcher: 'best fit',
})

const sameDayDtf = new Intl.DateTimeFormat('en', { day: 'numeric' })

/**
 * Get a detailed relative time message.
 *
 * NOTE: Only English is supported.
 * @param relative
 * @param pivot
 * @returns
 */
export function detailedRelativeTimeFormat(relative: number, pivot = Date.now()) {
  if (!relative) return ''

  // @ts-expect-error - Will populate it next.
  const period: Record<keyof Intl.DateTimeFormatPartTypesRegistry, string> = {}

  // Transform array to a usable object, which is `period`.
  dtf.formatToParts(relative).forEach(({ type, value }) => {
    period[type] = value
  })

  // Extract the range of days between both dates.
  const parts = sameDayDtf.formatRangeToParts(relative, pivot)

  // Only one item is returned when it's the same day.
  const sameDay = parts.length === 1
  if (sameDay) return `today at ${period.hour}:${period.minute}`

  const elapsed = relative - pivot
  const ONE_DAY_AGO = -1 * 86400000
  const SIX_DAYS_AGO = -6 * 86400000

  if (elapsed >= SIX_DAYS_AGO && elapsed < ONE_DAY_AGO) {
    // inside last week
    return `last ${period.weekday} at ${period.hour}:${period.minute}`
  } else if (elapsed < 0) {
    // inside 24 hours ago
    return `yesterday at ${period.hour}:${period.minute}`
  }

  return new Date(relative).toDateString()
}
