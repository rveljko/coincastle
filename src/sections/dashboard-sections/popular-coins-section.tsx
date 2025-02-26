import CryptoMarketplaceTable from '@components/dashboard-components/crypto-marketplace-table'
import Section from '@sections/dashboard-sections/section'

export default function PopularCoinsSection() {
  return (
    <Section>
      <h2 className="text-heading-4-font-size mb-4">Popular Coins</h2>
      <CryptoMarketplaceTable numberOfCoins={5} />
    </Section>
  )
}
