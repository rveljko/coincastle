import { getCryptoCurrencies } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetCryptoCurrencies(numberOfCoins: number) {
  return useQuery({
    queryFn: () => getCryptoCurrencies(numberOfCoins),
    queryKey: ['crypto-currencies', numberOfCoins],
    refetchOnWindowFocus: true,
  })
}
