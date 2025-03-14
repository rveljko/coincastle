import NftCardsListSkeleton from '@components/dashboard-components/nft-cards-list-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function NftCollectionSectionSkeleton() {
  return (
    <Section>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <div className="bg-clickable/10 size-32 animate-pulse rounded-sm"></div>
            <div>
              <div className="bg-clickable/10 mb-1 h-10.5 w-50 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5 w-30 animate-pulse rounded-sm"></div>
            </div>
          </div>
          <div className="mb-4 space-y-2">
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
          </div>
        </div>
        <NftCollectionStatisticsSkeleton />
      </div>
      <NftCollectionNftsSkeleton />
    </Section>
  )
}

export function NftCollectionStatisticsSkeleton() {
  return (
    <>
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
      </div>
    </>
  )
}

export function NftCollectionNftsSkeleton() {
  return (
    <>
      <div className="bg-clickable/10 mb-2 ml-auto h-9.5 w-20 animate-pulse rounded-sm"></div>
      <NftCardsListSkeleton />
    </>
  )
}
