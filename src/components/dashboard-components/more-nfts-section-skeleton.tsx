import NftCardsCarouselSkeleton from '@components/dashboard-components/nft-cards-carousel-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function MoreNftsSectionSkeleton() {
  return (
    <Section>
      <MoreNftsNftsSkeleton />
    </Section>
  )
}

export function MoreNftsNftsSkeleton() {
  return <NftCardsCarouselSkeleton />
}
