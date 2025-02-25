import {
  CoinInformationHttpResponse,
  CoinOverviewHttpResponse,
} from '@utils/types'

const CRYPTO_BASE_URL = 'https://api.coingecko.com/api/v3'

export async function getCryptoCurrencies(): Promise<
  CoinOverviewHttpResponse[]
> {
  const res = await fetch(`${CRYPTO_BASE_URL}/coins/markets?vs_currency=usd`)
  return res.json()
}

export async function getCoinInformation(
  id: string
): Promise<CoinInformationHttpResponse> {
  const res = await fetch(`${CRYPTO_BASE_URL}/coins/${id}`)
  return res.json()
}
