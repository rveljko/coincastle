import AssetStatisticsPanelError from '@components/dashboard-components/asset-statistics-panel-error'
import Section from '@sections/dashboard-sections/section'

export default function AssetStatisticsSectionError() {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AssetStatisticsPanelError />
        <AssetStatisticsPanelError />
        <AssetStatisticsPanelError />
      </div>
    </Section>
  )
}
