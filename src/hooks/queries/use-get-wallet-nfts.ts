import { getWalletNfts } from '@services/api/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
  NftWalletNftsSortDirection,
  NftWalletNftsSortField,
} from '@utils/types'

export default function useGetWalletNfts(
  walletAddress: string,
  sortField: NftWalletNftsSortField,
  sortDirection: NftWalletNftsSortDirection
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getWalletNfts(walletAddress, sortField, sortDirection, pageParam),
    queryKey: ['wallet-nfts', walletAddress, sortField, sortDirection],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.data.next,
  })
}
