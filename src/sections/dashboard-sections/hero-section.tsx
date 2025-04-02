import CryptoCoinChart from '@components/dashboard-components/crypto-coin-chart'
import {
  HeroAssetInformationSkeleton,
  HeroChartSkeleton,
} from '@components/dashboard-components/hero-section-skeleton'
import Dropdown from '@components/dashboard-components/ui/dropdown'
import DropdownButton from '@components/dashboard-components/ui/dropdown-button'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Switcher from '@components/dashboard-components/ui/switcher'
import Button from '@components/ui/button'
import useGetCoinChartInformation from '@hooks/queries/use-get-coin-chart-information'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import useGetCryptoCurrencies from '@hooks/queries/use-get-crypto-currencies'
import useSelectedCoin from '@hooks/use-selected-coin'
import CoinIcon from '@icons/coin-icon'
import ListIcon from '@icons/list-icon'
import Section from '@sections/dashboard-sections/section'
import { currencyFormatter } from '@utils/helpers/currency-formatter'
import { CoinChartInformationPeriod } from '@utils/types'
import { useSearchParams } from 'react-router-dom'

type HeroSectionProps = {
  className?: string
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <Section className={className}>
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <HeroAssetInformation />
        <HeroButtons />
      </header>
      <HeroChart />
    </Section>
  )
}

function HeroAssetInformation() {
  const { coinId } = useSelectedCoin()
  const { data, isPending, error } = useGetCoinInformation(coinId)

  if (isPending) return <HeroAssetInformationSkeleton />

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

function HeroButtons() {
  const [searchParams, setSearchParams] = useSearchParams()
  const period = (searchParams.get('period') ||
    '1') as CoinChartInformationPeriod
  const { coinId, setCoin } = useSelectedCoin()

  function setCoinPricePeriod(days: CoinChartInformationPeriod) {
    setSearchParams((prevParams) => {
      prevParams.set('period', days)
      return prevParams
    })
  }

  const { data, isPending, error } = useGetCryptoCurrencies(
    5,
    'market_cap',
    'desc'
  )

  if (isPending) return <div>loading</div>

  if (error) return <ErrorMessage />

  return (
    <div className="flex flex-wrap gap-2">
      <DropdownButton
        label="Coin"
        variant="secondary"
        size="medium"
        leftIcon={<CoinIcon />}
      >
        {data.map(({ id, image, name }) => (
          <Dropdown.Button
            key={id}
            onClick={() => setCoin(id)}
            isActive={coinId === id}
          >
            <div className="size-4">
              <img
                className="rounded-full"
                src={image}
                alt={name}
                title={name}
              />
            </div>
            {name}
          </Dropdown.Button>
        ))}
      </DropdownButton>
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
  )
}

function HeroChart() {
  const [searchParams] = useSearchParams()
  const { coinId } = useSelectedCoin()
  const period = (searchParams.get('period') ||
    '1') as CoinChartInformationPeriod

  const { data, isPending, error } = useGetCoinChartInformation(coinId, period)

  if (isPending) return <HeroChartSkeleton />

  if (error) return <ErrorMessage />

  return (
    <div className="aspect-[2.5/1]">
      <CryptoCoinChart data={data.prices} />
    </div>
  )
}
