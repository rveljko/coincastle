import { getCryptoCurrencies } from '@services/api/crypto'
import { useQuery } from '@tanstack/react-query'
import { CoinOverviewSortDirection, CoinOverviewSortField } from '@utils/types'

export default function useGetCryptoCurrencies(
  numberOfCoins: number,
  sortField: CoinOverviewSortField,
  sortDirection: CoinOverviewSortDirection
) {
  return useQuery({
    queryFn: () => getCryptoCurrencies(numberOfCoins, sortField, sortDirection),
    queryKey: ['crypto-currencies', numberOfCoins, sortField, sortDirection],
    refetchOnWindowFocus: true,
  })
}
