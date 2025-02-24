export function percentageFormatter(value: number) {
  return (value / 100).toLocaleString('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
  })
}
