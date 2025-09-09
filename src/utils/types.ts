export type NavigationLink = {
  id: number
  name: string
  path: string
  icon?: () => React.JSX.Element
}

export type User = {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: number
  isTwoStepVerificationEnabled: boolean
  password: string
  streetAddress: string
  city: string
  state: string
  zipCode: number
}

export type Integration = {
  id: number
  name: string
  description: string
  logoUrl: string
  logoBigUrl: string
  isActive: boolean
}

export type ThemeLabel = 'system' | 'dark' | 'light'

export type Theme = {
  id: number
  name: string
  label: ThemeLabel
  imageUrl: string
}

export type ChartLabel = 'area' | 'line'

export type Chart = {
  id: number
  name: string
  label: ChartLabel
  imageUrl: string
}

export type Question = {
  id: number
  summary: string
  details: string
}

export type CoinOverviewHttpResponse = {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  market_cap: number
  total_volume: number
  price_change_percentage_24h: number
  circulating_supply: number
}

export type CoinInformationHttpResponse = {
  name: string
  symbol: string
  description: {
    en: string
  }
  image: {
    small: string
  }
  market_cap_rank: number
  market_data: {
    market_cap: {
      usd: number
    }
    current_price: {
      usd: number
    }
    total_volume: {
      usd: number
    }
    total_supply: number
    ath: {
      usd: number
    }
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_30d: number
    price_change_percentage_1y: number
  }
}

export type CoinChartInformationHttpResponse = {
  prices: number[][]
}

export type CryptoCurrenciesSearchHttpResponse = {
  coins: {
    id: string
    name: string
    symbol: string
    thumb: string
  }[]
}

export type ChartInformationPeriod = '1' | '7' | '30' | '90' | '180' | '365'

export type CoinOverviewSortField = 'market_cap' | 'volume'

export type CoinOverviewSortDirection = 'asc' | 'desc'

export type NftCollectionsOverviewHttpResponse = {
  rank: number
  collection_address: string
  collection_title: string
  collection_image: string
  floor_price: string
  volume_usd: string
  average_price: string
}

export type NftCollectionInformationHttpResponse = {
  token_address: string
  name: string
  collection_logo: string
  description: string
  verified_collection: boolean
}

export type NftCollectionStatisticsHttpResponse = {
  code: number
  data: {
    floor_price: number
    total_volume: number
    owners_total: number
    items_total: number
  }
}

export type NftCollectionNftsHttpResponse = {
  cursor: string
  result: NftOverview[]
}

export type NftOverview = {
  token_address: string
  token_id: string
  name: string
  list_price: {
    listed: boolean
    price: number
  }
  normalized_metadata: {
    image: string
  }
  floor_price: number
}

export type NftHttpResponse = {
  code: number
  data: {
    minter: string
    mint_timestamp: number
    owner: string
    own_timestamp: number
    content_type: string
    content_uri: string
    image_uri: string
    nftscan_uri: string
    latest_trade_price: number
    mint_price: number
    attributes: {
      attribute_name: string
      attribute_value: string
      percentage: string
    }[]
  }
}

export type NftWalletNfts = {
  code: number
  data: {
    content: NftOverview[]
    next: string
  }
}

export type NftWalletStatistics = {
  code: number
  data: {
    holding_value: number
    holding_value_usdt: number
    sold_value: number
    sold_value_usdt: number
    gas_value: number
    gas_value_usdt: number
    holding_count: number
    mint_count: number
    collection_count: number
  }
}

export type NftWalletNftsSortField =
  | 'mint_time'
  | 'own_time'
  | 'latest_trade_price'
  | ''

export type NftCollectionSearchHttpResponse = {
  code: number
  data: {
    contract_address: string
    name: string
    logo_url: string
    opensea_verified: boolean
  }[]
}

export type NftWalletNftsSortDirection = 'asc' | 'desc' | ''

export type StockOverviewHttpResponse = {
  symbol: string
  companyName: string
  marketCap: number
  price: number
  volume: number
  lastAnnualDividend: number
  exchangeShortName: string
}

export type StockInformationHttpResponse = {
  symbol: string
  name: string
  price: number
  changePercentage: number
  change: number
  volume: number
  dayLow: number
  dayHigh: number
  yearHigh: number
  yearLow: number
  marketCap: number
  priceAvg50: number
  priceAvg200: number
  exchange: string
  open: number
  previousClose: number
}

export type StockChartInformationHttpResponse = {
  date: string
  price: number
}

export type StockSearchHttpResponse = {
  symbol: string
  name: string
  exchange: string
}

export type Guide = {
  id: number
  thumbnail: string
  title: string
  date: Date
  url: string
  path: string
}

export type Category = 'crypto' | 'stocks'

export type Benefit = {
  id: number
  title: string
  icon: () => React.JSX.Element
  description: string
}

export type Customer = {
  id: number
  name: string
  description: string
  logoUrl: string
}
