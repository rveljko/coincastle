import CryptoCoinChart from '@components/dashboard-components/crypto-coin-chart'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Switcher from '@components/dashboard-components/ui/switcher'
import Button from '@components/ui/button'
import useGetCoinChartInformation from '@hooks/queries/use-get-coin-chart-information'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import CoinIcon from '@icons/coin-icon'
import ListIcon from '@icons/list-icon'
import Section from '@sections/dashboard-sections/section'
import { currencyFormatter } from '@utils/helpers/currency-formatter'
import { CoinChartInformationPeriod } from '@utils/types'
import { useSearchParams } from 'react-router-dom'

export default function HeroSection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const period = (searchParams.get('period') ||
    '1') as CoinChartInformationPeriod

  function setCoinPricePeriod(days: CoinChartInformationPeriod) {
    setSearchParams((prevParams) => {
      prevParams.set('period', days)
      return prevParams
    })
  }

  return (
    <Section>
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <HeroAssetInformation coinId="bitcoin" />
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" size="medium" leftIcon={<CoinIcon />}>
            Coin
          </Button>
          <Button variant="secondary" size="medium" leftIcon={<ListIcon />}>
            Category
          </Button>
          <Switcher>
            <Switcher.Item
              id="1d"
              name="time-filter"
              onClick={() => setCoinPricePeriod('1')}
              isActive={period === '1'}
            >
              1D
            </Switcher.Item>
            <Switcher.Item
              id="1w"
              name="time-filter"
              onClick={() => setCoinPricePeriod('7')}
              isActive={period === '7'}
            >
              1W
            </Switcher.Item>
            <Switcher.Item
              id="1m"
              name="time-filter"
              onClick={() => setCoinPricePeriod('30')}
              isActive={period === '30'}
            >
              1M
            </Switcher.Item>
            <Switcher.Item
              id="3m"
              name="time-filter"
              onClick={() => setCoinPricePeriod('90')}
              isActive={period === '90'}
            >
              3M
            </Switcher.Item>
            <Switcher.Item
              id="6m"
              name="time-filter"
              onClick={() => setCoinPricePeriod('180')}
              isActive={period === '180'}
            >
              6M
            </Switcher.Item>
            <Switcher.Item
              id="1Y"
              name="time-filter"
              onClick={() => setCoinPricePeriod('365')}
              isActive={period === '365'}
            >
              1Y
            </Switcher.Item>
          </Switcher>
        </div>
      </header>
      <HeroChart coinId="bitcoin" period={period} />
    </Section>
  )
}

type HeroAssetInformationProps = {
  coinId: string
}

function HeroAssetInformation({ coinId }: HeroAssetInformationProps) {
  const { data, isPending, error } = useGetCoinInformation(coinId)

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

  const {
    image,
    name,
    symbol,
    market_data: { current_price },
  } = data

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <img
          className="size-8 rounded-full"
          src={image.small}
          alt={name}
          title={name}
        />
        <div className="flex items-center gap-1">
          <h3 className="text-heading-4-font-size leading-heading-4-line-height">
            {name}
          </h3>
          <span className="text-neutral-400 uppercase">{symbol}</span>
        </div>
      </div>
      <h1>{currencyFormatter(current_price.usd)}</h1>
    </div>
  )
}

type HeroChartProps = {
  coinId: string
  period: CoinChartInformationPeriod
}

function HeroChart({ coinId, period }: HeroChartProps) {
  const { data, isPending, error } = useGetCoinChartInformation(coinId, period)

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

  return <CryptoCoinChart data={data.prices} withPrices />
}
