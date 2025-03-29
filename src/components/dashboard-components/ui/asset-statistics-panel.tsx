import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'

type AssetStatisticsPanelProps = {
  label: string
  value: string
  percentageChange?: number
}

export default function AssetStatisticsPanel({
  label,
  value,
  percentageChange,
}: AssetStatisticsPanelProps) {
  return (
    <article>
      <p className="mb-1">{label}</p>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-normal break-all">{value}</h3>
        {percentageChange && (
          <PercentageChangeIndicator percentage={percentageChange} />
        )}
      </div>
    </article>
  )
}
