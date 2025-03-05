export function currencyFormatter(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export function compactCurrencyFormatter(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
  })
}

export function ethereumPriceFormatter(value: number) {
  if (value === 0) return '0 ETH'

  if (value < 0.01) return '< 0.01 ETH'

  if (value.toFixed(2).endsWith('00')) return `${value.toFixed(0)} ETH`

  return `${value.toFixed(2)} ETH`
}

export function ethereumCompactFormatter(value: number) {
  return `${value.toLocaleString('en-US', {
    notation: 'compact',
  })} ETH`
}
