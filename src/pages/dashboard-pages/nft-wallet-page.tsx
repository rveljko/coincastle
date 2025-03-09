import NftWalletSection from '@sections/dashboard-sections/nft-wallet-section'
import { TITLE_PREFIX } from '@utils/constants'
import { useParams } from 'react-router-dom'

export default function NftWalletPage() {
  const { walletAddress } = useParams()

  if (!walletAddress) return

  return (
    <>
      <title>{`${TITLE_PREFIX}${walletAddress}`}</title>
      <NftWalletSection walletAddress={walletAddress} />
    </>
  )
}
