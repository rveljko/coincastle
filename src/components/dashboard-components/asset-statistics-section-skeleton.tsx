import AssetStatisticsPanelSkeleton from '@components/dashboard-components/asset-statistics-panel-skeleton'
import Section from '@sections/dashboard-sections/section'

export default function AssetStatisticsSectionSkeleton() {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AssetStatisticsPanelSkeleton />
        <AssetStatisticsPanelSkeleton />
        <AssetStatisticsPanelSkeleton />
      </div>
    </Section>
  )
}
