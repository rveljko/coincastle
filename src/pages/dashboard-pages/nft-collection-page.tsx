import NftCollectionSection from '@sections/dashboard-sections/nft-collection-section'
import { useParams } from 'react-router-dom'

export default function NftCollectionPage() {
  const { contractAddress } = useParams()

  if (!contractAddress) return

  return <NftCollectionSection contractAddress={contractAddress} />
}
