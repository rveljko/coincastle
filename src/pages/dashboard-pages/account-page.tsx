import AccountSection from '@sections/dashboard-sections/account-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function AccountPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Account`}</title>
      <AccountSection />
    </>
  )
}
