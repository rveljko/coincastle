import NftCollectionsTableSkeleton from '@components/dashboard-components/nft-collections-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Table from '@components/dashboard-components/ui/table'
import VerifiedBadge from '@components/dashboard-components/ui/verified-badge'
import { nftCollectionsTableHeaders } from '@data/table-headers'
import useGetNftCollections from '@hooks/queries/use-get-nft-collections'
import {
  ethereumCompactFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'
import { numbersWithCommasFormatter } from '@utils/helpers/numbers-formatter'
import {
  NftCollectionsSortDirection,
  NftCollectionsSortField,
} from '@utils/types'
import { Link, useSearchParams } from 'react-router-dom'

export default function NftCollectionsTable() {
  const [searchParams] = useSearchParams()

  const sortField = (searchParams.get('sort-field') ||
    'volume_total') as NftCollectionsSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    'desc') as NftCollectionsSortDirection

  const { data, isPending, error } = useGetNftCollections(
    sortField,
    sortDirection
  )

  if (isPending)
    return <NftCollectionsTableSkeleton numberOfNftCollections={100} />

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
        {data.data.map(
          ({
            contract_address,
            name,
            logo_url,
            opensea_verified,
            floor_price,
            volume_total,
            owners_total,
            items_total,
          }) => (
            <Table.BodyRow key={contract_address} className="relative">
              <Table.BodyCell>
                <Link to={`/dashboard/collection/${contract_address}`}>
                  <span className="absolute inset-0"></span>
                  <div className="flex w-max items-center gap-1">
                    <img
                      className="size-5.5 rounded-full"
                      src={logo_url}
                      title={name}
                      alt={name}
                      loading="lazy"
                    />
                    <div className="flex items-center gap-0.5">
                      {name} {opensea_verified && <VerifiedBadge isSmall />}
                    </div>
                  </div>
                </Link>
              </Table.BodyCell>
              <Table.BodyCell>
                {ethereumPriceFormatter(floor_price)}
              </Table.BodyCell>
              <Table.BodyCell>
                {ethereumCompactFormatter(volume_total)}
              </Table.BodyCell>
              <Table.BodyCell>
                {numbersWithCommasFormatter(owners_total)}
              </Table.BodyCell>
              <Table.BodyCell>
                {numbersWithCommasFormatter(items_total)}
              </Table.BodyCell>
            </Table.BodyRow>
          )
        )}
      </Table.Body>
    </Table>
  )
}
