import NftCardsList from '@components/dashboard-components/nft-cards-list'
import NftCollectionSectionSkeleton, {
  NftCollectionNftsSkeleton,
  NftCollectionStatisticsSkeleton,
} from '@components/dashboard-components/nft-collection-section-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import VerifiedBadge from '@components/dashboard-components/ui/verified-badge'
import useGetNftCollectionInformation from '@hooks/queries/use-get-nft-collection-information'
import useGetNftCollectionNfts from '@hooks/queries/use-get-nft-collection-nfts'
import useGetNftCollectionStatistics from '@hooks/queries/use-get-nft-collection-statistics'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import { ethereumPriceFormatter } from '@utils/helpers/currency-formatter'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type NftCollectionSectionProps = {
  contractAddress: string
}

export default function NftCollectionSection({
  contractAddress,
}: NftCollectionSectionProps) {
  const { data, isPending, error } =
    useGetNftCollectionInformation(contractAddress)

  if (isPending) return <NftCollectionSectionSkeleton />

  if (error)
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  const {
    token_address,
    name,
    collection_logo,
    description,
    verified_collection,
  } = data

  return (
    <Section>
      <title>{`${TITLE_PREFIX}${name}`}</title>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <header>
          <div className="mb-2 flex flex-wrap gap-2">
            <img
              className="size-32 rounded-md object-cover"
              src={collection_logo}
              alt={name}
              title={name}
            />
            <div>
              <h1 className="mb-1 flex items-center gap-1 break-all">
                {name}
                {verified_collection && <VerifiedBadge />}
              </h1>
            </div>
          </div>
          <p
            style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}
            className="mb-4 line-clamp-2 text-ellipsis"
          >
            {description}
          </p>
        </header>
        <NftCollectionStatistics contractAddress={contractAddress} />
      </div>
      <NftCollectionNfts contractAddress={token_address} />
    </Section>
  )
}

type NftCollectionStatisticsProps = {
  contractAddress: string
}

function NftCollectionStatistics({
  contractAddress,
}: NftCollectionStatisticsProps) {
  const { data, isPending, error } =
    useGetNftCollectionStatistics(contractAddress)

  if (isPending) return <NftCollectionStatisticsSkeleton />

  if (error) return <ErrorMessage />

  const { last_sale, lowest_sale, highest_sale, average_sale } = data

  return (
    <>
      <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Collection Statistics
      </h3>
      <InformationList>
        <InformationList.Item>
          <InformationList.Label>Floor Price</InformationList.Label>
          <InformationList.Value>
            {ethereumPriceFormatter(lowest_sale.price_formatted)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Last Price</InformationList.Label>
          <InformationList.Value>
            {ethereumPriceFormatter(last_sale.price_formatted)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Average Price</InformationList.Label>
          <InformationList.Value>
            {ethereumPriceFormatter(average_sale.price_formatted)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Highest Price</InformationList.Label>
          <InformationList.Value>
            {ethereumPriceFormatter(highest_sale.price_formatted)}
          </InformationList.Value>
        </InformationList.Item>
      </InformationList>
    </>
  )
}

type NftCollectionNftsProps = {
  contractAddress: string
}

function NftCollectionNfts({ contractAddress }: NftCollectionNftsProps) {
  const { data, isPending, error, fetchNextPage, isFetchingNextPage } =
    useGetNftCollectionNfts(contractAddress, 20)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView, fetchNextPage])

  if (isPending) return <NftCollectionNftsSkeleton />

  if (error) return <ErrorMessage />

  return (
    <>
      <NftCardsList
        nftCards={data.pages.map((page) => page.result).flat()}
        isLoadingSkeletons={isFetchingNextPage}
      />
      <div ref={ref}></div>
    </>
  )
}
