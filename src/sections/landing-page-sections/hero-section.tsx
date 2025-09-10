import Container from '@components/container'
import Sidebar from '@components/dashboard-components/sidebar'
import HeroText from '@components/landing-page-components/hero-text'
import AssetStatisticsSection from '@sections/dashboard-sections/asset-statistics-section'
import BalanceSection from '@sections/dashboard-sections/balance-section'
import HeroDashboardSection from '@sections/dashboard-sections/hero-section'
import RewardsSection from '@sections/dashboard-sections/rewards-section'
import TrendingCoinsSection from '@sections/dashboard-sections/trending-coins-section'
import TrendingNftsSection from '@sections/dashboard-sections/trending-nfts-section'
import TrendingStocksSection from '@sections/dashboard-sections/trending-stocks-section'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section className="py-16">
      <Container>
        <HeroText
          heading="Unlock Your Investment Potential with CoinCastle Today!"
          paragraph="Manage cryptocurrencies, NFTs, and stocks effortlessly with real-time insights and powerful features at your fingertips"
        />
      </Container>
      <motion.div
        initial={{
          opacity: 0,
          transform: 'translateY(calc(var(--spacing)*-4))',
        }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.3, ease: 'easeOut' }}
        className="bg-(image:--section-gradient) py-16"
      >
        <Container>
          <div className="border-section-outline h-[80vh] overflow-hidden rounded-lg border md:h-200">
            <div
              id="dashboard-layout"
              className="relative flex h-full overflow-hidden"
            >
              <Sidebar />
              <div className="h-full w-full overflow-y-auto py-4">
                <Container className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="flex flex-col gap-4 lg:flex-7">
                      <AssetStatisticsSection />
                      <HeroDashboardSection className="h-full" />
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-3">
                      <BalanceSection />
                      <RewardsSection className="h-full" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4 lg:flex-row">
                    <TrendingCoinsSection className="flex-grow" />
                    <TrendingNftsSection className="flex-grow" />
                    <TrendingStocksSection className="flex-grow" />
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
