import { charts } from '@data/charts'
import { themes } from '@data/themes'

export default function PreferencesSectionSkeleton() {
  return (
    <section className="w-full">
      <div className="bg-clickable/10 mb-2 h-6.5 w-30 animate-pulse rounded-sm"></div>
      <div className="mb-4 space-y-2">
        {themes.map((_, index) => (
          <div key={index}>
            <div className="bg-clickable/10 mb-1 w-40 animate-pulse rounded-sm p-4">
              <div className="aspect-[16/10] size-full"></div>
            </div>
            <div className="bg-clickable/10 h-5 w-20 animate-pulse rounded-sm"></div>
          </div>
        ))}
      </div>
      <div className="bg-clickable/10 mb-2 h-6.5 w-30 animate-pulse rounded-sm"></div>
      <div className="mb-4 space-y-2">
        {charts.map((_, index) => (
          <div key={index}>
            <div className="bg-clickable/10 mb-1 w-40 animate-pulse rounded-sm p-4">
              <div className="aspect-[16/10] size-full"></div>
            </div>
            <div className="bg-clickable/10 h-5 w-20 animate-pulse rounded-sm"></div>
          </div>
        ))}
      </div>
      <div className="bg-clickable/10 ml-auto h-9.5 w-35 animate-pulse rounded-sm"></div>
    </section>
  )
}
