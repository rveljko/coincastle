import CoinInformationSectionSkeleton from '@components/dashboard-components/coin-information-section-skeleton'
import PopularCoinsSectionSkeleton from '@components/dashboard-components/popular-coins-section-skeleton'

export default function CoinPageSkeleton() {
  return (
    <>
      <CoinInformationSectionSkeleton />
      <PopularCoinsSectionSkeleton />
    </>
  )
}
