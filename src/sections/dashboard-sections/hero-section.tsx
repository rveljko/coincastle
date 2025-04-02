import CryptoCoinChart from '@components/dashboard-components/crypto-coin-chart'
import {
  HeroAssetInformationSkeleton,
  HeroChartSkeleton,
} from '@components/dashboard-components/hero-section-skeleton'
import StockChart from '@components/dashboard-components/stocks-chart'
import Dropdown from '@components/dashboard-components/ui/dropdown'
import DropdownButton from '@components/dashboard-components/ui/dropdown-button'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import FirstLetterImageGenerator from '@components/dashboard-components/ui/first-letter-image-generator'
import Switcher from '@components/dashboard-components/ui/switcher'
import useGetCoinChartInformation from '@hooks/queries/use-get-coin-chart-information'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import useGetCryptoCurrencies from '@hooks/queries/use-get-crypto-currencies'
import useGetStockChartInformation from '@hooks/queries/use-get-stock-chart-information'
import useGetStockInformation from '@hooks/queries/use-get-stock-information'
import useGetStocks from '@hooks/queries/use-get-stocks'
import useChartTimeFiltering from '@hooks/use-chart-time-filtering'
import useSelectedCategory from '@hooks/use-selected-category'
import useSelectedCoin from '@hooks/use-selected-coin'
import useSelectedStock from '@hooks/use-selected-stock'
import ChartLineIcon from '@icons/chart-line-icon'
import CoinIcon from '@icons/coin-icon'
import ListIcon from '@icons/list-icon'
import Section from '@sections/dashboard-sections/section'
import { currencyFormatter } from '@utils/helpers/currency-formatter'

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

  if (coinIsPending || stockIsPending) return <HeroAssetInformationSkeleton />

  if (coinError || stockError) return <ErrorMessage />

  const {
    image: coinImage,
    name: coinName,
    symbol: coinSymbol,
    market_data: { current_price: coinCurrentPrice },
  } = coinData

  const {
    name: stockName,
    symbol: stockSymbol,
    price: stockPrice,
  } = stockData[0]

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        {category === 'crypto-currencies' ? (
          <img
            className="size-8 rounded-full"
            src={coinImage.small}
            alt={coinName}
            title={coinName}
          />
        ) : (
          <FirstLetterImageGenerator word={stockName} />
        )}

        <div className="flex items-center gap-1">
          <h3 className="text-heading-4-font-size leading-heading-4-line-height">
            {category === 'crypto-currencies' ? coinName : stockName}
          </h3>
          <span className="text-neutral-400 uppercase">
            {category === 'crypto-currencies' ? coinSymbol : stockSymbol}
          </span>
        </div>
      </div>
      <h1>
        {currencyFormatter(
          category === 'crypto-currencies' ? coinCurrentPrice.usd : stockPrice
        )}
      </h1>
    </div>
  )
}

function HeroButtons() {
  const { coinId, setCoin } = useSelectedCoin()
  const { stockSymbol, setStock } = useSelectedStock()
  const { category, setCategory } = useSelectedCategory()
  const { coinPricePeriod, setCoinPricePeriod } = useChartTimeFiltering()

  const {
    data: cryptoCurrencies,
    isPending: cryptoCurrenciesIsPending,
    error: cryptoCurrenciesError,
  } = useGetCryptoCurrencies(5, 'market_cap', 'desc')

  const {
    data: stocks,
    isPending: stocksIsPending,
    error: stocksError,
  } = useGetStocks('', '', 1_000_000_000, '', 1_000_000, '', 5)

  if (cryptoCurrenciesIsPending || stocksIsPending) return <div>loading</div>

  if (cryptoCurrenciesError || stocksError) return <ErrorMessage />

  return (
    <div className="flex flex-wrap gap-2">
      <DropdownButton
        label={category === 'crypto-currencies' ? 'Coin' : 'Stock'}
        variant="secondary"
        size="medium"
        leftIcon={
          category === 'crypto-currencies' ? <CoinIcon /> : <ChartLineIcon />
        }
      >
        {category === 'crypto-currencies' ? (
          <>
            {cryptoCurrencies.map(({ id, image, name }) => (
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
          </>
        ) : (
          <>
            {stocks.map(({ companyName, symbol }) => (
              <Dropdown.Button
                key={symbol}
                onClick={() => setStock(symbol)}
                isActive={stockSymbol === symbol}
              >
                <FirstLetterImageGenerator word={companyName} isSmall />
                {companyName}
              </Dropdown.Button>
            ))}
          </>
        )}
      </DropdownButton>
      <DropdownButton
        label="Category"
        variant="secondary"
        size="medium"
        leftIcon={<ListIcon />}
      >
        <Dropdown.Button
          onClick={() => setCategory('crypto-currencies')}
          isActive={category === 'crypto-currencies'}
        >
          <CoinIcon />
          Crypto Currencies
        </Dropdown.Button>
        <Dropdown.Button
          onClick={() => setCategory('stocks')}
          isActive={category === 'stocks'}
        >
          <ChartLineIcon />
          Stocks
        </Dropdown.Button>
      </DropdownButton>
      <Switcher>
        <Switcher.Item
          id="1d"
          name="time-filter"
          onClick={() => setCoinPricePeriod('1')}
          isActive={coinPricePeriod === '1'}
        >
          1D
        </Switcher.Item>
        <Switcher.Item
          id="1w"
          name="time-filter"
          onClick={() => setCoinPricePeriod('7')}
          isActive={coinPricePeriod === '7'}
        >
          1W
        </Switcher.Item>
        <Switcher.Item
          id="1m"
          name="time-filter"
          onClick={() => setCoinPricePeriod('30')}
          isActive={coinPricePeriod === '30'}
        >
          1M
        </Switcher.Item>
        <Switcher.Item
          id="3m"
          name="time-filter"
          onClick={() => setCoinPricePeriod('90')}
          isActive={coinPricePeriod === '90'}
        >
          3M
        </Switcher.Item>
        <Switcher.Item
          id="6m"
          name="time-filter"
          onClick={() => setCoinPricePeriod('180')}
          isActive={coinPricePeriod === '180'}
        >
          6M
        </Switcher.Item>
        <Switcher.Item
          id="1Y"
          name="time-filter"
          onClick={() => setCoinPricePeriod('365')}
          isActive={coinPricePeriod === '365'}
        >
          1Y
        </Switcher.Item>
      </Switcher>
    </div>
  )
}

function HeroChart() {
  const { coinId } = useSelectedCoin()
  const { stockSymbol } = useSelectedStock()
  const { category } = useSelectedCategory()
  const { coinPricePeriod, stockPricePeriod } = useChartTimeFiltering()

  const {
    data: coinChartData,
    isPending: coinChartIsPending,
    error: coinChartError,
  } = useGetCoinChartInformation(coinId, coinPricePeriod)
  const {
    data: stockChartData,
    isPending: stockChartIsPending,
    error: stockChartError,
  } = useGetStockChartInformation(stockSymbol, stockPricePeriod)

  if (coinChartIsPending || stockChartIsPending) return <HeroChartSkeleton />

  if (
    coinChartError ||
    stockChartError ||
    (category === 'stocks' && stockChartData.length <= 1)
  )
    return <ErrorMessage />

  return (
    <div className="aspect-[2.5/1]">
      {category === 'crypto-currencies' ? (
        <CryptoCoinChart data={coinChartData.prices} />
      ) : (
        <StockChart data={stockChartData} />
      )}
    </div>
  )
}
