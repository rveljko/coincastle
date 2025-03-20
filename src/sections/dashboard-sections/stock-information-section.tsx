import StockInformationSectionSkeleton, {
  StockInformationChartSkeleton,
} from '@components/dashboard-components/stock-information-section-skeleton'
import StockChart from '@components/dashboard-components/stocks-chart'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import FirstLetterImageGenerator from '@components/dashboard-components/ui/first-letter-image-generator'
import InformationList from '@components/dashboard-components/ui/information-list'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import Switcher from '@components/dashboard-components/ui/switcher'
import useGetStockChartInformation from '@hooks/queries/use-get-stock-chart-information'
import useGetStockInformation from '@hooks/queries/use-get-stock-information'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'
import { StockChartInformationPeriod } from '@utils/types'
import { useSearchParams } from 'react-router-dom'

type StockInformationSectionProps = {
  stockSymbol: string
  className?: string
}

export default function StockInformationSection({
  stockSymbol,
  className,
}: StockInformationSectionProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const period = (searchParams.get('period') ||
    '1') as StockChartInformationPeriod

  function setStockPricePeriod(days: StockChartInformationPeriod) {
    setSearchParams((prevParams) => {
      prevParams.set('period', days)
      return prevParams
    })
  }

  const { data, isPending, error } = useGetStockInformation(stockSymbol)

  if (isPending)
    return <StockInformationSectionSkeleton className={className} />

  if (error)
    return (
      <Section className={className}>
        <ErrorMessage />
      </Section>
    )

  const {
    name,
    symbol,
    price,
    marketCap,
    volume,
    yearLow,
    yearHigh,
    priceAvg50,
    priceAvg200,
    exchange,
    open,
    previousClose,
    dayLow,
    dayHigh,
    change,
    changePercentage,
  } = data[0]

  return (
    <Section className={className}>
      <title>{`${TITLE_PREFIX}${name} ${symbol}`}</title>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-4">
          <header className="mb-4">
            <div className="flex items-center gap-2">
              <FirstLetterImageGenerator word={name} />
              <div className="flex flex-wrap items-center gap-1">
                <h3 className="text-heading-4-font-size leading-heading-4-line-height">
                  {name}
                </h3>
                <span className="text-neutral-400 uppercase">{symbol}</span>
              </div>
            </div>
          </header>
          <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
            Market Statistics
          </h3>
          <InformationList className="mb-4">
            <InformationList.Item>
              <InformationList.Label>Price</InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(price)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Market Cap</InformationList.Label>
              <InformationList.Value>
                {compactCurrencyFormatter(marketCap)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Volume</InformationList.Label>
              <InformationList.Value>
                {compactCurrencyFormatter(volume)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>52-Week Low / High</InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(yearLow)} / {currencyFormatter(yearHigh)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>
                Average Price (50-Day)
              </InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(priceAvg50)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>
                Average Price (200-Day)
              </InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(priceAvg200)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Exchange</InformationList.Label>
              <InformationList.Value>{exchange}</InformationList.Value>
            </InformationList.Item>
          </InformationList>
          <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
            Market Performance
          </h3>
          <InformationList>
            <InformationList.Item>
              <InformationList.Label>Open Price</InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(open)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>
                Previous Close Price
              </InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(previousClose)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Low Price</InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(dayLow)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>High Price</InformationList.Label>
              <InformationList.Value>
                {currencyFormatter(dayHigh)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Price Change (1D)</InformationList.Label>
              <InformationList.Value className="flex items-center gap-1">
                {currencyFormatter(change)}
                <PercentageChangeIndicator percentage={changePercentage} />
              </InformationList.Value>
            </InformationList.Item>
          </InformationList>
        </div>
        <div className="flex flex-col justify-between gap-4 md:flex-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <header>
              <p className="mb-1">Price</p>
              <h1 className="mb-0.5">{currencyFormatter(price)}</h1>
              <PercentageChangeIndicator percentage={changePercentage} />
            </header>
            <Switcher>
              <Switcher.Item
                id="1d"
                name="time-filter"
                onClick={() => setStockPricePeriod('1')}
                isActive={period === '1'}
              >
                1D
              </Switcher.Item>
              <Switcher.Item
                id="1w"
                name="time-filter"
                onClick={() => setStockPricePeriod('7')}
                isActive={period === '7'}
              >
                1W
              </Switcher.Item>
              <Switcher.Item
                id="1m"
                name="time-filter"
                onClick={() => setStockPricePeriod('30')}
                isActive={period === '30'}
              >
                1M
              </Switcher.Item>
              <Switcher.Item
                id="3m"
                name="time-filter"
                onClick={() => setStockPricePeriod('90')}
                isActive={period === '90'}
              >
                3M
              </Switcher.Item>
              <Switcher.Item
                id="6m"
                name="time-filter"
                onClick={() => setStockPricePeriod('180')}
                isActive={period === '180'}
              >
                6M
              </Switcher.Item>
              <Switcher.Item
                id="1Y"
                name="time-filter"
                onClick={() => setStockPricePeriod('365')}
                isActive={period === '365'}
              >
                1Y
              </Switcher.Item>
            </Switcher>
          </div>
          <StockInformationChart stockSymbol={stockSymbol} period={period} />
        </div>
      </div>
    </Section>
  )
}

type StockInformationChartProps = {
  stockSymbol: string
  period: StockChartInformationPeriod
}

function StockInformationChart({
  stockSymbol,
  period,
}: StockInformationChartProps) {
  const { data, isPending, error } = useGetStockChartInformation(
    stockSymbol,
    period
  )

  if (isPending) return <StockInformationChartSkeleton />

  if (error) return <ErrorMessage />

  return <StockChart data={data} />
}
