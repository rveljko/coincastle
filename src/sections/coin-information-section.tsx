import InformationList from '@components/dashboard-components/ui/information-list'
import PercentageChangeIndicator from '@components/dashboard-components/ui/percentage-change-indicator'
import useGetCoinInformation from '@hooks/queries/use-get-coin-information'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import {
  compactCurrencyFormatter,
  currencyFormatter,
} from '@utils/helpers/currency-formatter'

type CoinInformationProps = {
  coinId: string
}

export default function CoinInformation({ coinId }: CoinInformationProps) {
  const { data, isPending, error } = useGetCoinInformation(coinId)

  if (isPending) return <div>loading</div>

  if (error) return <div>error: {error.message}</div>

  const { image, name, description, market_cap_rank, symbol, market_data } =
    data

  return (
    <Section>
      <title>{`${TITLE_PREFIX}${name}`}</title>
      <header>
        <div className="mb-2 flex items-center gap-2">
          <img className="size-8 rounded-full" src={image.small} alt="" />
          <div className="flex items-center gap-1">
            <h3 className="text-heading-4-font-size">{name}</h3>
            <span className="text-neutral-400 uppercase">{symbol}</span>
          </div>
        </div>
        <p className="mb-4 line-clamp-2 text-ellipsis">{description.en}</p>
      </header>
      <h3 className="text-heading-4-font-size mb-2">Market Statistics</h3>
      <InformationList className="mb-4">
        <InformationList.Item>
          <InformationList.Label>Popularity</InformationList.Label>
          <InformationList.Value>#{market_cap_rank}</InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Market Cap</InformationList.Label>
          <InformationList.Value>
            {compactCurrencyFormatter(market_data.market_cap.usd)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Volume</InformationList.Label>
          <InformationList.Value>
            {compactCurrencyFormatter(market_data.total_volume.usd)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Supply</InformationList.Label>
          <InformationList.Value>
            {compactCurrencyFormatter(market_data.total_supply)}
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>All Time High</InformationList.Label>
          <InformationList.Value>
            {currencyFormatter(market_data.ath.usd)}
          </InformationList.Value>
        </InformationList.Item>
      </InformationList>
      <h3 className="text-heading-4-font-size mb-2">Market Performance</h3>
      <InformationList>
        <InformationList.Item>
          <InformationList.Label>Price Change 1D</InformationList.Label>
          <InformationList.Value>
            <PercentageChangeIndicator
              percentage={market_data.price_change_percentage_24h}
            />
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Price Change 1W</InformationList.Label>
          <InformationList.Value>
            <PercentageChangeIndicator
              percentage={market_data.price_change_percentage_7d}
            />
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Price Change 1M</InformationList.Label>
          <InformationList.Value>
            <PercentageChangeIndicator
              percentage={market_data.price_change_percentage_30d}
            />
          </InformationList.Value>
        </InformationList.Item>
        <InformationList.Item>
          <InformationList.Label>Price Change 1Y</InformationList.Label>
          <InformationList.Value>
            <PercentageChangeIndicator
              percentage={market_data.price_change_percentage_1y}
            />
          </InformationList.Value>
        </InformationList.Item>
      </InformationList>
    </Section>
  )
}
