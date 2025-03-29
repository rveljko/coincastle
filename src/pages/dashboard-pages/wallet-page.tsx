import HeroSection from '@sections/dashboard-sections/hero-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function WalletPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Wallet`}</title>
      <HeroSection />
    </>
  )
}
