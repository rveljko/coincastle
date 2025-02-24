import { CoinOverviewHttpResponse } from '@utils/types'

export async function getCryptoCurrencies(): Promise<
  CoinOverviewHttpResponse[]
> {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
  )
  return res.json()
}
