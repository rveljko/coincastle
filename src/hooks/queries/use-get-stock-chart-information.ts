import { getStockChartInformation } from '@services/api/stocks'
import { useQuery } from '@tanstack/react-query'

export default function useGetStockChartInformation(stockSymbol: string) {
  return useQuery({
    queryFn: () => getStockChartInformation(stockSymbol),
    queryKey: ['stock-chart-information', stockSymbol],
    refetchOnWindowFocus: true,
  })
}
