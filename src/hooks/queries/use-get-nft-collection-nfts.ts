import { getNftCollectionNfts } from '@services/api/api'
import { useInfiniteQuery } from '@tanstack/react-query'
import {
  NftCollectionNftsSortDirection,
  NftCollectionNftsSortField,
} from '@utils/types'

export default function useGetNftCollectionNfts(
  contractAddress: string,
  sortField: NftCollectionNftsSortField,
  sortDirection: NftCollectionNftsSortDirection
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getNftCollectionNfts(
        contractAddress,
        pageParam,
        sortField,
        sortDirection
      ),
    queryKey: [
      'nft-collection-nfts',
      contractAddress,
      sortField,
      sortDirection,
    ],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.data.next,
  })
}
