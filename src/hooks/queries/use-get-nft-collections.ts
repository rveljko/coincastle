import { getNftCollections } from '@services/api/nfts'
import { useQuery } from '@tanstack/react-query'
import {
  NftCollectionsSortDirection,
  NftCollectionsSortField,
} from '@utils/types'

export default function useGetNftCollections(
  sortField: NftCollectionsSortField,
  sortDirection: NftCollectionsSortDirection,
  limit: number
) {
  return useQuery({
    queryFn: () => getNftCollections(sortField, sortDirection, limit),
    queryKey: ['nft-collections', sortField, sortDirection, limit],
  })
}
