import { getStockChartInformation } from '@services/api/stocks'
import { useQuery } from '@tanstack/react-query'
import { ChartInformationPeriod } from '@utils/types'

export default function useGetStockChartInformation(
  stockSymbol: string,
  period: ChartInformationPeriod
) {
  return useQuery({
    queryFn: () => getStockChartInformation(stockSymbol, period),
    queryKey: ['stock-chart-information', stockSymbol, period],
    refetchOnWindowFocus: true,
  })
}
