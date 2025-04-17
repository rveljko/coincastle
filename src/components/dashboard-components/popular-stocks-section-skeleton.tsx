import StocksTableSkeleton from '@components/dashboard-components/stocks-table-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function PopularStocksSectionSkeleton() {
  return (
    <Section>
      <div className="bg-clickable/10 mb-2 h-6.5 w-40 animate-pulse rounded-sm"></div>
      <StocksTableSkeleton numberOfStocks={5} className="mb-1" />
      <div className="bg-clickable/10 mx-auto h-9.5 w-20 animate-pulse rounded-sm"></div>
    </Section>
  )
}
