import { integrations } from '@data/integrations'

export default function IntegrationsSectionSkeleton() {
  return (
    <section>
      <div className="bg-clickable/10 mb-2 h-6.5 w-40 animate-pulse rounded-sm"></div>
      <div className="mb-4 flex flex-wrap gap-2">
        {integrations.map((_, index) => (
          <div key={index} className="grow p-2">
            <div className="mb-1 flex items-start justify-between">
              <div className="bg-clickable/10 size-8 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-4 w-8 animate-pulse rounded-sm"></div>
            </div>
            <div className="bg-clickable/10 mb-0.5 h-6 w-40 animate-pulse rounded-sm"></div>
            <div className="max-w-50 space-y-2">
              <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-clickable/10 ml-auto h-9.5 w-35 animate-pulse rounded-sm"></div>
    </section>
  )
}
