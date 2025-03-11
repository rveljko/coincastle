export function numbersWithCommasFormatter(value: number) {
  return value.toLocaleString('en-US')
}

export function numbersWithCommasAndDecimalsFormatter(value: number) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
