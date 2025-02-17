import PasswordSection from '@sections/dashboard-sections/password-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function PasswordPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Password`}</title>
      <PasswordSection />
    </>
  )
}
