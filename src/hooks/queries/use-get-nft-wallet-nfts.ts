import { getNftWalletNfts } from '@services/api/nfts'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
  NftWalletNftsSortDirection,
  NftWalletNftsSortField,
} from '@utils/types'

export default function useGetNftWalletNfts(
  walletAddress: string,
  sortField: NftWalletNftsSortField,
  sortDirection: NftWalletNftsSortDirection
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getNftWalletNfts(walletAddress, sortField, sortDirection, pageParam),
    queryKey: ['nft-wallet-nfts', walletAddress, sortField, sortDirection],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.data.next,
  })
}
