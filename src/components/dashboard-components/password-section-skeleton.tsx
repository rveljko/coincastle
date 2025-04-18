export default function PasswordSectionSkeleton() {
  return (
    <section className="w-full">
      <div className="bg-clickable/10 mb-2 h-6.5 w-40 animate-pulse rounded-sm"></div>
      <div className="mb-4 max-w-(--input-max-width) space-y-1">
        <div className="bg-clickable/10 h-6 w-20 animate-pulse rounded-sm"></div>
        <div className="bg-clickable/10 h-10 w-full animate-pulse rounded-sm"></div>
      </div>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="bg-clickable/10 mb-2 h-6.5 w-40 animate-pulse rounded-sm"></div>
          <div className="space-y-2">
            <div className="bg-clickable/10 h-4 w-50 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-50 animate-pulse rounded-sm"></div>
          </div>
        </div>
        <div className="bg-clickable/10 h-4 w-8 animate-pulse rounded-sm"></div>
      </div>
      <div className="bg-clickable/10 ml-auto h-9.5 w-35 animate-pulse rounded-sm"></div>
    </section>
  )
}
