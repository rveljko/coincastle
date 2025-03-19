export function dividendYieldCalculator(
  annualDividend: number,
  stockPrice: number
) {
  return (annualDividend / stockPrice) * 100
}
