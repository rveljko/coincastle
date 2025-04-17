import NftCollectionsTableSkeleton from '@components/dashboard-components/nft-collections-table-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function NftsMarketplaceSectionSkeleton() {
  return (
    <Section>
      <div className="bg-clickable/10 mb-2 h-10.5 w-full max-w-80 animate-pulse rounded-sm"></div>
      <div className="bg-clickable/10 mb-4 h-9.5 w-20 animate-pulse rounded-sm"></div>
      <NftCollectionsTableSkeleton numberOfNftCollections={100} />
    </Section>
  )
}
