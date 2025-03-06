import { getNftCollectionNfts } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetNftCollectionNfts(contractAddress: string) {
  return useQuery({
    queryFn: () => getNftCollectionNfts(contractAddress),
    queryKey: ['nft-collection-nfts', contractAddress],
  })
}
