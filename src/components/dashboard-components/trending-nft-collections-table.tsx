import TrendingNftCollectionsTableSkeleton from '@components/dashboard-components/trending-nft-collections-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Table from '@components/dashboard-components/ui/table'
import VerifiedBadge from '@components/dashboard-components/ui/verified-badge'
import { trendingNftCollectionsTableHeaders } from '@data/table-headers'
import useGetNftCollections from '@hooks/queries/use-get-nft-collections'
import { ethereumPriceFormatter } from '@utils/helpers/currency-formatter'
import isHttpError from '@utils/helpers/is-http-error'
import { Link } from 'react-router-dom'

export default function TrendingNftCollectionsTable() {
  const { data, isPending, error } = useGetNftCollections(
    'volume_total',
    'desc',
    5
  )

  if (isPending)
    return <TrendingNftCollectionsTableSkeleton numberOfNftCollections={5} />

  if (error || isHttpError(data.code)) return <ErrorMessage />

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
        {data.data.map(
          ({
            contract_address,
            name,
            logo_url,
            opensea_verified,
            floor_price,
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
            </Table.BodyRow>
          )
        )}
      </Table.Body>
    </Table>
  )
}
