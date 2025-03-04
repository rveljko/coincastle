import NftsMarketplaceSection from '@sections/dashboard-sections/nfts-marketplace-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function NftsPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}NFTs`}</title>
      <NftsMarketplaceSection />
    </>
  )
}
