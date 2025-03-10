import { getWalletNfts } from '@services/api/api'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useGetWalletNfts(walletAddress: string) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getWalletNfts(walletAddress, pageParam),
    queryKey: ['wallet-nfts', walletAddress],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.data.next,
  })
}
