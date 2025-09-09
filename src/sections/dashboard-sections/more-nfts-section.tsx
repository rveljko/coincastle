import { MoreNftsNftsSkeleton } from '@components/dashboard-components/more-nfts-section-skeleton'
import NftCardsCarousel from '@components/dashboard-components/nft-cards-carousel'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Button from '@components/ui/button'
import useGetNftCollectionNfts from '@hooks/queries/use-get-nft-collection-nfts'
import Section from '@sections/dashboard-sections/section'

type MoreNftsSectionProps = {
  contractAddress: string
}

export default function MoreNftsSection({
  contractAddress,
}: MoreNftsSectionProps) {
  return (
    <Section>
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        More From This Collection
      </h2>
      <MoreNftsNfts contractAddress={contractAddress} />
    </Section>
  )
}

type MoreNftsNftsProps = {
  contractAddress: string
}

function MoreNftsNfts({ contractAddress }: MoreNftsNftsProps) {
  const { data, isPending, error } = useGetNftCollectionNfts(
    contractAddress,
    10
  )

  if (isPending) return <MoreNftsNftsSkeleton />

  if (error) return <ErrorMessage />

  return (
    <>
      <NftCardsCarousel
        nftCards={data.pages.map((page) => page.result).flat()}
        className="mb-1"
      />
      <Button
        href={`/dashboard/collection/${contractAddress}`}
        variant="link"
        size="large"
        className="mx-auto"
      >
        View Collection
      </Button>
    </>
  )
}
