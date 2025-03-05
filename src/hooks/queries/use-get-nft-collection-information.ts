import { getNftCollectionInformation } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetNftCollectionInformation(
  contractAddress: string
) {
  return useQuery({
    queryFn: () => getNftCollectionInformation(contractAddress),
    queryKey: ['nft-collection', contractAddress],
  })
}
