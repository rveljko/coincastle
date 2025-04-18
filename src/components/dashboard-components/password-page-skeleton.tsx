import PasswordSectionSkeleton from '@components/dashboard-components/password-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function PasswordPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Password`}</title>
      <PasswordSectionSkeleton />
    </>
  )
}
