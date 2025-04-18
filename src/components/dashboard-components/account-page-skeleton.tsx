import AccountSectionSkeleton from '@components/dashboard-components/account-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function AccountPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Account`}</title>
      <AccountSectionSkeleton />
    </>
  )
}
