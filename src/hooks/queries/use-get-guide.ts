import { getGuide } from '@services/api/guide'
import { useQuery } from '@tanstack/react-query'

export default function useGetGuide(guide: string) {
  return useQuery({
    queryFn: () => getGuide(guide),
    queryKey: ['guide', guide],
  })
}
