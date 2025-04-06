import { getCryptoCurrenciesBySearch } from '@services/api/crypto'
import { useQuery } from '@tanstack/react-query'
import { CryptoCurrenciesSearchHttpResponse } from '@utils/types'

const transformCryptoCurrencies = (data: CryptoCurrenciesSearchHttpResponse) =>
  data.coins.slice(0, 3)

export default function useGetCryptoCurrenciesBySearch(search: string) {
  return useQuery({
    queryFn: () => getCryptoCurrenciesBySearch(search),
    queryKey: ['crypto-currencies-by-search', search],
    select: transformCryptoCurrencies,
  })
}
