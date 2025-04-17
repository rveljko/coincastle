import NftCardsCarouselSkeleton from '@components/dashboard-components/nft-cards-carousel-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function MoreNftsSectionSkeleton() {
  return (
    <Section>
      <div className="bg-clickable/10 mb-2 h-6.5 w-40 animate-pulse rounded-sm"></div>
      <MoreNftsNftsSkeleton />
    </Section>
  )
}

export function MoreNftsNftsSkeleton() {
  return <NftCardsCarouselSkeleton />
}
