import CryptoCoinsTableSkeleton from '@components/dashboard-components/crypto-coins-table-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function CryptoMarketplaceSectionSkeleton() {
  return (
    <Section>
      <div className="bg-clickable/10 mb-2 h-10.5 w-full max-w-80 animate-pulse rounded-sm"></div>
      <div className="bg-clickable/10 mb-4 h-9.5 w-20 animate-pulse rounded-sm"></div>
      <CryptoCoinsTableSkeleton numberOfCoins={100} />
    </Section>
  )
}
