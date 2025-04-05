import TrendingNftCollectionsTable from '@components/dashboard-components/trending-nft-collections-table'
import Button from '@components/ui/button'
import Section from '@sections/dashboard-sections/section'

type TrendingNftsSectionProps = {
  className?: string
}

export default function TrendingNftsSection({
  className,
}: TrendingNftsSectionProps) {
  return (
    <Section className={className}>
      <div className="flex h-full flex-col justify-between gap-2">
        <header className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-heading-4-font-size leading-heading-4-line-height">
            Trending NFTs
          </h2>
          <Button href="/dashboard/nfts" variant="link" size="small">
            View More
          </Button>
        </header>
        <TrendingNftCollectionsTable />
      </div>
    </Section>
  )
}
