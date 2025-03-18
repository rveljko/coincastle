import NftCardSkeleton from '@components/dashboard-components/nft-card-skeleton'

export default function NftCardsCarouselSkeleton() {
  return (
    <div className="w-0 min-w-full overflow-x-auto">
      <div className="mb-2 flex gap-2">
        {Array.from({ length: 10 }, (_, index) => index).map((index) => (
          <div className="min-w-(--nft-card-width)" key={index}>
            <NftCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  )
}
