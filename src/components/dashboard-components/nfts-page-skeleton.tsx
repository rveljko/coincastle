import NftsMarketplaceSectionSkeleton from '@components/dashboard-components/nfts-marketplace-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function NftsPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}NFTs`}</title>
      <NftsMarketplaceSectionSkeleton />
    </>
  )
}
