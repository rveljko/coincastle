import { getSingleNft } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetSingleNft(
  contractAddress: string,
  tokenId: string
) {
  return useQuery({
    queryFn: () => getSingleNft(contractAddress, tokenId),
    queryKey: ['single-nft', contractAddress, tokenId],
  })
}
