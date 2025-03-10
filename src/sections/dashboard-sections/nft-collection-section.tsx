import NftCardsList from '@components/dashboard-components/nft-cards-list'
import NftCollectionSectionSkeleton, {
  NftCollectionNftsSkeleton,
  NftCollectionStatisticsSkeleton,
} from '@components/dashboard-components/nft-collection-section-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import useGetNftCollectionInformation from '@hooks/queries/use-get-nft-collection-information'
import useGetNftCollectionNfts from '@hooks/queries/use-get-nft-collection-nfts'
import useGetNftCollectionStatistics from '@hooks/queries/use-get-nft-collection-statistics'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import {
  ethereumCompactFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import { numbersWithCommasFormatter } from '@utils/helpers/numbers-formatter'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

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

  const { contract_address, description, logo_url, name, owner } = data.data

  return (
    <Section>
      <title>{`${TITLE_PREFIX}${name}`}</title>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <header>
          <div className="mb-2 flex flex-wrap gap-2">
            <img
              className="size-32 rounded-md object-cover"
              src={logo_url}
              alt={name}
              title={name}
            />
            <div>
              <h1 className="mb-1 break-all">{name}</h1>
              <p>
                Created by{' '}
                <Link to={`/dashboard/wallet/${owner}`} title={owner}>
                  {ethereumAddressFormatter(owner)}
                </Link>
              </p>
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
      <NftCollectionNfts contractAddress={contract_address} />
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

  const { floor_price, items_total, owners_total, total_volume } = data.data

  return (
    <>
      <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Collection Statistics
      </h3>
      <InformationList>
        <InformationList.Item>
          <InformationList.Label>Floor Price</InformationList.Label>
          <InformationList.Value>
            {ethereumPriceFormatter(floor_price)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Volume</InformationList.Label>
          <InformationList.Value>
            {ethereumCompactFormatter(total_volume)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Owners</InformationList.Label>
          <InformationList.Value>
            {numbersWithCommasFormatter(owners_total)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Items</InformationList.Label>
          <InformationList.Value>
            {numbersWithCommasFormatter(items_total)}
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
    useGetNftCollectionNfts(contractAddress)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView, fetchNextPage])

  if (isPending) return <NftCollectionNftsSkeleton />

  if (error) return <ErrorMessage />

  return (
    <>
      <NftCardsList
        nftCards={data.pages.map((page) => page.data.content).flat()}
        isLoadingSkeletons={isFetchingNextPage}
      />
      <div ref={ref}></div>
    </>
  )
}
