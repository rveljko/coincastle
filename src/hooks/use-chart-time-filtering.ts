import {
  CoinChartInformationPeriod,
  StockChartInformationPeriod,
} from '@utils/types'
import { useSearchParams } from 'react-router-dom'

export default function useChartTimeFiltering() {
  const [searchParams, setSearchParams] = useSearchParams()
  const coinPricePeriod = (searchParams.get('period') ||
    '1') as CoinChartInformationPeriod

  const stockPricePeriod = (searchParams.get('period') ||
    '1') as StockChartInformationPeriod

  function setCoinPricePeriod(days: CoinChartInformationPeriod) {
    setSearchParams((prevParams) => {
      prevParams.set('period', days)
      return prevParams
    })
  }

  function setStockPricePeriod(days: StockChartInformationPeriod) {
    setSearchParams((prevParams) => {
      prevParams.set('period', days)
      return prevParams
    })
  }

  return {
    coinPricePeriod,
    stockPricePeriod,
    setCoinPricePeriod,
    setStockPricePeriod,
  }
}
