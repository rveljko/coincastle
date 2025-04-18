export default function NotFoundCardSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <article className="flex-1 p-2">
        <div className="bg-clickable/10 mx-auto mb-1 size-16 animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 mx-auto mb-2 h-10.5 w-full max-w-85 animate-pulse rounded-sm"></div>
        <div className="mx-auto mb-4 max-w-70 space-y-2">
          <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
          <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
        </div>
        <div className="bg-clickable/10 mx-auto h-9.5 w-35 animate-pulse rounded-sm"></div>
      </article>
    </div>
  )
}
