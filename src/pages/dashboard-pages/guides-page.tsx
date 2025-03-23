import Dropdown from '@components/dashboard-components/ui/dropdown'
import DropdownButton from '@components/dashboard-components/ui/dropdown-button'
import FormField from '@components/dashboard-components/ui/form-field'
import Button from '@components/ui/button'
import FilterIcon from '@icons/filter-icon'
import { currencyFormatter } from '@utils/helpers/currency-formatter'
import { currencyMask, currencyMaskCleaner } from '@utils/helpers/input-masks'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function GuidesPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const initialFilters = {
    price: {
      from:
        searchParams.get('price-from') !== null
          ? currencyFormatter(parseFloat(searchParams.get('price-from')!))
          : '',
      to:
        searchParams.get('price-to') !== null
          ? currencyFormatter(parseFloat(searchParams.get('price-to')!))
          : currencyFormatter(500),
    },
    marketCap: {
      from:
        searchParams.get('marketcap-from') !== null
          ? currencyFormatter(parseFloat(searchParams.get('marketcap-from')!))
          : '',
      to:
        searchParams.get('marketcap-to') !== null
          ? currencyFormatter(parseFloat(searchParams.get('marketcap-to')!))
          : currencyFormatter(1_000_000_000),
    },
    volume: {
      from:
        searchParams.get('volume-from') !== null
          ? currencyFormatter(parseFloat(searchParams.get('volume-from')!))
          : '',
      to:
        searchParams.get('volume-to') !== null
          ? currencyFormatter(parseFloat(searchParams.get('volume-to')!))
          : currencyFormatter(1_000_000),
    },
  }

  const [prevFilters, setPrevFilters] = useState(initialFilters)
  const [filters, setFilters] = useState(initialFilters)

  function setFilterParam(name: string, value: string) {
    setSearchParams((prevParams) => {
      prevParams.set(name, currencyMaskCleaner(value))
      return prevParams
    })
  }

  return (
    <div>
      <DropdownButton
        label="Filter"
        variant="secondary"
        size="large"
        leftIcon={<FilterIcon />}
      >
        <Dropdown.List>
          <Dropdown.Item value="item-1">
            <Dropdown.Summary valueForItem="item-1">Price</Dropdown.Summary>
            <Dropdown.Details>
              <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                  e.preventDefault()

                  if (filters.price.from !== prevFilters.price.from) {
                    setFilterParam('price-from', filters.price.from)

                    setPrevFilters({
                      ...prevFilters,
                      price: {
                        ...prevFilters.price,
                        from: filters.price.from,
                      },
                    })
                  }

                  if (filters.price.to !== prevFilters.price.to) {
                    setFilterParam('price-to', filters.price.to)

                    setPrevFilters({
                      ...prevFilters,
                      price: { ...prevFilters.price, to: filters.price.to },
                    })
                  }
                }}
              >
                <FormField.Label>Price Range</FormField.Label>
                <div className="flex items-center gap-1">
                  <FormField.Input
                    optional
                    placeholder={currencyFormatter(0)}
                    type="tel"
                    value={filters.price.from}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        price: {
                          ...filters.price,
                          from: currencyMask(e.target.value),
                        },
                      })
                    }
                  />
                  <span className="text-neutral-100">to</span>
                  <FormField.Input
                    optional
                    placeholder={currencyFormatter(1_000_000_000)}
                    type="tel"
                    value={filters.price.to}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        price: {
                          ...filters.price,
                          to: currencyMask(e.target.value),
                        },
                      })
                    }
                  />
                </div>
                <Button
                  variant="primary"
                  size="large"
                  className="w-full"
                  disabled={
                    prevFilters.price.from === filters.price.from &&
                    prevFilters.price.to === filters.price.to
                  }
                >
                  Apply Filter
                </Button>
              </form>
            </Dropdown.Details>
          </Dropdown.Item>
          <Dropdown.Item value="item-2">
            <Dropdown.Summary valueForItem="item-2">Marketcap</Dropdown.Summary>
            <Dropdown.Details>
              <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                  e.preventDefault()

                  if (filters.marketCap.from !== prevFilters.marketCap.from) {
                    setFilterParam('marketcap-from', filters.marketCap.from)

                    setPrevFilters({
                      ...prevFilters,
                      marketCap: {
                        ...prevFilters.marketCap,
                        from: filters.marketCap.from,
                      },
                    })
                  }

                  if (filters.marketCap.to !== prevFilters.marketCap.to) {
                    setFilterParam('marketcap-from', filters.marketCap.from)

                    setPrevFilters({
                      ...prevFilters,
                      marketCap: {
                        ...prevFilters.marketCap,
                        to: filters.marketCap.to,
                      },
                    })
                  }
                }}
              >
                <FormField.Label>Marketcap Range</FormField.Label>
                <div className="flex items-center gap-1">
                  <FormField.Input
                    optional
                    placeholder={currencyFormatter(0)}
                    type="tel"
                    value={filters.marketCap.from}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        marketCap: {
                          ...filters.marketCap,
                          from: currencyMask(e.target.value),
                        },
                      })
                    }
                  />
                  <span className="text-neutral-100">to</span>
                  <FormField.Input
                    optional
                    placeholder={initialFilters.marketCap.to}
                    type="tel"
                    value={filters.marketCap.to}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        marketCap: {
                          ...filters.marketCap,
                          to: currencyMask(e.target.value),
                        },
                      })
                    }
                  />
                </div>
                <Button
                  variant="primary"
                  size="large"
                  className="w-full"
                  disabled={
                    prevFilters.marketCap.from === filters.marketCap.from &&
                    prevFilters.marketCap.to === filters.marketCap.to
                  }
                >
                  Apply Filter
                </Button>
              </form>
            </Dropdown.Details>
          </Dropdown.Item>
          <Dropdown.Item value="item-3">
            <Dropdown.Summary valueForItem="item-3">Volume</Dropdown.Summary>
            <Dropdown.Details>
              <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                  e.preventDefault()

                  if (filters.volume.from !== prevFilters.volume.from) {
                    setFilterParam('volume-from', filters.volume.from)

                    setPrevFilters({
                      ...prevFilters,
                      volume: {
                        ...prevFilters.volume,
                        from: filters.volume.from,
                      },
                    })
                  }

                  if (filters.volume.to !== prevFilters.volume.to) {
                    setFilterParam('volume-from', filters.volume.from)

                    setPrevFilters({
                      ...prevFilters,
                      volume: {
                        ...prevFilters.volume,
                        to: filters.volume.to,
                      },
                    })
                  }
                }}
              >
                <FormField.Label>Volume Range</FormField.Label>
                <div className="flex items-center gap-1">
                  <FormField.Input
                    optional
                    placeholder={currencyFormatter(0)}
                    type="tel"
                    value={filters.volume.from}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        volume: {
                          ...filters.volume,
                          from: currencyMask(e.target.value),
                        },
                      })
                    }
                  />
                  <span className="text-neutral-100">to</span>
                  <FormField.Input
                    optional
                    placeholder={currencyFormatter(1_000_000_000)}
                    type="tel"
                    value={filters.volume.to}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        volume: {
                          ...filters.volume,
                          to: currencyMask(e.target.value),
                        },
                      })
                    }
                  />
                </div>
                <Button
                  variant="primary"
                  size="large"
                  className="w-full"
                  disabled={
                    prevFilters.volume.from === filters.volume.from &&
                    prevFilters.volume.to === filters.volume.to
                  }
                >
                  Apply Filter
                </Button>
              </form>
            </Dropdown.Details>
          </Dropdown.Item>
        </Dropdown.List>
      </DropdownButton>
    </div>
  )
}
