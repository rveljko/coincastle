import NftCardsList from '@components/dashboard-components/nft-cards-list'
import NftCardsListSkeleton from '@components/dashboard-components/nft-cards-list-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
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
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-4">
        More From This Collection
      </h2>
      <Nfts contractAddress={contractAddress} />
    </Section>
  )
}

type NftsProps = {
  contractAddress: string
}

function Nfts({ contractAddress }: NftsProps) {
  const { data, isPending, error } = useGetNftCollectionNfts(contractAddress)

  if (isPending) return <NftCardsListSkeleton />

  if (error) return <ErrorMessage />

  return <NftCardsList nftCards={data.data.content} />
}
