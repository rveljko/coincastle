import { cryptoMarketplaceTableHeaders } from '@data/table-headers'
import useGetCryptoCurrencies from '@hooks/queries/useGetCryptoCurrencies'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'
import PercentageChangeIndicator from './ui/percentage-change-indicator'
import Table from './ui/table'

export default function CryptoMarketplaceTable() {
  const { data, isPending, error } = useGetCryptoCurrencies()

  if (isPending) return <div>loading</div>

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
            <Table.BodyRow key={id}>
              <Table.BodyCell>{market_cap_rank}</Table.BodyCell>
              <Table.BodyCell>
                <div className="flex w-max flex-row gap-1">
                  <img
                    className="size-5.5 rounded-full"
                    src={image}
                    title={name}
                    alt={name}
                  />
                  {name}
                </div>
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
