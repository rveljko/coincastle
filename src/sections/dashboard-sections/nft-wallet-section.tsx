import NftCardsList from '@components/dashboard-components/nft-cards-list'
import NftWalletSectionSkeleton, {
  NftWalletNftsHttpResponseSkeleton,
} from '@components/dashboard-components/nft-wallet-section-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import useGetNftWalletNfts from '@hooks/queries/use-get-nft-wallet-nfts'
import useGetNftWalletStatistics from '@hooks/queries/use-get-nft-wallet-statistics'
import WalletIcon from '@icons/wallet-icon'
import Section from '@sections/dashboard-sections/section'
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
  const { data, isPending, error } = useGetNftWalletStatistics(walletAddress)

  if (isPending) return <NftWalletSectionSkeleton />

  if (error)
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  const { nfts, collections, nft_transfers, token_transfers, transactions } =
    data

  return (
    <Section>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <header className="mb-4 flex w-full flex-wrap gap-2">
          <div className="[&>svg]:text-clickable flex size-32 items-center justify-center rounded-full bg-neutral-700 [&>svg]:size-16">
            <WalletIcon />
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
            <InformationList.Label>NFTs Held</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(parseInt(nfts))}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Collections Held</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(parseInt(collections))}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Total NFT Transfers</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(parseInt(nft_transfers.total))}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Total Token Transfers</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(parseInt(token_transfers.total))}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Total Transactions</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(parseInt(transactions.total))}
            </InformationList.Value>
          </InformationList.Item>
        </InformationList>
      </div>
      <NftWalletNftsHttpResponse walletAddress={walletAddress} />
    </Section>
  )
}

type NftWalletNftsHttpResponseProps = {
  walletAddress: string
}

function NftWalletNftsHttpResponse({
  walletAddress,
}: NftWalletNftsHttpResponseProps) {
  const { data, isPending, error, fetchNextPage, isFetchingNextPage } =
    useGetNftWalletNfts(walletAddress, 20)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView, fetchNextPage])

  if (isPending) return <NftWalletNftsHttpResponseSkeleton />

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
