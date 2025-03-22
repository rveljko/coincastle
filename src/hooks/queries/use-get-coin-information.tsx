import { getCoinInformation } from '@services/api/crypto'
import { useQuery } from '@tanstack/react-query'

export default function useGetCoinInformation(coinId: string) {
  return useQuery({
    queryFn: () => getCoinInformation(coinId),
    queryKey: ['coin', coinId],
    refetchOnWindowFocus: true,
  })
}
