import StockMarketplaceSectionSkeleton from '@components/dashboard-components/stock-marketplace-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function StocksPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Stocks`}</title>
      <StockMarketplaceSectionSkeleton />
    </>
  )
}
