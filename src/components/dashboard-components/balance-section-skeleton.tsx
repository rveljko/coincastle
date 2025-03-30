import Table from '@components/dashboard-components/ui/table'
import Section from '@sections/dashboard-sections/section'

type BalanceSectionSkeletonProps = {
  coinAmounts: number
}

export default function BalanceSectionSkeleton({
  coinAmounts,
}: BalanceSectionSkeletonProps) {
  return (
    <Section>
      <div className="bg-clickable/10 mb-1 h-5 w-20 animate-pulse rounded-sm"></div>
      <div className="bg-clickable/10 mb-2.5 h-10.5 w-50 animate-pulse rounded-sm"></div>
      <div className="lg:aspect-[2.5/1] lg:overflow-y-auto">
        <Table>
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell>
                <div className="bg-clickable/10 h-5.5 w-20 animate-pulse rounded-sm"></div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div className="bg-clickable/10 h-5.5 w-20 animate-pulse rounded-sm"></div>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <div className="bg-clickable/10 ml-auto h-5.5 w-20 animate-pulse rounded-sm"></div>
              </Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          <Table.Body>
            {Array.from({ length: coinAmounts }, (_, index) => index).map(
              (row) => (
                <Table.BodyRow key={row} className="hover:bg-unset">
                  <Table.BodyCell>
                    <div className="flex gap-1">
                      <div className="bg-clickable/10 size-5.5 animate-pulse rounded-sm"></div>
                      <div className="bg-clickable/10 h-5.5 w-24 animate-pulse rounded-sm"></div>
                    </div>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <div className="bg-clickable/10 h-5.5 w-24 animate-pulse rounded-sm"></div>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <div className="bg-clickable/10 ml-auto h-5.5 w-24 animate-pulse rounded-sm"></div>
                  </Table.BodyCell>
                </Table.BodyRow>
              )
            )}
          </Table.Body>
        </Table>
      </div>
    </Section>
  )
}
