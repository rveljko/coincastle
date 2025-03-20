import StocksTable from '@components/dashboard-components/stocks-table'
import Button from '@components/ui/button'
import Section from '@sections/dashboard-sections/section'

export default function PopularStocksSection() {
  return (
    <Section>
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Popular Stocks
      </h2>
      <StocksTable numberOfStocks={5} className="mb-1" />
      <Button
        href="/dashboard/stocks"
        variant="link"
        size="large"
        className="mx-auto"
      >
        View More
      </Button>
    </Section>
  )
}
