import ErrorMessage from '@components/dashboard-components/ui/error-message'
import FirstLetterImageGenerator from '@components/dashboard-components/ui/first-letter-image-generator'
import InformationList from '@components/dashboard-components/ui/information-list'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import useGetStockInformation from '@hooks/queries/use-get-stock-information'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'

type StockInformationSectionProps = {
  stockSymbol: string
}

export default function StockInformationSection({
  stockSymbol,
}: StockInformationSectionProps) {
  const { data, isPending, error } = useGetStockInformation(stockSymbol)

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

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
    <Section>
      <title>{`${TITLE_PREFIX}${name} ${symbol}`}</title>
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
          <InformationList.Label>Current Price</InformationList.Label>
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
          <InformationList.Label>Average Price (50-Day)</InformationList.Label>
          <InformationList.Value>
            {currencyFormatter(priceAvg50)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Average Price (200-Day)</InformationList.Label>
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
          <InformationList.Label>Previous Close Price</InformationList.Label>
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
    </Section>
  )
}
