export function chartDateFormatter(timestamp: number) {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function longDateFormatter(timestamp: number) {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function iso8601DateFormatter(date: Date) {
  return date.toLocaleDateString('en-CA')
}

export function monthYearFormatter(date: Date) {
  return date.toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' })
}
