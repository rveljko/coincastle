import CryptoMarketplaceSection from '@sections/dashboard-sections/crypto-marketplace-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function CryptoCurrenciesPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Crypto Currencies`}</title>
      <CryptoMarketplaceSection />
    </>
  )
}
