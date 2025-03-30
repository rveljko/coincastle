import CryptoCoinsTableSkeleton from '@components/dashboard-components/crypto-coins-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import Table from '@components/dashboard-components/ui/table'
import { cryptoMarketplaceTableHeaders } from '@data/table-headers'
import useGetCryptoCurrencies from '@hooks/queries/use-get-crypto-currencies'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'
import { CoinOverviewSortDirection, CoinOverviewSortField } from '@utils/types'
import { Link, useSearchParams } from 'react-router-dom'

type CryptoCoinsTableProps = {
  numberOfCoins: number
  className?: string
}

export default function CryptoCoinsTable({
  numberOfCoins,
  className,
}: CryptoCoinsTableProps) {
  const [searchParams] = useSearchParams()

  const sortField = (searchParams.get('sort-field') ||
    'market_cap') as CoinOverviewSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    'desc') as CoinOverviewSortDirection

  const { data, isPending, error } = useGetCryptoCurrencies(
    numberOfCoins,
    sortField,
    sortDirection
  )

  if (isPending)
    return <CryptoCoinsTableSkeleton numberOfCoins={numberOfCoins} />

  if (error) return <ErrorMessage />

  return (
    <Table className={className}>
      <Table.Header>
        <Table.HeaderRow>
          {cryptoMarketplaceTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data.map(
          (
            {
              id,
              name,
              symbol,
              image,
              circulating_supply,
              current_price,
              market_cap,
              price_change_percentage_24h,
              total_volume,
            },
            index
          ) => (
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
                    <div className="flex items-center gap-0.5">
                      {name}
                      <span className="text-neutral-400">
                        {symbol.toLocaleUpperCase()}
                      </span>
                    </div>
                  </div>
                </Link>
              </Table.BodyCell>
              <Table.BodyCell>
                {current_price ? currencyFormatter(current_price) : '-'}
              </Table.BodyCell>
              <Table.BodyCell>
                <PercentageChangeIndicator
                  percentage={price_change_percentage_24h}
                />
              </Table.BodyCell>
              <Table.BodyCell>
                {market_cap ? compactCurrencyFormatter(market_cap) : '-'}
              </Table.BodyCell>
              <Table.BodyCell>
                {total_volume ? compactCurrencyFormatter(total_volume) : '-'}
              </Table.BodyCell>
              <Table.BodyCell>
                {circulating_supply
                  ? compactCurrencyFormatter(circulating_supply)
                  : '-'}
              </Table.BodyCell>
            </Table.BodyRow>
          )
        )}
      </Table.Body>
    </Table>
  )
}
