import CoinInformationSection from '@sections/dashboard-sections/coin-information-section'
import PopularCoinsSection from '@sections/dashboard-sections/popular-coins-section'
import { useParams } from 'react-router-dom'

export default function CoinPage() {
  const { coinId } = useParams()

  if (!coinId) return

  return (
    <>
      <CoinInformationSection coinId={coinId} className="mb-4" />
      <PopularCoinsSection />
    </>
  )
}
