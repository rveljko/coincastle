import NftCollectionsTable from '@components/dashboard-components/nft-collections-table'
import Dropdown from '@components/dashboard-components/ui/dropdown'
import DropdownButton from '@components/dashboard-components/ui/dropdown-button'
import ArrowsDownUpIcon from '@icons/arrows-down-up-icon'
import Section from '@sections/dashboard-sections/section'
import {
  NftCollectionsSortDirection,
  NftCollectionsSortField,
} from '@utils/types'
import { useSearchParams } from 'react-router-dom'

export default function NftsMarketplaceSection() {
  const [searchParams, setSearchParams] = useSearchParams()

  const sortField = (searchParams.get('sort-field') ||
    'volume_total') as NftCollectionsSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    'desc') as NftCollectionsSortDirection

  function setSortField(sortField: NftCollectionsSortField) {
    setSearchParams((prevParams) => {
      if (prevParams.has('sort-field', sortField)) {
        prevParams.delete('sort-field', sortField)
        return prevParams
      }
      prevParams.set('sort-field', sortField)
      return prevParams
    })
  }

  function setSortDirection(sortDirection: NftCollectionsSortDirection) {
    setSearchParams((prevParams) => {
      if (prevParams.has('sort-direction', sortDirection)) {
        prevParams.delete('sort-direction', sortDirection)
        return prevParams
      }

      prevParams.set('sort-direction', sortDirection)
      return prevParams
    })
  }

  return (
    <Section>
      <h1 className="mb-2">NFTs Marketplace</h1>
      <div className="mb-4">
        <DropdownButton
          label="Sort"
          variant="secondary"
          size="large"
          leftIcon={<ArrowsDownUpIcon />}
        >
          <Dropdown.List>
            <Dropdown.Item value="item-1">
              <Dropdown.Summary valueForItem="item-1">Sort By</Dropdown.Summary>
              <Dropdown.Details className="space-y-0.5">
                <Dropdown.Button
                  isActive={sortField === 'volume_total'}
                  onClick={() => setSortField('volume_total')}
                >
                  Volume
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'sales_total'}
                  onClick={() => setSortField('sales_total')}
                >
                  Sales
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'average_price'}
                  onClick={() => setSortField('average_price')}
                >
                  Average Price
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'volume_1d'}
                  onClick={() => setSortField('volume_1d')}
                >
                  Volume 1 Day
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'volume_7d'}
                  onClick={() => setSortField('volume_7d')}
                >
                  Volume 7 Days
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'volume_change_1d'}
                  onClick={() => setSortField('volume_change_1d')}
                >
                  Volume 1 Day Change
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'volume_change_7d'}
                  onClick={() => setSortField('volume_change_7d')}
                >
                  Volume 7 Days Change
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'average_price_change_1d'}
                  onClick={() => setSortField('average_price_change_1d')}
                >
                  Average Price 1 Day Change
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'average_price_change_7d'}
                  onClick={() => setSortField('average_price_change_7d')}
                >
                  Average Price 7 Days Change
                </Dropdown.Button>
              </Dropdown.Details>
            </Dropdown.Item>
            <Dropdown.Item value="item-2">
              <Dropdown.Summary valueForItem="item-2">
                Sort Direction
              </Dropdown.Summary>
              <Dropdown.Details className="space-y-0.5">
                <Dropdown.Button
                  isActive={sortDirection === 'asc'}
                  onClick={() => setSortDirection('asc')}
                >
                  Ascending
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortDirection === 'desc'}
                  onClick={() => setSortDirection('desc')}
                >
                  Descending
                </Dropdown.Button>
              </Dropdown.Details>
            </Dropdown.Item>
          </Dropdown.List>
        </DropdownButton>
      </div>
      <NftCollectionsTable />
    </Section>
  )
}
