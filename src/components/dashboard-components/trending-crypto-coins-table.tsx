import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Table from '@components/dashboard-components/ui/table'
import { trendingCryptoCoinsTableHeaders } from '@data/table-headers'
import useGetCryptoCurrencies from '@hooks/queries/use-get-crypto-currencies'
import { currencyFormatter } from '@utils/helpers/currency-formatter'
import { Link } from 'react-router-dom'

export default function TrendingCryptoCoinsTable() {
  const { data, isPending, error } = useGetCryptoCurrencies(
    5,
    'market_cap',
    'desc'
  )

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          {trendingCryptoCoinsTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data.map(({ id, name, image, current_price }, index) => (
          <Table.BodyRow key={id} className="relative">
            <Table.BodyCell>{index + 1}</Table.BodyCell>
            <Table.BodyCell>
              <Link to={`/dashboard/coin/${id}`}>
                <span className="absolute inset-0"></span>
                <div className="flex w-max flex-row gap-1">
                  <img
                    className="size-5.5 rounded-full"
                    src={image}
                    title={name}
                    alt={name}
                    loading="lazy"
                  />
                  {name}
                </div>
              </Link>
            </Table.BodyCell>
            <Table.BodyCell>
              {current_price ? currencyFormatter(current_price) : '-'}
            </Table.BodyCell>
          </Table.BodyRow>
        ))}
      </Table.Body>
    </Table>
  )
}
