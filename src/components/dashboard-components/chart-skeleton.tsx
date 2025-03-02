export default function ChartSkeleton() {
  return (
    <div>
      <div className="bg-clickable/10 mb-1 aspect-[2.5/1] h-max animate-pulse rounded-sm"></div>
      <div className="flex justify-between gap-1">
        <div className="bg-clickable/10 h-5 w-full max-w-20 animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 h-5 w-full max-w-20 animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 h-5 w-full max-w-20 animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 h-5 w-full max-w-20 animate-pulse rounded-sm"></div>
      </div>
    </div>
  )
}
