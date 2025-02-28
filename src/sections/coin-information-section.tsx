import Chart from '@components/dashboard-components/ui/chart'
import InformationList from '@components/dashboard-components/ui/information-list'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import useGetCoinChartInformation from '@hooks/queries/use-get-coin-chart-information'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'
import { cn } from '@utils/utils'

type CoinInformationProps = {
  coinId: string
  className?: string
}

export default function CoinInformation({
  coinId,
  className,
}: CoinInformationProps) {
  const {
    data: coinData,
    isPending: coinIsPending,
    error: coinError,
  } = useGetCoinInformation(coinId)

  const {
    data: coinChartData,
    isPending: coinChartIsPending,
    error: coinChartError,
  } = useGetCoinChartInformation(coinId)

  if (coinIsPending || coinChartIsPending) return <div>loading</div>

  if (coinError) return <div>error: {coinError.message}</div>

  if (coinChartError) return <div>error: {coinChartError.message}</div>

  const { image, name, description, market_cap_rank, symbol, market_data } =
    coinData

  return (
    <Section className={cn('p-0', className)}>
      <title>{`${TITLE_PREFIX}${name}`}</title>
      <div className="divide-section-outline flex flex-col divide-y-1 divide-solid md:flex-row md:divide-x-1 md:divide-y-0">
        <div className="p-4 md:flex-4">
          <header>
            <div className="mb-2 flex items-center gap-2">
              <img className="size-8 rounded-full" src={image.small} alt="" />
              <div className="flex items-center gap-1">
                <h3 className="text-heading-4-font-size">{name}</h3>
                <span className="text-neutral-400 uppercase">{symbol}</span>
              </div>
            </div>
            <p className="mb-4 line-clamp-2 text-ellipsis">{description.en}</p>
          </header>
          <h3 className="text-heading-4-font-size mb-2">Market Statistics</h3>
          <InformationList className="mb-4">
            <InformationList.Item>
              <InformationList.Label>Popularity</InformationList.Label>
              <InformationList.Value>#{market_cap_rank}</InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Market Cap</InformationList.Label>
              <InformationList.Value>
                {compactCurrencyFormatter(market_data.market_cap.usd)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Volume</InformationList.Label>
              <InformationList.Value>
                {compactCurrencyFormatter(market_data.total_volume.usd)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Supply</InformationList.Label>
              <InformationList.Value>
                {compactCurrencyFormatter(market_data.total_supply)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>All Time High</InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(market_data.ath.usd)}
              </InformationList.Value>
            </InformationList.Item>
          </InformationList>
          <h3 className="text-heading-4-font-size mb-2">Market Performance</h3>
          <InformationList>
            <InformationList.Item>
              <InformationList.Label>Price Change 1D</InformationList.Label>
              <InformationList.Value>
                <PercentageChangeIndicator
                  percentage={market_data.price_change_percentage_24h}
                />
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Price Change 1W</InformationList.Label>
              <InformationList.Value>
                <PercentageChangeIndicator
                  percentage={market_data.price_change_percentage_7d}
                />
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Price Change 1M</InformationList.Label>
              <InformationList.Value>
                <PercentageChangeIndicator
                  percentage={market_data.price_change_percentage_30d}
                />
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Price Change 1Y</InformationList.Label>
              <InformationList.Value>
                <PercentageChangeIndicator
                  percentage={market_data.price_change_percentage_1y}
                />
              </InformationList.Value>
            </InformationList.Item>
          </InformationList>
        </div>
        <div className="flex flex-col justify-between gap-4 p-4 md:flex-6">
          <header>
            <p className="mb-1">Price</p>
            <h1 className="mb-0.5">
              {currencyFormatter(coinData.market_data.current_price.usd)}
            </h1>
            <PercentageChangeIndicator
              percentage={market_data.price_change_percentage_24h}
            />
          </header>
          <Chart data={coinChartData.prices} />
        </div>
      </div>
    </Section>
  )
}
