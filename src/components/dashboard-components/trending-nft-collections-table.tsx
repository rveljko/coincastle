import TrendingNftCollectionsTableSkeleton from '@components/dashboard-components/trending-nft-collections-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Table from '@components/dashboard-components/ui/table'
import { trendingNftCollectionsTableHeaders } from '@data/table-headers'
import useGetNftCollections from '@hooks/queries/use-get-nft-collections'
import { ethereumPriceFormatter } from '@utils/helpers/currency-formatter'
import { Link } from 'react-router-dom'

export default function TrendingNftCollectionsTable() {
  const { data, isPending, error } = useGetNftCollections()

  if (isPending)
    return <TrendingNftCollectionsTableSkeleton numberOfNftCollections={5} />

  if (error) return <ErrorMessage />

  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          {trendingNftCollectionsTableHeaders.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {data
          .slice(0, 5)
          .map(
            ({
              collection_address,
              collection_image,
              collection_title,
              floor_price,
            }) => (
              <Table.BodyRow key={collection_address} className="relative">
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
              </Table.BodyRow>
            )
          )}
      </Table.Body>
    </Table>
  )
}
