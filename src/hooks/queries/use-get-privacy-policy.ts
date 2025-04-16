import { getPrivacyPolicy } from '@services/api/privacy-policy'
import { useQuery } from '@tanstack/react-query'

export default function useGetPrivacyPolicy() {
  return useQuery({
    queryFn: () => getPrivacyPolicy(),
    queryKey: ['privacy-policy'],
  })
}
