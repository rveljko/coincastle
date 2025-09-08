import NftCollectionsTableSkeleton from '@components/dashboard-components/nft-collections-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Table from '@components/dashboard-components/ui/table'
import { nftCollectionsTableHeaders } from '@data/table-headers'
import useGetNftCollections from '@hooks/queries/use-get-nft-collections'
import {
  compactCurrencyFormatter,
  ethereumCompactFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'
import { Link } from 'react-router-dom'

export default function NftCollectionsTable() {
  const { data, isPending, error } = useGetNftCollections()

  if (isPending)
    return <NftCollectionsTableSkeleton numberOfNftCollections={100} />

  if (error) return <ErrorMessage className="h-auto" />

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
            collection_address,
            collection_image,
            collection_title,
            floor_price,
            average_price,
            volume_usd,
          }) => (
            <Table.BodyRow
              key={`${collection_title}${collection_address}`}
              className="relative"
            >
              <Table.BodyCell>{rank}</Table.BodyCell>
              <Table.BodyCell>
                <Link to={`/dashboard/collection/${collection_address}`}>
                  <span className="absolute inset-0"></span>
                  <div className="flex w-max items-center gap-1">
                    <img
                      className="size-5.5 rounded-full"
                      src={collection_image}
                      title={collection_title}
                      alt={collection_title}
                      loading="lazy"
                    />
                    {collection_title}
                  </div>
                </Link>
              </Table.BodyCell>
              <Table.BodyCell>
                {ethereumPriceFormatter(floor_price)}
              </Table.BodyCell>
              <Table.BodyCell>
                {compactCurrencyFormatter(parseFloat(volume_usd))}
              </Table.BodyCell>
              <Table.BodyCell>
                {ethereumCompactFormatter(average_price)}
              </Table.BodyCell>
            </Table.BodyRow>
          )
        )}
      </Table.Body>
    </Table>
  )
}
