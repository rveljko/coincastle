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
  isActive: boolean
}

export type ThemeLabel = 'system' | 'dark' | 'light'

export type Theme = {
  id: number
  name: string
  label: ThemeLabel
  imageUrl: string
}

export type Chart = {
  id: number
  name: string
  label: 'line' | 'bar' | 'candlestick'
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
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
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

export type CoinChartInformationPeriod = '1' | '7' | '30' | '90' | '180' | '365'

export type NftCollectionsOverviewHttpResponse = {
  data: {
    contract_address: string
    name: string
    logo_url: string
    floor_price: number
    volume_total: number
    owners_total: number
    items_total: number
  }[]
}

export type NftCollectionInformationHttpResponse = {
  data: {
    contract_address: string
    name: string
    description: string
    logo_url: string
    owner: string
  }
}

export type NftCollectionStatisticsHttpResponse = {
  data: {
    floor_price: number
    total_volume: number
    owners_total: number
    items_total: number
  }
}

export type NftCollectionNftsHttpResponse = {
  data: {
    content: NftOverview[]
    next: string
  }
}

export type NftOverview = {
  contract_address: string
  contract_name: string
  token_id: string
  image_uri: string
  nftscan_uri: string
}

export type NftHttpResponse = {
  data: {
    minter: string
    mint_timestamp: number
    owner: string
    own_timestamp: number
    image_uri: string
    nftscan_uri: string
    attributes: {
      attribute_name: string
      attribute_value: string
      percentage: string
    }[]
  }
}

export type WalletNfts = {
  data: {
    content: NftOverview[]
    next: string
  }
}

export type NftWalletStatistics = {
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

export type NftCollectionNftsSortField =
  | 'latest_trade_price'
  | 'latest_trade_time'
  | 'rarity_rank'
  | ''

export type NftCollectionNftsSortDirection = 'asc' | 'desc' | ''
