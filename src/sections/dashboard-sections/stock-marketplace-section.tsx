import StocksTable from '@components/dashboard-components/stocks-table'
import Section from '@sections/dashboard-sections/section'

export default function StockMarketplaceSection() {
  return (
    <Section>
      <h1 className="mb-4">Stock Marketplace</h1>
      <StocksTable />
    </Section>
  )
}
