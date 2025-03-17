export default function NftCardSkeleton() {
  return (
    <div>
      <div className="bg-clickable/10 mb-2 aspect-1/1 animate-pulse rounded-sm"></div>
      <div className="mb-2 space-y-1">
        <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 h-4 w-[50%] animate-pulse rounded-sm"></div>
      </div>
      <div className="bg-clickable/10 mb-3 h-5 w-20 animate-pulse rounded-sm"></div>
    </div>
  )
}
