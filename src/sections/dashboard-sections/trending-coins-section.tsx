import TrendingCryptoCoinsTable from '@components/dashboard-components/trending-crypto-coins-table'
import Button from '@components/ui/button'
import Section from '@sections/dashboard-sections/section'

export default function TrendingCoinsSection() {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
          Trending Coins
        </h2>
        <Button href="/dashboard/crypto-currencies" variant="link" size="small">
          View More
        </Button>
      </div>
      <TrendingCryptoCoinsTable />
    </Section>
  )
}
