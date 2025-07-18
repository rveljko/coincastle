import { iso8601DateFormatter } from '@utils/helpers/date-formatter'
import { generateDateInPast } from '@utils/helpers/date-generator'
import {
  ChartInformationPeriod,
  StockChartInformationHttpResponse,
  StockInformationHttpResponse,
  StockOverviewHttpResponse,
  StockSearchHttpResponse,
} from '@utils/types'

const STOCKS_BASE_URL = 'https://financialmodelingprep.com/stable'

export async function getStocks(
  priceFrom: number | '',
  priceTo: number | '',
  marketCapFrom: number | '',
  marketCapTo: number | '',
  volumeFrom: number | '',
  volumeTo: number | '',
  limit: number
): Promise<StockOverviewHttpResponse[]> {
  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/stock-screener?country=us&priceMoreThan=${priceFrom}&priceLowerThan=${priceTo}&marketCapMoreThan=${marketCapFrom}&marketCapLowerThan=${marketCapTo}&volumeMoreThan=${volumeFrom}&volumeLowerThan=${volumeTo}&limit=${limit}&apikey=${import.meta.env.VITE_FMP_API_KEY}`
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
    `${STOCKS_BASE_URL}/quote?symbol=${symbol}&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch stock information. Ensure the stock symbol is correct and try again.'
    )

  return res.json()
}

export async function getStockChartInformation(
  symbol: string,
  period: ChartInformationPeriod
): Promise<StockChartInformationHttpResponse[]> {
  const res = await fetch(
    `${STOCKS_BASE_URL}/historical-price-eod/light?symbol=${symbol}&from=${iso8601DateFormatter(generateDateInPast(parseInt(period)))}&to=${iso8601DateFormatter(new Date())}&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch stock chart information. Check the stock symbol and time period, then try again.'
    )

  return res.json()
}

export async function getStocksBySearch(
  symbol: string
): Promise<StockSearchHttpResponse[]> {
  const res = await fetch(
    `${STOCKS_BASE_URL}/search-symbol?query=${symbol}&limit=3&apikey=${import.meta.env.VITE_FMP_API_KEY}`
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch stocks by search. Please check your query and connection, then try again.'
    )

  return res.json()
}
