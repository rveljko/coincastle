import CryptoCoinsTable from '@components/dashboard-components/crypto-coins-table'
import Dropdown from '@components/dashboard-components/ui/dropdown'
import DropdownButton from '@components/dashboard-components/ui/dropdown-button'
import ArrowsDownUpIcon from '@icons/arrows-down-up-icon'
import Section from '@sections/dashboard-sections/section'
import { CoinOverviewSortDirection, CoinOverviewSortField } from '@utils/types'
import { useSearchParams } from 'react-router-dom'

export default function CryptoMarketplaceSection() {
  const [searchParams, setSearchParams] = useSearchParams()

  const sortField = (searchParams.get('sort-field') ||
    'market_cap') as CoinOverviewSortField
  const sortDirection = (searchParams.get('sort-direction') ||
    'desc') as CoinOverviewSortDirection

  function setSortField(sortField: CoinOverviewSortField) {
    setSearchParams((prevParams) => {
      if (prevParams.has('sort-field', sortField)) {
        prevParams.delete('sort-field', sortField)
        return prevParams
      }
      prevParams.set('sort-field', sortField)
      return prevParams
    })
  }

  function setSortDirection(sortDirection: CoinOverviewSortDirection) {
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
      <h1 className="mb-2">Crypto Marketplace</h1>
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
              <Dropdown.Details>
                <Dropdown.Button
                  isActive={sortField === 'market_cap'}
                  onClick={() => setSortField('market_cap')}
                >
                  Marketcap
                </Dropdown.Button>
                <Dropdown.Button
                  isActive={sortField === 'volume'}
                  onClick={() => setSortField('volume')}
                >
                  Volume
                </Dropdown.Button>
              </Dropdown.Details>
            </Dropdown.Item>
            <Dropdown.Item value="item-2">
              <Dropdown.Summary valueForItem="item-2">
                Sort Direction
              </Dropdown.Summary>
              <Dropdown.Details>
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
      <CryptoCoinsTable numberOfCoins={100} />
    </Section>
  )
}
