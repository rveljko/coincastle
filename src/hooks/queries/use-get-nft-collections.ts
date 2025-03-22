import { getNftCollections } from '@services/api/nfts'
import { useQuery } from '@tanstack/react-query'
import {
  NftCollectionsSortDirection,
  NftCollectionsSortField,
} from '@utils/types'

export default function useGetNftCollections(
  sortField: NftCollectionsSortField,
  sortDirection: NftCollectionsSortDirection
) {
  return useQuery({
    queryFn: () => getNftCollections(sortField, sortDirection),
    queryKey: ['nft-collections', sortField, sortDirection],
  })
}
