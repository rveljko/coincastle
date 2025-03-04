import { getNftCollections } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetNftCollections() {
  return useQuery({
    queryFn: getNftCollections,
    queryKey: ['nft-collections'],
  })
}
