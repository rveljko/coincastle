import { getNftCollectionBySearch } from '@services/api/nfts'
import { useQuery } from '@tanstack/react-query'
import { NftCollectionSearchHttpResponse } from '@utils/types'

const transformedNftCollections = (data: NftCollectionSearchHttpResponse) => ({
  ...data,
  data: data.data.slice(0, 3),
})

export default function useGetNftCollectionsBySearch(collectionName: string) {
  return useQuery({
    queryFn: () => getNftCollectionBySearch(collectionName),
    queryKey: ['nft-collections-by-search', collectionName],
    select: transformedNftCollections,
  })
}
