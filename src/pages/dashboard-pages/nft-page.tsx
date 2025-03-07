import MoreNftsSection from '@sections/dashboard-sections/more-nfts-section'
import NftSection from '@sections/dashboard-sections/nft-section'
import { useParams } from 'react-router-dom'

export default function NftPage() {
  const { contractAddress, tokenId } = useParams()

  if (!contractAddress || !tokenId) return

  return (
    <>
      <NftSection
        className="mb-4"
        contractAddress={contractAddress}
        tokenId={tokenId}
      />
      <MoreNftsSection contractAddress={contractAddress} />
    </>
  )
}
