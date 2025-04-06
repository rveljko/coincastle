import { getStocksBySearch } from '@services/api/stocks'
import { useQuery } from '@tanstack/react-query'

export default function useGetStocksBySearch(symbol: string) {
  return useQuery({
    queryFn: () => getStocksBySearch(symbol),
    queryKey: ['stocks-by-search', symbol],
  })
}
