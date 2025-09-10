import NftCardsListSkeleton from '@components/dashboard-components/nft-cards-list-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function NftWalletSectionSkeleton() {
  return (
    <Section>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <header className="mb-4 flex flex-wrap gap-2">
          <div className="bg-clickable/10 size-32 animate-pulse rounded-sm"></div>
          <div className="bg-clickable/10 mb-1 h-10.5 w-50 animate-pulse rounded-sm"></div>
        </header>
        <div className="bg-clickable/10 mb-2 h-6.5 w-full max-w-44 animate-pulse rounded-sm"></div>
        <div className="space-y-1">
          <div className="flex justify-between gap-2">
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
          </div>
        </div>
      </div>
      <NftWalletNftsSkeleton />
    </Section>
  )
}

export function NftWalletNftsSkeleton() {
  return <NftCardsListSkeleton />
}
