import StockMarketplaceSection from '@sections/dashboard-sections/stock-marketplace-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function StocksPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Stocks`}</title>
      <StockMarketplaceSection />
    </>
  )
}
