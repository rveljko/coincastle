import { getNftCollectionNfts } from '@services/api/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
  NftCollectionNftsSortDirection,
  NftCollectionNftsSortField,
} from '@utils/types'

export default function useGetNftCollectionNfts(
  contractAddress: string,
  sortField: NftCollectionNftsSortField,
  sortDirection: NftCollectionNftsSortDirection,
  limit: number
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getNftCollectionNfts(
        contractAddress,
        pageParam,
        sortField,
        sortDirection,
        limit
      ),
    queryKey: [
      'nft-collection-nfts',
      contractAddress,
      sortField,
      sortDirection,
      limit,
    ],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.data.next,
  })
}
