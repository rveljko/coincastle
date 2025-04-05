import TrendingCryptoCoinsTable from '@components/dashboard-components/trending-crypto-coins-table'
import Button from '@components/ui/button'
import Section from '@sections/dashboard-sections/section'

type TrendingCoinsSectionProps = {
  className?: string
}

export default function TrendingCoinsSection({
  className,
}: TrendingCoinsSectionProps) {
  return (
    <Section className={className}>
      <div className="flex h-full flex-col justify-between gap-2">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-heading-4-font-size leading-heading-4-line-height">
            Trending Coins
          </h2>
          <Button href="/dashboard/crypto" variant="link" size="small">
            View More
          </Button>
        </header>
        <TrendingCryptoCoinsTable />
      </div>
    </Section>
  )
}
