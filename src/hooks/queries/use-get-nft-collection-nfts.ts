import { getNftCollectionNfts } from '@services/api/api'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useGetNftCollectionNfts(contractAddress: string) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getNftCollectionNfts(contractAddress, pageParam),
    queryKey: ['nft-collection-nfts', contractAddress],
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage.data.next,
  })
}
