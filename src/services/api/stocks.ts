import { iso8601DateFormatter } from '@utils/helpers/date-formatter'
import { generateDateInPast } from '@utils/helpers/date-generator'
import {
  StockChartInformationHttpResponse,
  StockChartInformationPeriod,
  StockInformationHttpResponse,
  StockOverviewHttpResponse,
} from '@utils/types'

export async function getStocks(
  limit: number
): Promise<StockOverviewHttpResponse[]> {
  const res = await fetch(
    `https://financialmodelingprep.com/stable/company-screener?country=us&marketCapMoreThan=1000000000&volumeMoreThan=1000000&limit=${limit}apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch all stocks. Please check your connection and try again.'
    )

  return res.json()
}

export async function getStockInformation(
  symbol: string
): Promise<StockInformationHttpResponse[]> {
  const res = await fetch(
    `https://financialmodelingprep.com/stable/quote?symbol=${symbol}&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch stock information. Ensure the stock symbol is correct and try again.'
    )

  return res.json()
}

export async function getStockChartInformation(
  symbol: string,
  period: StockChartInformationPeriod
): Promise<StockChartInformationHttpResponse[]> {
  const res = await fetch(
    `https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=${symbol}&from=${iso8601DateFormatter(generateDateInPast(parseInt(period)))}&to=${iso8601DateFormatter(new Date())}&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch stock chart information. Check the stock symbol and time period, then try again.'
    )

  return res.json()
}
