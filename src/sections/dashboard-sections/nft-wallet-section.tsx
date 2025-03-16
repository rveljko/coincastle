import NftCardsList from '@components/dashboard-components/nft-cards-list'
import NftWalletSectionSkeleton, {
  NftWalletNftsSkeleton,
} from '@components/dashboard-components/nft-wallet-section-skeleton'
import Dropdown from '@components/dashboard-components/ui/dropdown'
import DropdownButton from '@components/dashboard-components/ui/dropdown-button'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import useGetNftWalletStatistics from '@hooks/queries/use-get-nft-wallet-statistics'
import useGetWalletNfts from '@hooks/queries/use-get-wallet-nfts'
import ArrowsDownUpIcon from '@icons/arrows-down-up-icon'
import WalletIcon from '@icons/wallet-icon'
import Section from '@sections/dashboard-sections/section'
import {
  currencyFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import { numbersWithCommasFormatter } from '@utils/helpers/numbers-formatter'
import {
  NftWalletNftsSortDirection,
  NftWalletNftsSortField,
} from '@utils/types'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'react-router-dom'

type NftWalletSectionProps = {
  walletAddress: string
}

export default function NftWalletSection({
  walletAddress,
}: NftWalletSectionProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortField = (searchParams.get('sort-field') ||
    '') as NftWalletNftsSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    '') as NftWalletNftsSortDirection

  function setSortField(sortField: NftWalletNftsSortField) {
    setSearchParams((prevParams) => {
      if (prevParams.has('sort-field', sortField)) {
        prevParams.delete('sort-field', sortField)
        return prevParams
      }
      prevParams.set('sort-field', sortField)
      return prevParams
    })
  }

  function setSortDirection(sortDirection: NftWalletNftsSortDirection) {
    setSearchParams((prevParams) => {
      if (prevParams.has('sort-direction', sortDirection)) {
        prevParams.delete('sort-direction', sortDirection)
        return prevParams
      }

      prevParams.set('sort-direction', sortDirection)
      return prevParams
    })
  }

  const { data, isPending, error } = useGetNftWalletStatistics(walletAddress)

  if (isPending) return <NftWalletSectionSkeleton />

  if (error || !data.data)
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  const {
    holding_value,
    holding_value_usdt,
    sold_value,
    sold_value_usdt,
    gas_value,
    gas_value_usdt,
    holding_count,
    mint_count,
    collection_count,
  } = data.data

  return (
    <Section>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <header className="mb-4 flex w-full flex-wrap gap-2">
          <div className="flex size-32 items-center justify-center rounded-full bg-neutral-700">
            <WalletIcon className="text-clickable size-16" />
          </div>
          <h1 className="break-all">
            {ethereumAddressFormatter(walletAddress)}
          </h1>
        </header>
        <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
          Wallet Statistics
        </h3>
        <InformationList>
          <InformationList.Item>
            <InformationList.Label>Holding Value</InformationList.Label>
            <InformationList.Value>
              {ethereumPriceFormatter(holding_value)} (
              {currencyFormatter(holding_value_usdt)})
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Sold Value</InformationList.Label>
            <InformationList.Value>
              {ethereumPriceFormatter(sold_value)} (
              {currencyFormatter(sold_value_usdt)})
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Gas Fees</InformationList.Label>
            <InformationList.Value>
              {ethereumPriceFormatter(gas_value)} (
              {currencyFormatter(gas_value_usdt)})
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>NFTs Held</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(holding_count)}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Minted NFTs</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(mint_count)}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Collections Held</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(collection_count)}
            </InformationList.Value>
          </InformationList.Item>
        </InformationList>
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
                  isActive={sortField === 'mint_time'}
                  onClick={() => setSortField('mint_time')}
                >
                  Mint Time
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'own_time'}
                  onClick={() => setSortField('own_time')}
                >
                  Own Time
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'latest_trade_price'}
                  onClick={() => setSortField('latest_trade_price')}
                >
                  Latest Trade Price
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
      <NftWalletNfts walletAddress={walletAddress} />
    </Section>
  )
}

type NftWalletNftsProps = {
  walletAddress: string
}

function NftWalletNfts({ walletAddress }: NftWalletNftsProps) {
  const [searchParams] = useSearchParams()
  const sortField = (searchParams.get('sort-field') ||
    '') as NftWalletNftsSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    '') as NftWalletNftsSortDirection

  const { data, isPending, error, fetchNextPage, isFetchingNextPage } =
    useGetWalletNfts(walletAddress, sortField, sortDirection)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView, fetchNextPage])

  if (isPending) return <NftWalletNftsSkeleton />

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
