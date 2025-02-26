import CryptoCoinsTable from '@components/dashboard-components/crypto-coins-table'
import Section from '@sections/dashboard-sections/section'

export default function PopularCoinsSection() {
  return (
    <Section>
      <h2 className="text-heading-4-font-size mb-4">Popular Coins</h2>
      <CryptoCoinsTable numberOfCoins={5} />
    </Section>
  )
}
