import {
  CoinChartInformationHttpResponse,
  CoinChartInformationPeriod,
  CoinInformationHttpResponse,
  CoinOverviewHttpResponse,
  NftCollectionOverviewHttpResponse,
} from '@utils/types'

const CRYPTO_BASE_URL = 'https://api.coingecko.com/api/v3'

export async function getCryptoCurrencies(
  numberOfCoins: number
): Promise<CoinOverviewHttpResponse[]> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/markets?vs_currency=usd&per_page=${numberOfCoins}`
  )
  return res.json()
}

export async function getCoinInformation(
  id: string
): Promise<CoinInformationHttpResponse> {
  const res = await fetch(`${CRYPTO_BASE_URL}/coins/${id}`)
  return res.json()
}

export async function getCoinChartInformation(
  id: string,
  period: CoinChartInformationPeriod
): Promise<CoinChartInformationHttpResponse> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${period}`
  )
  return res.json()
}

export async function getNftCollections(): Promise<
  NftCollectionOverviewHttpResponse[]
> {
  const res = await fetch(
    'https://deep-index.moralis.io/api/v2.2/market-data/nfts/top-collections',
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
      },
    }
  )
  return res.json()
}
