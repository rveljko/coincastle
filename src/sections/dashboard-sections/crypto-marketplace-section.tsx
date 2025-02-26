import CryptoCoinsTable from '@components/dashboard-components/crypto-coins-table'
import Section from '@sections/dashboard-sections/section'

export default function CryptoMarketplaceSection() {
  return (
    <Section>
      <h1 className="mb-4">Crypto Marketplace</h1>
      <CryptoCoinsTable numberOfCoins={100} />
    </Section>
  )
}
