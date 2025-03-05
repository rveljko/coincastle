import NftCollectionsTableSkeleton from '@components/dashboard-components/nft-collections-table-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Table from '@components/dashboard-components/ui/table'
import { nftCollectionsTableHeaders } from '@data/table-headers'
import useGetNftCollections from '@hooks/queries/use-get-nft-collections'
import {
  ethereumCompactFormatter,
  ethereumPriceFormatter,
} from '@utils/helpers/currency-formatter'
import { numbersWithCommasFormatter } from '@utils/helpers/numbers-formatter'
import { Link, useNavigate } from 'react-router-dom'

export default function NftCollectionsTable() {
  const { data, isPending, error } = useGetNftCollections()
  const navigate = useNavigate()

  if (isPending) return <NftCollectionsTableSkeleton numberOfCoins={100} />

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
            floor_price,
            volume_total,
            owners_total,
            items_total,
          }) => (
            <Table.BodyRow
              onClick={(e) => {
                if (e.metaKey || e.ctrlKey) {
                  window.open(
                    `/dashboard/collection/${contract_address}`,
                    '_blank'
                  )
                } else {
                  navigate(`/dashboard/collection/${contract_address}`)
                }
              }}
              className="cursor-pointer"
              key={contract_address}
            >
              <Table.BodyCell>
                <Link to={`/dashboard/collection/${contract_address}`}>
                  <div className="flex w-max flex-row gap-1">
                    <img
                      className="size-5.5 rounded-full"
                      src={logo_url}
                      title={name}
                      alt={name}
                    />
                    {name}
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
