import NftCardSkeleton from '@components/dashboard-components/nft-card-skeleton'

export default function NftCardsListSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(calc(var(--spacing)_*_70.25),_100%),_1fr))] gap-4.5">
      {Array.from({ length: 20 }, (_, index) => index).map((index) => (
        <NftCardSkeleton key={index} />
      ))}
    </div>
  )
}
