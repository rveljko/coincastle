import { getStocks } from '@services/api/stocks'
import { useQuery } from '@tanstack/react-query'

export default function useGetStocks(
  priceFrom: number | '',
  priceTo: number | '',
  marketCapFrom: number | '',
  marketCapTo: number | '',
  volumeFrom: number | '',
  volumeTo: number | '',
  limit: number
) {
  return useQuery({
    queryFn: () =>
      getStocks(
        priceFrom,
        priceTo,
        marketCapFrom,
        marketCapTo,
        volumeFrom,
        volumeTo,
        limit
      ),
    queryKey: [
      'stocks',
      priceFrom,
      priceTo,
      marketCapFrom,
      marketCapTo,
      volumeFrom,
      volumeTo,
      limit,
    ],
    refetchOnWindowFocus: true,
  })
}
