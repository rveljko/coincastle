import AssetStatisticsSection from '@sections/dashboard-sections/asset-statistics-section'
import HeroSection from '@sections/dashboard-sections/hero-section'
import TrendingCoinsSection from '@sections/dashboard-sections/trending-coins-section'
import TrendingNftsSection from '@sections/dashboard-sections/trending-nfts-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function WalletPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Wallet`}</title>
      <AssetStatisticsSection className="mb-4" />
      <HeroSection className="mb-4" />
      <div className="flex flex-col justify-between gap-4 lg:flex-row">
        <TrendingCoinsSection className="flex-grow" />
        <TrendingNftsSection className="flex-grow" />
      </div>
    </>
  )
}
