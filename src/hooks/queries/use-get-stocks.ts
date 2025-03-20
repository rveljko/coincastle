import { getStocks } from '@services/api/stocks'
import { useQuery } from '@tanstack/react-query'

export default function useGetStocks(limit: number) {
  return useQuery({
    queryFn: () => getStocks(limit),
    queryKey: ['stocks', limit],
    refetchOnWindowFocus: true,
  })
}
