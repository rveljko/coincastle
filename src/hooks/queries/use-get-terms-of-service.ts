import { getTermsOfService } from '@services/api/terms-of-service'
import { useQuery } from '@tanstack/react-query'

export default function useGetTermsOfService() {
  return useQuery({
    queryFn: () => getTermsOfService(),
    queryKey: ['terms-of-service'],
  })
}
