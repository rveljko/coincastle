import { getNftWalletNfts } from '@services/api/nfts'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useGetNftWalletNfts(
  walletAddress: string,
  limit: number
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getNftWalletNfts(walletAddress, pageParam, limit),
    queryKey: ['nft-wallet-nfts', walletAddress, limit],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.cursor,
  })
}
