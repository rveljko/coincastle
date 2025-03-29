import AssetStatisticsSectionSkeleton from '@components/dashboard-components/asset-statistics-section-skeleton'
import AssetStatisticsPanel from '@components/dashboard-components/ui/asset-statistics-panel'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import Section from '@sections/dashboard-sections/section'
import { currencyFormatter } from '@utils/helpers/currency-formatter'

type AssetStatisticsSectionProps = {
  className?: string
}

export default function AssetStatisticsSection({
  className,
}: AssetStatisticsSectionProps) {
  const { data, isPending, error } = useGetCoinInformation('bitcoin')

  if (isPending) return <AssetStatisticsSectionSkeleton />

  if (error) return <ErrorMessage />

  const {
    market_data: {
      current_price,
      price_change_percentage_24h,
      market_cap,
      total_volume,
    },
  } = data

  return (
    <Section className={className}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AssetStatisticsPanel
          label="Price"
          value={currencyFormatter(current_price.usd)}
          percentageChange={price_change_percentage_24h}
        />
        <AssetStatisticsPanel
          label="Marketcap"
          value={currencyFormatter(market_cap.usd)}
        />
        <AssetStatisticsPanel
          label="Volume"
          value={currencyFormatter(total_volume.usd)}
        />
      </div>
    </Section>
  )
}
