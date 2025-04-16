import Table from '@components/dashboard-components/ui/table'

type TrendingNftCollectionsTableSkeletonProps = {
  numberOfNftCollections: number
}

export default function TrendingNftCollectionsTableSkeleton({
  numberOfNftCollections,
}: TrendingNftCollectionsTableSkeletonProps) {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>
            <div className="bg-clickable/10 h-5.5 w-20 animate-pulse rounded-sm"></div>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <div className="bg-clickable/10 ml-auto h-5.5 w-20 animate-pulse rounded-sm"></div>
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {Array.from(
          { length: numberOfNftCollections },
          (_, index) => index
        ).map((row) => (
          <Table.BodyRow key={row} className="hover:bg-unset">
            <Table.BodyCell>
              <div className="flex gap-1">
                <div className="bg-clickable/10 size-5.5 animate-pulse rounded-sm"></div>
                <div className="bg-clickable/10 h-5.5 w-24 animate-pulse rounded-sm"></div>
              </div>
            </Table.BodyCell>
            <Table.BodyCell>
              <div className="bg-clickable/10 ml-auto h-5.5 w-24 animate-pulse rounded-sm"></div>
            </Table.BodyCell>
          </Table.BodyRow>
        ))}
      </Table.Body>
    </Table>
  )
}
