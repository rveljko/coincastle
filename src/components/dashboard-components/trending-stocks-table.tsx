import TrendingStocksTableSkeleton from '@components/dashboard-components/trending-stocks-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import FirstLetterImageGenerator from '@components/dashboard-components/ui/first-letter-image-generator'
import Table from '@components/dashboard-components/ui/table'
import { trendingStocksTableHeaders } from '@data/table-headers'
import useGetStocks from '@hooks/queries/use-get-stocks'
import { currencyFormatter } from '@utils/helpers/currency-formatter'
import { Link } from 'react-router-dom'

export default function TrendingStocksTable() {
  const { data, isPending, error } = useGetStocks(
    '',
    '',
    1_000_000_000,
    '',
    1_000_000,
    '',
    5
  )

  if (isPending) return <TrendingStocksTableSkeleton numberOfStocks={5} />

  if (error) return <ErrorMessage />

  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          {trendingStocksTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data.map(({ exchangeShortName, symbol, companyName, price }) => (
          <Table.BodyRow
            key={`${exchangeShortName}${symbol}`}
            className="relative"
          >
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
          </Table.BodyRow>
        ))}
      </Table.Body>
    </Table>
  )
}
