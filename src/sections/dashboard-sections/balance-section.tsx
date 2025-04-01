import BalanceSectionSkeleton from '@components/dashboard-components/balance-section-skeleton'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Table from '@components/dashboard-components/ui/table'
import { balanceTableHeaders } from '@data/table-headers'
import useGetCryptoCurrencies from '@hooks/queries/use-get-crypto-currencies'
import Section from '@sections/dashboard-sections/section'
import { currencyFormatter } from '@utils/helpers/currency-formatter'
import { Link } from 'react-router-dom'

const COIN_AMOUNTS: number[] = [91, 67, 23, 45, 3]

export default function BalanceSection() {
  const { data, isPending, error } = useGetCryptoCurrencies(
    COIN_AMOUNTS.length,
    'market_cap',
    'desc'
  )

  if (isPending)
    return <BalanceSectionSkeleton coinAmounts={COIN_AMOUNTS.length} />

  if (error)
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  return (
    <Section>
      <p className="mb-1">Total Balance</p>
      <h1 className="text-clickable mb-2.5">
        {currencyFormatter(
          data.reduce(
            (acc, { current_price }, index) =>
              COIN_AMOUNTS[index] * current_price + acc,
            0
          )
        )}
      </h1>
      <div className="lg:aspect-[2.5/1] lg:overflow-y-auto">
        <Table>
          <Table.Header>
            <Table.HeaderRow>
              {balanceTableHeaders.map((header) => (
                <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
              ))}
            </Table.HeaderRow>
          </Table.Header>
          <Table.Body>
            {data.map(({ id, image, name, symbol, current_price }, index) => (
              <Table.BodyRow className="relative" key={symbol}>
                <Table.BodyCell>
                  <Link to={`/dashboard/coin/${id}`}>
                    <span className="absolute inset-0"></span>
                    <div className="flex w-max flex-row gap-1">
                      <img
                        className="size-5.5 rounded-full"
                        src={image}
                        title={name}
                        alt={name}
                        loading="lazy"
                      />
                      <div className="flex items-center gap-0.5">
                        {name}
                        <span className="text-neutral-400">
                          {symbol.toLocaleUpperCase()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Table.BodyCell>
                <Table.BodyCell>{COIN_AMOUNTS[index]}</Table.BodyCell>
                <Table.BodyCell>
                  {currencyFormatter(COIN_AMOUNTS[index] * current_price)}
                </Table.BodyCell>
              </Table.BodyRow>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Section>
  )
}
