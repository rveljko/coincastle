import TrendingStocksTable from '@components/dashboard-components/trending-stocks-table'
import Button from '@components/ui/button'
import Section from '@sections/dashboard-sections/section'

type TrendingStocksSectionProps = {
  className?: string
}

export default function TrendingStocksSection({
  className,
}: TrendingStocksSectionProps) {
  return (
    <Section className={className}>
      <div className="flex h-full flex-col justify-between gap-2">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-heading-4-font-size leading-heading-4-line-height">
            Trending Stocks
          </h2>
          <Button href="/dashboard/stocks" variant="link" size="small">
            View More
          </Button>
        </header>
        <TrendingStocksTable />
      </div>
    </Section>
  )
}
