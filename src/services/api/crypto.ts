import {
  ChartInformationPeriod,
  CoinChartInformationHttpResponse,
  CoinInformationHttpResponse,
  CoinOverviewHttpResponse,
  CoinOverviewSortDirection,
  CoinOverviewSortField,
  CryptoCurrenciesSearchHttpResponse,
} from '@utils/types'

const CRYPTO_BASE_URL = 'https://api.coingecko.com/api/v3'

export async function getCryptoCurrencies(
  numberOfCoins: number,
  sortField: CoinOverviewSortField,
  sortDirection: CoinOverviewSortDirection
): Promise<CoinOverviewHttpResponse[]> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/markets?vs_currency=usd&order=${sortField}_${sortDirection}&per_page=${numberOfCoins}`,
    {
      headers: {
        'X-Cg-Demo-API-Key': import.meta.env.VITE_COINGECKO_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch all cryptocurrencies. Please check your connection and try again.'
    )

  return res.json()
}

export async function getCoinInformation(
  id: string
): Promise<CoinInformationHttpResponse> {
  const res = await fetch(`${CRYPTO_BASE_URL}/coins/${id}`, {
    headers: {
      'X-Cg-Demo-API-Key': import.meta.env.VITE_COINGECKO_API_KEY,
    },
  })

  if (!res.ok)
    throw new Error(
      'Failed to fetch coin information. Ensure the coin symbol or ID is correct and try again.'
    )

  return res.json()
}

export async function getCoinChartInformation(
  id: string,
  period: ChartInformationPeriod
): Promise<CoinChartInformationHttpResponse> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${period}`,
    {
      headers: {
        'X-Cg-Demo-API-Key': import.meta.env.VITE_COINGECKO_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch coin chart information. Check the coin symbol or ID and time period, then try again.'
    )

  return res.json()
}

export async function getCryptoCurrenciesBySearch(
  search: string
): Promise<CryptoCurrenciesSearchHttpResponse> {
  const res = await fetch(`${CRYPTO_BASE_URL}/search?query=${search}`, {
    headers: {
      'X-Cg-Demo-API-Key': import.meta.env.VITE_COINGECKO_API_KEY,
    },
  })

  if (!res.ok)
    throw new Error(
      'Failed to fetch cryptocurrencies by search. Please check your connection and try again.'
    )

  return res.json()
}
