export default function SidebarSkeleton() {
  return (
    <aside className="border-r-section-outline sticky inset-y-0 top-0 left-0 z-999 h-screen w-fit border-r bg-(image:--section-background) p-4 backdrop-blur-lg md:min-w-(--sidebar-opened-width)">
      <div className="flex h-full flex-col items-center gap-2 md:items-stretch">
        <div className="flex w-full flex-col-reverse items-center gap-2 md:flex-row md:justify-between">
          <div className="flex items-center gap-1">
            <div className="bg-clickable/10 size-7 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 hidden h-7 w-26 animate-pulse rounded-sm md:block"></div>
          </div>
          <div className="bg-clickable/10 size-5.5 animate-pulse rounded-sm"></div>
        </div>
        <div className="bg-clickable/10 size-7.5 shrink-0 animate-pulse rounded-sm md:w-full"></div>
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-clickable/10 size-6.5 shrink-0 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 hidden h-6.5 w-full animate-pulse rounded-sm md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
