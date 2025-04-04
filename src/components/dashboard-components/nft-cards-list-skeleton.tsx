import NftCardSkeleton from '@components/dashboard-components/nft-card-skeleton'

export default function NftCardsListSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--nft-card-width),_100%),_1fr))] gap-4">
      {Array.from({ length: 20 }, (_, index) => index).map((index) => (
        <NftCardSkeleton key={index} />
      ))}
    </div>
  )
}
