import {
  StockInformationHttpResponse,
  StockOverviewHttpResponse,
} from '@utils/types'

export async function getStocks(): Promise<StockOverviewHttpResponse[]> {
  const res = await fetch(
    `https://financialmodelingprep.com/stable/company-screener?country=us&marketCapMoreThan=1000000000&volumeMoreThan=1000000&limit=100&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )
  return res.json()
}

export async function getStockInformation(
  symbol: string
): Promise<StockInformationHttpResponse[]> {
  const res = await fetch(
    `https://financialmodelingprep.com/stable/quote?symbol=${symbol}&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )
  return res.json()
}
