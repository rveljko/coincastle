import ChartSkeleton from '@components/dashboard-components/chart-skeleton'
import SwitcherSkeleton from '@components/dashboard-components/switcher-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function HeroSectionSkeleton() {
  return (
    <Section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <HeroAssetInformationSkeleton />
        <div className="flex flex-wrap gap-2">
          <div className="bg-clickable/10 nimate-pulse h-8 w-20 rounded-sm"></div>
          <div className="bg-clickable/10 nimate-pulse h-8 w-20 rounded-sm"></div>
          <SwitcherSkeleton className="w-36 max-w-[unset]" />
        </div>
      </div>
      <HeroChartSkeleton />
    </Section>
  )
}

export function HeroAssetInformationSkeleton() {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <div className="bg-clickable/10 nimate-pulse size-8 rounded-full"></div>
        <div className="bg-clickable/10 nimate-pulse h-8 w-30 rounded-sm"></div>
      </div>
      <div className="bg-clickable/10 nimate-pulse h-10.5 w-50 rounded-sm"></div>
    </div>
  )
}

export function HeroChartSkeleton() {
  return <ChartSkeleton />
}
