import ChartSkeleton from '@components/dashboard-components/chart-skeleton'
import SwitcherSkeleton from '@components/dashboard-components/switcher-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function HeroSectionSkeleton() {
  return (
    <Section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <HeroAssetInformationSkeleton />
        <HeroButtonsSkeleton />
      </div>
      <HeroChartSkeleton />
    </Section>
  )
}

export function HeroAssetInformationSkeleton() {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <div className="bg-clickable/10 size-8 animate-pulse rounded-full"></div>
        <div className="bg-clickable/10 h-8 w-30 animate-pulse rounded-sm"></div>
      </div>
      <div className="bg-clickable/10 h-10.5 w-50 animate-pulse rounded-sm"></div>
    </div>
  )
}

export function HeroButtonsSkeleton() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="bg-clickable/10 h-8 w-20 animate-pulse rounded-sm"></div>
      <div className="bg-clickable/10 h-8 w-20 animate-pulse rounded-sm"></div>
      <SwitcherSkeleton className="w-36 max-w-[unset]" />
    </div>
  )
}

export function HeroChartSkeleton() {
  return <ChartSkeleton />
}
