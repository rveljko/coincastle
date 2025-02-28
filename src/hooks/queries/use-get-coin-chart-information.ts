import { getCoinChartInformation } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetCoinChartInformation(coinId: string) {
  return useQuery({
    queryFn: () => getCoinChartInformation(coinId),
    queryKey: ['coin-chart-information', coinId],
  })
}
