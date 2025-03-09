import { getWalletNfts } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetWalletNfts(walletAddress: string) {
  return useQuery({
    queryFn: () => getWalletNfts(walletAddress),
    queryKey: ['wallet-nfts', walletAddress],
  })
}
