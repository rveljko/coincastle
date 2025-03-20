import ChartSkeleton from '@components/dashboard-components/chart-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function StockInformationSectionSkeleton() {
  return (
    <Section>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-4">
          <div className="mb-4 flex gap-2">
            <div className="bg-clickable/10 size-8 animate-pulse rounded-full"></div>
            <div className="bg-clickable/10 h-8 w-full max-w-30 animate-pulse rounded-sm"></div>
          </div>
          <div className="mb-4">
            <div className="bg-clickable/10 mb-2 h-6.5 w-full max-w-44 animate-pulse rounded-sm"></div>
            <div className="space-y-1">
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-clickable/10 mb-2 h-6.5 w-full max-w-44 animate-pulse rounded-sm"></div>
            <div className="space-y-1">
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5 w-full max-w-30 animate-pulse rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 md:flex-6">
          <div>
            <div className="bg-clickable/10 mb-1 h-5 w-full max-w-16 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 mb-0.5 h-10.5 w-full max-w-40 animate-pulse rounded-sm"></div>
            <div className="bg-clickable/10 h-5 w-full max-w-14 animate-pulse rounded-sm"></div>
          </div>
          <StockInformationChartSkeleton />
        </div>
      </div>
    </Section>
  )
}

export function StockInformationChartSkeleton() {
  return <ChartSkeleton />
}
