export default function HelpCenterGuidesSectionSkeleton() {
  return (
    <section>
      <div className="bg-clickable/10 mb-2 h-6.5 w-40 animate-pulse rounded-sm"></div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <div className="mb-2 w-full max-w-76 space-y-1.5">
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
          </div>
          <div className="w-full max-w-76 space-y-1.5">
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
          </div>
        </div>
        <div className="bg-clickable/10 h-5.5 w-20 animate-pulse rounded-sm"></div>
      </div>
    </section>
  )
}
