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

export default function StocksTable() {
  const { data, isPending, error } = useGetStocks()

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          {stockMarketplaceTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data.map(
          ({
            exchangeShortName,
            symbol,
            companyName,
            price,
            marketCap,
            volume,
            lastAnnualDividend,
          }) => (
            <Table.BodyRow key={`${exchangeShortName}${symbol}`}>
              <Table.BodyCell>
                <div className="flex w-max items-center gap-1">
                  <FirstLetterImageGenerator word={companyName} />
                  <div className="flex items-center gap-0.5">
                    {companyName}
                    <span className="text-neutral-400">{symbol}</span>
                  </div>
                </div>
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
