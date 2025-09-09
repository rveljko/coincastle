import { getNftCollectionNfts } from '@services/api/nfts'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useGetNftCollectionNfts(
  contractAddress: string,
  limit: number
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getNftCollectionNfts(contractAddress, pageParam, limit),
    queryKey: ['nft-collection-nfts', contractAddress, limit],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.cursor,
  })
}
