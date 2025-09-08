import {
  numbersWithCommasAndDecimalsFormatter,
  numbersWithCommasFormatter,
} from '@utils/helpers/numbers-formatter'

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

export function ethereumPriceFormatter(value: string) {
  const price = parseFloat(value)

  if (price === 0) return '0 ETH'

  if (price < 0.01) return '< 0.01 ETH'

  if (numbersWithCommasAndDecimalsFormatter(price).endsWith('00'))
    return `${numbersWithCommasFormatter(price)} ETH`

  return `${numbersWithCommasAndDecimalsFormatter(price)} ETH`
}

export function ethereumCompactFormatter(value: string) {
  return `${parseFloat(value).toLocaleString('en-US', {
    notation: 'compact',
  })} ETH`
}
