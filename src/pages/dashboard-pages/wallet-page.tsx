import AssetStatisticsSection from '@sections/dashboard-sections/asset-statistics-section'
import HeroSection from '@sections/dashboard-sections/hero-section'
import RewardsSection from '@sections/dashboard-sections/rewards-section'
import TrendingCoinsSection from '@sections/dashboard-sections/trending-coins-section'
import TrendingNftsSection from '@sections/dashboard-sections/trending-nfts-section'
import TrendingStocksSection from '@sections/dashboard-sections/trending-stocks-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function WalletPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Wallet`}</title>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 lg:flex-7">
          <AssetStatisticsSection />
          <HeroSection />
        </div>
        <RewardsSection className="lg:flex-3" />
      </div>
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <TrendingCoinsSection className="flex-grow" />
        <TrendingNftsSection className="flex-grow" />
        <TrendingStocksSection className="flex-grow" />
      </div>
    </>
  )
}
