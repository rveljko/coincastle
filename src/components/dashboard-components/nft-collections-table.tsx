import ErrorMessage from '@components/dashboard-components/ui/error-message'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import Table from '@components/dashboard-components/ui/table'
import { nftCollectionsTableHeaders } from '@data/table-headers'
import useGetNftCollections from '@hooks/queries/use-get-nft-collections'
import {
  compactCurrencyFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'

export default function NftCollectionsTable() {
  const { data, isPending, error } = useGetNftCollections()

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          {nftCollectionsTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data.map(
          ({
            rank,
            collection_image,
            collection_title,
            floor_price,
            floor_price_24hr_percent_change,
            market_cap_usd,
            volume_usd,
          }) => (
            <Table.BodyRow key={collection_title}>
              <Table.BodyCell>{rank}</Table.BodyCell>
              <Table.BodyCell>
                <div className="flex w-max flex-row gap-1">
                  <img
                    className="size-5.5 rounded-full"
                    src={collection_image}
                    title={collection_title}
                    alt={collection_title}
                  />
                  {collection_title}
                </div>
              </Table.BodyCell>
              <Table.BodyCell>
                {ethereumPriceFormatter(parseFloat(floor_price))}
              </Table.BodyCell>
              <Table.BodyCell>
                <PercentageChangeIndicator
                  percentage={parseFloat(floor_price_24hr_percent_change)}
                />
              </Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(parseInt(market_cap_usd))}
              </Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(parseInt(volume_usd))}
              </Table.BodyCell>
            </Table.BodyRow>
          )
        )}
      </Table.Body>
    </Table>
  )
}
