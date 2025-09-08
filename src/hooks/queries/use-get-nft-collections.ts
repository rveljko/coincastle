import { getNftCollections } from '@services/api/nfts'
import { useQuery } from '@tanstack/react-query'

export default function useGetNftCollections() {
  return useQuery({
    queryFn: getNftCollections,
    queryKey: ['nft-collections'],
  })
}
