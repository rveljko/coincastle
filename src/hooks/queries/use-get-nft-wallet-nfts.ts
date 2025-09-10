import { getNftWalletNftsHttpResponse } from '@services/api/nfts'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useGetNftWalletNftsHttpResponse(
  walletAddress: string,
  limit: number
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getNftWalletNftsHttpResponse(walletAddress, pageParam, limit),
    queryKey: ['nft-wallet-nfts', walletAddress, limit],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.cursor,
  })
}
