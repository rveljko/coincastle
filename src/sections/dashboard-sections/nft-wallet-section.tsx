import NftCardsList from '@components/dashboard-components/nft-cards-list'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import useGetWalletNfts from '@hooks/queries/use-get-wallet-nfts'
import WalletIcon from '@icons/wallet-icon'
import Section from '@sections/dashboard-sections/section'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'

type NftWalletSectionProps = {
  walletAddress: string
}

export default function NftWalletSection({
  walletAddress,
}: NftWalletSectionProps) {
  const { data, isPending, error } = useGetWalletNfts(walletAddress)

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

  return (
    <Section>
      <header className="mb-4 flex flex-wrap gap-2">
        <div className="flex size-32 items-center justify-center rounded-full bg-neutral-700">
          <WalletIcon className="text-clickable size-16" />
        </div>
        <h1>{ethereumAddressFormatter(walletAddress)}</h1>
      </header>
      <NftCardsList nftCards={data.data.content} />
    </Section>
  )
}
