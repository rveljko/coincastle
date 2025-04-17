export default function GuideCardSkeleton() {
  return (
    <article>
      <div className="bg-clickable/10 mb-2 aspect-video animate-pulse rounded-sm"></div>
      <div className="space-y-2">
        <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 h-4 w-3/4 animate-pulse rounded-sm"></div>
      </div>
    </article>
  )
}
