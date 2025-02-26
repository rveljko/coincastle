import CryptoCoinsTableSkeleton from '@components/dashboard-components/crypto-coins-table-skeleton'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import Table from '@components/dashboard-components/ui/table'
import { cryptoMarketplaceTableHeaders } from '@data/table-headers'
import useGetCryptoCurrencies from '@hooks/queries/use-get-crypto-currencies'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'
import { Link, useNavigate } from 'react-router-dom'

type CryptoCoinsTableProps = {
  numberOfCoins: number
}

export default function CryptoCoinsTable({
  numberOfCoins,
}: CryptoCoinsTableProps) {
  const { data, isPending, error } = useGetCryptoCurrencies(numberOfCoins)
  const navigate = useNavigate()

  if (isPending)
    return <CryptoCoinsTableSkeleton numberOfCoins={numberOfCoins} />

  if (error) return <div>error: {error.message}</div>

  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          {cryptoMarketplaceTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data.map(
          ({
            id,
            name,
            image,
            circulating_supply,
            current_price,
            market_cap,
            price_change_percentage_24h,
            market_cap_rank,
            total_volume,
          }) => (
            <Table.BodyRow
              key={id}
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey) {
                  window.open(`/dashboard/coin/${id}`, '_blank')
                } else {
                  navigate(`/dashboard/coin/${id}`)
                }
              }}
              className="cursor-pointer"
            >
              <Table.BodyCell>{market_cap_rank}</Table.BodyCell>
              <Table.BodyCell>
                <Link to={`/dashboard/coin/${id}`}>
                  <div className="flex w-max flex-row gap-1">
                    <img
                      className="size-5.5 rounded-full"
                      src={image}
                      title={name}
                      alt={name}
                    />
                    {name}
                  </div>
                </Link>
              </Table.BodyCell>
              <Table.BodyCell>
                {currencyFormatter(current_price)}
              </Table.BodyCell>
              <Table.BodyCell>
                <PercentageChangeIndicator
                  percentage={price_change_percentage_24h}
                />
              </Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(market_cap)}
              </Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(total_volume)}
              </Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(circulating_supply)}
              </Table.BodyCell>
            </Table.BodyRow>
          )
        )}
      </Table.Body>
    </Table>
  )
}
