import { getNftCollectionStatistics } from '@services/api/api'
import { useQuery } from '@tanstack/react-query'

export default function useGetNftCollectionStatistics(contractAddress: string) {
  return useQuery({
    queryFn: () => getNftCollectionStatistics(contractAddress),
    queryKey: ['nft-collection-statistics', contractAddress],
  })
}
