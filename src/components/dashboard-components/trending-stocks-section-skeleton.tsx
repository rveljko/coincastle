import TrendingStocksTableSkeleton from '@components/dashboard-components/trending-stocks-table-skeleton'
import Section from '@sections/dashboard-sections/section'

type TrendingStocksSectionSkeletonProps = {
  className?: string
}

export default function TrendingStocksSectionSkeleton({
  className,
}: TrendingStocksSectionSkeletonProps) {
  return (
    <Section className={className}>
      <div className="flex h-full flex-col justify-between gap-2">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <div className="bg-clickable/10 h-6.5 w-38 animate-pulse rounded-sm"></div>
          <div className="bg-clickable/10 h-7.5 w-22 animate-pulse rounded-sm"></div>
        </header>
        <TrendingStocksTableSkeleton numberOfStocks={5} />
      </div>
    </Section>
  )
}
