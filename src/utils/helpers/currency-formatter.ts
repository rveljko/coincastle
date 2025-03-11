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

export function ethereumPriceFormatter(value: number) {
  if (value === 0) return '0 ETH'

  if (value < 0.01) return '< 0.01 ETH'

  if (numbersWithCommasAndDecimalsFormatter(value).endsWith('00'))
    return `${numbersWithCommasFormatter(value)} ETH`

  return `${numbersWithCommasAndDecimalsFormatter(value)} ETH`
}

export function ethereumCompactFormatter(value: number) {
  return `${value.toLocaleString('en-US', {
    notation: 'compact',
  })} ETH`
}
