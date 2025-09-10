import { getNftWalletStatisticsHttpResponse } from '@services/api/nfts'
import { useQuery } from '@tanstack/react-query'

export default function useGetNftWalletStatisticsHttpResponse(
  walletAddress: string
) {
  return useQuery({
    queryFn: () => getNftWalletStatisticsHttpResponse(walletAddress),
    queryKey: ['nft-wallet-statistics', walletAddress],
  })
}
