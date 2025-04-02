import AssetStatisticsSectionSkeleton from '@components/dashboard-components/asset-statistics-section-skeleton'
import AssetStatisticsPanel from '@components/dashboard-components/ui/asset-statistics-panel'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import useGetStockInformation from '@hooks/queries/use-get-stock-information'
import useSelectedCategory from '@hooks/use-selected-category'
import useSelectedCoin from '@hooks/use-selected-coin'
import useSelectedStock from '@hooks/use-selected-stock'
import Section from '@sections/dashboard-sections/section'
import { currencyFormatter } from '@utils/helpers/currency-formatter'

type AssetStatisticsSectionProps = {
  className?: string
}

export default function AssetStatisticsSection({
  className,
}: AssetStatisticsSectionProps) {
  const { coinId } = useSelectedCoin()
  const { stockSymbol: selectedStockSymbol } = useSelectedStock()
  const { category } = useSelectedCategory()
  const {
    data: coinData,
    isPending: coinIsPending,
    error: coinError,
  } = useGetCoinInformation(coinId)
  const {
    data: stockData,
    isPending: stockIsPending,
    error: stockError,
  } = useGetStockInformation(selectedStockSymbol)

  if (coinIsPending || stockIsPending) return <AssetStatisticsSectionSkeleton />

  if (coinError || stockError) return <ErrorMessage />

  const {
    market_data: {
      current_price: coinCurrentPrice,
      price_change_percentage_24h: coinPriceChangePercentage24h,
      market_cap: coinMarketCap,
      total_volume: coinTotalVolume,
    },
  } = coinData

  const {
    price: stockPrice,
    changePercentage: stockChangePercentage,
    marketCap: stockMarketCap,
    volume: stockVolume,
  } = stockData[0]

  return (
    <Section className={className}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <AssetStatisticsPanel
          label="Price"
          value={currencyFormatter(
            category === 'crypto-currencies' ? coinCurrentPrice.usd : stockPrice
          )}
          percentageChange={
            category === 'crypto-currencies'
              ? coinPriceChangePercentage24h
              : stockChangePercentage
          }
        />
        <AssetStatisticsPanel
          label="Marketcap"
          value={currencyFormatter(
            category === 'crypto-currencies'
              ? coinMarketCap.usd
              : stockMarketCap
          )}
        />
        <AssetStatisticsPanel
          label="Volume"
          value={currencyFormatter(
            category === 'crypto-currencies' ? coinTotalVolume.usd : stockVolume
          )}
        />
      </div>
    </Section>
  )
}
