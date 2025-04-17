import PopularStocksSectionSkeleton from '@components/dashboard-components/popular-stocks-section-skeleton'
import StockInformationSectionSkeleton from '@components/dashboard-components/stock-information-section-skeleton'

export default function StockPageSkeleton() {
  return (
    <>
      <StockInformationSectionSkeleton />
      <PopularStocksSectionSkeleton />
    </>
  )
}
