import CoinInformationSection from '@sections/coin-information-section'
import { useParams } from 'react-router-dom'

export default function CoinPage() {
  const { coinId } = useParams()

  if (!coinId) return

  return <CoinInformationSection coinId={coinId} />
}
