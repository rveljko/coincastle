export default function NftCardsListSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(calc(var(--spacing)_*_70.25),_100%),_1fr))] gap-4.5">
      {Array.from({ length: 20 }, (_, index) => index).map(() => (
        <div>
          <div className="bg-clickable/10 mb-2 aspect-1/1 animate-pulse rounded-sm"></div>
          <div className="mb-3 space-y-1">
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-[50%] animate-pulse rounded-sm"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
