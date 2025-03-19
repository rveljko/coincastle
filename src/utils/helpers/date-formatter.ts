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
