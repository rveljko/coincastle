import NftCardsList from '@components/dashboard-components/nft-cards-list'
import NftWalletSectionSkeleton, {
  NftWalletStatisticsSkeleton,
} from '@components/dashboard-components/nft-wallet-section-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import useGetNftWalletStatistics from '@hooks/queries/use-get-nft-wallet-statistics'
import useGetWalletNfts from '@hooks/queries/use-get-wallet-nfts'
import WalletIcon from '@icons/wallet-icon'
import Section from '@sections/dashboard-sections/section'
import {
  currencyFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import { numbersWithCommasFormatter } from '@utils/helpers/numbers-formatter'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type NftWalletSectionProps = {
  walletAddress: string
}

export default function NftWalletSection({
  walletAddress,
}: NftWalletSectionProps) {
  const { data, isPending, error, fetchNextPage, isFetchingNextPage } =
    useGetWalletNfts(walletAddress)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView, fetchNextPage])

  if (isPending) return <NftWalletSectionSkeleton />

  if (error) return <ErrorMessage />

  return (
    <Section>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <header className="mb-4 flex flex-wrap gap-2">
          <div className="flex size-32 items-center justify-center rounded-full bg-neutral-700">
            <WalletIcon className="text-clickable size-16" />
          </div>
          <h1 className="break-all">
            {ethereumAddressFormatter(walletAddress)}
          </h1>
        </header>
        <NftWalletStatistics walletAddress={walletAddress} />
      </div>
      <NftCardsList
        nftCards={data.pages.map((page) => page.data.content).flat()}
        isLoadingSkeletons={isFetchingNextPage}
      />
      <div ref={ref}></div>
    </Section>
  )
}

type NftWalletStatisticsProps = {
  walletAddress: string
}

function NftWalletStatistics({ walletAddress }: NftWalletStatisticsProps) {
  const { data, isPending, error } = useGetNftWalletStatistics(walletAddress)

  if (isPending) return <NftWalletStatisticsSkeleton />

  if (error) return <ErrorMessage />

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
    <>
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
    </>
  )
}
