import { getStockInformation } from '@services/api/stocks'
import { useQuery } from '@tanstack/react-query'

export default function useGetStockInformation(stockSymbol: string) {
  return useQuery({
    queryFn: () => getStockInformation(stockSymbol),
    queryKey: ['stock', stockSymbol],
  })
}
