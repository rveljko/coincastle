import { getCryptoCurrencies } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetCryptoCurrencies() {
  return useQuery({
    queryFn: getCryptoCurrencies,
    queryKey: ['crypto-currencies'],
  })
}
