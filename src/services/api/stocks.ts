import { StockOverviewHttpResponse } from '@utils/types'

export async function getStocks(): Promise<StockOverviewHttpResponse[]> {
  const res = await fetch(
    `https://financialmodelingprep.com/stable/company-screener?country=us&marketCapMoreThan=1000000000&volumeMoreThan=1000000&limit=100&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )
  return res.json()
}
