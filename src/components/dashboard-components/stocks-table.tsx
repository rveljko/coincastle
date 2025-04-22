import StocksTableSkeleton from '@components/dashboard-components/stocks-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import FirstLetterImageGenerator from '@components/dashboard-components/ui/first-letter-image-generator'
import Table from '@components/dashboard-components/ui/table'
import { stockMarketplaceTableHeaders } from '@data/table-headers'
import useGetStocks from '@hooks/queries/use-get-stocks'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'
import { dividendYieldCalculator } from '@utils/helpers/dividend-yield-calculator'
import { percentageFormatter } from '@utils/helpers/percentage-formatters'
import { Link, useSearchParams } from 'react-router-dom'

type StocksTableProps = {
  numberOfStocks: number
  className?: string
}

export default function StocksTable({
  numberOfStocks,
  className,
}: StocksTableProps) {
  const [searchParams] = useSearchParams()

  const priceFrom = parseFloat(searchParams.get('price-from')!) || ''
  const priceTo = parseFloat(searchParams.get('price-to')!) || ''
  const marketCapFrom =
    parseFloat(searchParams.get('marketcap-from')!) || 1_000_000_000
  const marketCapTo = parseFloat(searchParams.get('marketcap-to')!) || ''
  const volumeFrom = parseFloat(searchParams.get('volume-from')!) || 1_000_000
  const volumeTo = parseFloat(searchParams.get('volume-to')!) || ''

  const { data, isPending, error } = useGetStocks(
    priceFrom,
    priceTo,
    marketCapFrom,
    marketCapTo,
    volumeFrom,
    volumeTo,
    numberOfStocks
  )

  if (isPending) return <StocksTableSkeleton numberOfStocks={numberOfStocks} />

  if (error) return <ErrorMessage className="h-auto" />

  return (
    <Table className={className}>
      <Table.Header>
        <Table.HeaderRow>
          {stockMarketplaceTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data.map(
          (
            {
              exchangeShortName,
              symbol,
              companyName,
              price,
              marketCap,
              volume,
              lastAnnualDividend,
            },
            index
          ) => (
            <Table.BodyRow
              key={`${exchangeShortName}${symbol}`}
              className="relative"
            >
              <Table.BodyCell>{index + 1}</Table.BodyCell>
              <Table.BodyCell>
                <Link to={`/dashboard/stock/${symbol}`}>
                  <span className="absolute inset-0"></span>
                  <div className="flex w-max items-center gap-1">
                    <FirstLetterImageGenerator word={companyName} isSmall />
                    <div className="flex items-center gap-0.5">
                      {companyName}
                      <span className="text-neutral-400">{symbol}</span>
                    </div>
                  </div>
                </Link>
              </Table.BodyCell>
              <Table.BodyCell>{currencyFormatter(price)}</Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(marketCap)}
              </Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(volume)}
              </Table.BodyCell>
              <Table.BodyCell>
                {percentageFormatter(
                  dividendYieldCalculator(lastAnnualDividend, price)
                )}
              </Table.BodyCell>
              <Table.BodyCell>{exchangeShortName}</Table.BodyCell>
            </Table.BodyRow>
          )
        )}
      </Table.Body>
    </Table>
  )
}
