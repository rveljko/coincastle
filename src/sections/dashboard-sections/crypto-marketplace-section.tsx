import CryptoMarketplaceTable from '@components/dashboard-components/crypto-marketplace-table'
import Section from '@sections/dashboard-sections/section'

export default function CryptoMarketplaceSection() {
  return (
    <Section>
      <h1 className="mb-4">Crypto Marketplace</h1>
      <CryptoMarketplaceTable />
    </Section>
  )
}
