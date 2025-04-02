import CoinInformationSectionSkeleton, {
  CoinInformationChartSkeleton,
} from '@components/dashboard-components/coin-information-section-skeleton'
import CryptoCoinChart from '@components/dashboard-components/crypto-coin-chart'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import Switcher from '@components/dashboard-components/ui/switcher'
import useGetCoinChartInformation from '@hooks/queries/use-get-coin-chart-information'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import useChartTimeFiltering from '@hooks/use-chart-time-filtering'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'

type CoinInformationSection = {
  coinId: string
}

export default function CoinInformationSection({
  coinId,
}: CoinInformationSection) {
  const { period, setPeriod } = useChartTimeFiltering()

  const { data, isPending, error } = useGetCoinInformation(coinId)

  if (isPending) return <CoinInformationSectionSkeleton />

  if (error)
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  const { image, name, description, market_cap_rank, symbol, market_data } =
    data

  return (
    <Section>
      <title>{`${TITLE_PREFIX}${name}`}</title>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-4">
          <header>
            <div className="mb-2 flex items-center gap-2">
              <img className="size-8 rounded-full" src={image.small} alt="" />
              <div className="flex items-center gap-1">
                <h3 className="text-heading-4-font-size leading-heading-4-line-height">
                  {name}
                </h3>
                <span className="text-neutral-400 uppercase">{symbol}</span>
              </div>
            </div>
            <p className="mb-4 line-clamp-2 text-ellipsis">{description.en}</p>
          </header>
          <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
            Market Statistics
          </h3>
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
          <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
            Market Performance
          </h3>
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
        <div className="flex flex-col justify-between gap-4 md:flex-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <header>
              <p className="mb-1">Price</p>
              <h1 className="mb-0.5">
                {currencyFormatter(market_data.current_price.usd)}
              </h1>
              <PercentageChangeIndicator
                percentage={market_data.price_change_percentage_24h}
              />
            </header>
            <Switcher>
              <Switcher.Item
                id="1d"
                name="time-filter"
                onClick={() => setPeriod('1')}
                isActive={period === '1'}
              >
                1D
              </Switcher.Item>
              <Switcher.Item
                id="1w"
                name="time-filter"
                onClick={() => setPeriod('7')}
                isActive={period === '7'}
              >
                1W
              </Switcher.Item>
              <Switcher.Item
                id="1m"
                name="time-filter"
                onClick={() => setPeriod('30')}
                isActive={period === '30'}
              >
                1M
              </Switcher.Item>
              <Switcher.Item
                id="3m"
                name="time-filter"
                onClick={() => setPeriod('90')}
                isActive={period === '90'}
              >
                3M
              </Switcher.Item>
              <Switcher.Item
                id="6m"
                name="time-filter"
                onClick={() => setPeriod('180')}
                isActive={period === '180'}
              >
                6M
              </Switcher.Item>
              <Switcher.Item
                id="1Y"
                name="time-filter"
                onClick={() => setPeriod('365')}
                isActive={period === '365'}
              >
                1Y
              </Switcher.Item>
            </Switcher>
          </div>
          <CoinInformationChart coinId={coinId} />
        </div>
      </div>
    </Section>
  )
}

type CoinInformationChartProps = {
  coinId: string
}

function CoinInformationChart({ coinId }: CoinInformationChartProps) {
  const { period } = useChartTimeFiltering()
  const { data, isPending, error } = useGetCoinChartInformation(coinId, period)

  if (isPending) return <CoinInformationChartSkeleton />

  if (error) return <ErrorMessage />

  return <CryptoCoinChart data={data.prices} />
}
