import { getCoinChartInformation } from '@services/api/crypto'
import { useQuery } from '@tanstack/react-query'
import { ChartInformationPeriod } from '@utils/types'

export default function useGetCoinChartInformation(
  coinId: string,
  period: ChartInformationPeriod
) {
  return useQuery({
    queryFn: () => getCoinChartInformation(coinId, period),
    queryKey: ['coin-chart-information', coinId, period],
    refetchOnWindowFocus: true,
  })
}
