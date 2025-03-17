import NftCardsList from '@components/dashboard-components/nft-cards-list'
import NftCollectionSectionSkeleton, {
  NftCollectionNftsSkeleton,
  NftCollectionStatisticsSkeleton,
} from '@components/dashboard-components/nft-collection-section-skeleton'
import Dropdown from '@components/dashboard-components/ui/dropdown'
import DropdownButton from '@components/dashboard-components/ui/dropdown-button'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import VerifiedBadge from '@components/dashboard-components/ui/verified-badge'
import useGetNftCollectionInformation from '@hooks/queries/use-get-nft-collection-information'
import useGetNftCollectionNfts from '@hooks/queries/use-get-nft-collection-nfts'
import useGetNftCollectionStatistics from '@hooks/queries/use-get-nft-collection-statistics'
import ArrowsDownUpIcon from '@icons/arrows-down-up-icon'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import {
  ethereumCompactFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import { ethereumAddressValidator } from '@utils/helpers/ethereum-address-validator'
import { numbersWithCommasFormatter } from '@utils/helpers/numbers-formatter'
import {
  NftCollectionNftsSortDirection,
  NftCollectionNftsSortField,
} from '@utils/types'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link, useSearchParams } from 'react-router-dom'

type NftCollectionSectionProps = {
  contractAddress: string
}

export default function NftCollectionSection({
  contractAddress,
}: NftCollectionSectionProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortField = (searchParams.get('sort-field') ||
    '') as NftCollectionNftsSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    '') as NftCollectionNftsSortDirection

  function setSortField(sortField: NftCollectionNftsSortField) {
    setSearchParams((prevParams) => {
      if (prevParams.has('sort-field', sortField)) {
        prevParams.delete('sort-field', sortField)
        return prevParams
      }
      prevParams.set('sort-field', sortField)
      return prevParams
    })
  }

  function setSortDirection(sortDirection: NftCollectionNftsSortDirection) {
    setSearchParams((prevParams) => {
      if (prevParams.has('sort-direction', sortDirection)) {
        prevParams.delete('sort-direction', sortDirection)
        return prevParams
      }

      prevParams.set('sort-direction', sortDirection)
      return prevParams
    })
  }

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
    contract_address,
    description,
    logo_url,
    name,
    opensea_verified,
    owner,
  } = data.data

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
              <h1 className="mb-1 flex items-center gap-1 break-all">
                {name}
                {opensea_verified && <VerifiedBadge />}
              </h1>
              <p>
                Created by{' '}
                {ethereumAddressValidator(owner) ? (
                  <Link to={`/dashboard/wallet/${owner}`} title={owner}>
                    {ethereumAddressFormatter(owner)}
                  </Link>
                ) : (
                  <span>unknown</span>
                )}
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
      <div className="mb-2">
        <DropdownButton
          label="Sort"
          variant="secondary"
          size="large"
          leftIcon={<ArrowsDownUpIcon />}
        >
          <Dropdown.List>
            <Dropdown.Item value="item-1">
              <Dropdown.Summary valueForItem="item-1">Sort By</Dropdown.Summary>
              <Dropdown.Details className="space-y-0.5">
                <Dropdown.Button
                  isActive={sortField === 'latest_trade_price'}
                  onClick={() => setSortField('latest_trade_price')}
                >
                  Latest Trade Price
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'latest_trade_time'}
                  onClick={() => setSortField('latest_trade_time')}
                >
                  Latest Trade Time
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'rarity_rank'}
                  onClick={() => setSortField('rarity_rank')}
                >
                  Rarity Rank
                </Dropdown.Button>
              </Dropdown.Details>
            </Dropdown.Item>
            <Dropdown.Item value="item-2">
              <Dropdown.Summary valueForItem="item-2">
                Sort Direction
              </Dropdown.Summary>
              <Dropdown.Details className="space-y-0.5">
                <Dropdown.Button
                  isActive={sortDirection === 'asc'}
                  onClick={() => setSortDirection('asc')}
                >
                  Ascending
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortDirection === 'desc'}
                  onClick={() => setSortDirection('desc')}
                >
                  Descending
                </Dropdown.Button>
              </Dropdown.Details>
            </Dropdown.Item>
          </Dropdown.List>
        </DropdownButton>
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
  const [searchParams] = useSearchParams()
  const sortField = (searchParams.get('sort-field') ||
    '') as NftCollectionNftsSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    '') as NftCollectionNftsSortDirection

  const { data, isPending, error, fetchNextPage, isFetchingNextPage } =
    useGetNftCollectionNfts(contractAddress, sortField, sortDirection)
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
