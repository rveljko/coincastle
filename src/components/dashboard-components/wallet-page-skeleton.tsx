import AssetStatisticsSectionSkeleton from '@components/dashboard-components/asset-statistics-section-skeleton'
import BalanceSectionSkeleton from '@components/dashboard-components/balance-section-skeleton'
import HeroSectionSkeleton from '@components/dashboard-components/hero-section-skeleton'
import RewardsSectionSkeleton from '@components/dashboard-components/rewards-section-skeleton'
import TrendingCoinsSectionSkeleton from '@components/dashboard-components/trending-coins-section-skeleton'
import TrendingNftsSectionSkeleton from '@components/dashboard-components/trending-nfts-section-skeleton'
import TrendingStocksSectionSkeleton from '@components/dashboard-components/trending-stocks-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function WalletPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Wallet`}</title>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 lg:flex-7">
          <AssetStatisticsSectionSkeleton />
          <HeroSectionSkeleton className="h-full" />
        </div>
        <div className="flex flex-col gap-4 lg:flex-3">
          <BalanceSectionSkeleton coinAmounts={5} />
          <RewardsSectionSkeleton className="h-full" />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <TrendingCoinsSectionSkeleton className="flex-grow" />
        <TrendingNftsSectionSkeleton className="flex-grow" />
        <TrendingStocksSectionSkeleton className="flex-grow" />
      </div>
    </>
  )
}
