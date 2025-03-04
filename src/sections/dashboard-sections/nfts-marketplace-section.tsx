import NftCollectionsTable from '@components/dashboard-components/nft-collections-table'
import Section from '@sections/dashboard-sections/section'

export default function NftsMarketplaceSection() {
  return (
    <Section>
      <h1 className="mb-4">NFTs Marketplace</h1>
      <NftCollectionsTable />
    </Section>
  )
}
