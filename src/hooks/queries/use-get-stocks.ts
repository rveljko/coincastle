import { getStocks } from '@services/api/stocks'
import { useQuery } from '@tanstack/react-query'

export default function useGetStocks() {
  return useQuery({
    queryFn: () => getStocks(),
    queryKey: ['stocks'],
    refetchOnWindowFocus: true,
  })
}
