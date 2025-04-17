export default function ContactUsSectionSkeleton() {
  return (
    <section>
      <div className="bg-clickable/10 mb-2 h-6.5 w-40 animate-pulse rounded-sm"></div>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full max-w-(--input-max-width) flex-1 space-y-2">
          <div className="space-y-1">
            <div className="bg-clickable/10 h-6 w-20 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-10 w-full animate-pulse rounded-sm"></div>
          </div>
          <div className="space-y-1">
            <div className="bg-clickable/10 h-6 w-20 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 aspect-2/1 w-full animate-pulse rounded-sm"></div>
          </div>
          <div className="bg-clickable/10 h-9.5 w-full animate-pulse rounded-sm"></div>
        </div>
        <div className="flex-1">
          <div className="mb-2 w-full max-w-76 space-y-2">
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
          </div>
          <div className="w-full max-w-30">
            <div className="flex items-center gap-1 py-1.25">
              <div className="bg-clickable/10 size-5.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5.5 w-full animate-pulse rounded-sm"></div>
            </div>
            <div className="flex items-center gap-1 py-1.25">
              <div className="bg-clickable/10 size-5.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5.5 w-full animate-pulse rounded-sm"></div>
            </div>
            <div className="flex items-center gap-1 py-1.25">
              <div className="bg-clickable/10 size-5.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5.5 w-full animate-pulse rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
