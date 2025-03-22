import { getNftWalletStatistics } from '@services/api/nfts'
import { useQuery } from '@tanstack/react-query'

export default function useGetNftWalletStatistics(walletAddress: string) {
  return useQuery({
    queryFn: () => getNftWalletStatistics(walletAddress),
    queryKey: ['nft-wallet-statistics', walletAddress],
  })
}
