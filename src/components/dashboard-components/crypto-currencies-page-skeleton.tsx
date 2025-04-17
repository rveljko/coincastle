import CryptoMarketplaceSectionSkeleton from '@components/dashboard-components/crypto-marketplace-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function CryptoCurrenciesPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Crypto Currencies`}</title>
      <CryptoMarketplaceSectionSkeleton />
    </>
  )
}
