import {
  CoinChartInformationHttpResponse,
  CoinChartInformationPeriod,
  CoinInformationHttpResponse,
  CoinOverviewHttpResponse,
  NftCollectionInformationHttpResponse,
  NftCollectionNftsHttpResponse,
  NftCollectionNftsSortDirection,
  NftCollectionNftsSortField,
  NftCollectionsOverviewHttpResponse,
  NftCollectionStatisticsHttpResponse,
  NftHttpResponse,
  NftWalletStatistics,
  WalletNfts,
} from '@utils/types'

const CRYPTO_BASE_URL = 'https://api.coingecko.com/api/v3'

export async function getCryptoCurrencies(
  numberOfCoins: number
): Promise<CoinOverviewHttpResponse[]> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/markets?vs_currency=usd&per_page=${numberOfCoins}`
  )
  return res.json()
}

export async function getCoinInformation(
  id: string
): Promise<CoinInformationHttpResponse> {
  const res = await fetch(`${CRYPTO_BASE_URL}/coins/${id}`)
  return res.json()
}

export async function getCoinChartInformation(
  id: string,
  period: CoinChartInformationPeriod
): Promise<CoinChartInformationHttpResponse> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${period}`
  )
  return res.json()
}

export async function getNftCollections(): Promise<NftCollectionsOverviewHttpResponse> {
  const res = await fetch(
    'https://restapi.nftscan.com/api/v2/collections/rankings?sort_field=volume_total&sort_direction=desc',
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )
  return res.json()
}

export async function getNftCollectionInformation(
  contractAddress: string
): Promise<NftCollectionInformationHttpResponse> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/collections/${contractAddress}?show_attribute=true`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )
  return res.json()
}

export async function getNftCollectionStatistics(
  contractAddress: string
): Promise<NftCollectionStatisticsHttpResponse> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/statistics/collection/${contractAddress}?show_hourly_statistics=false`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )
  return res.json()
}

export async function getNftCollectionNfts(
  contractAddress: string,
  pageParam: string,
  sortField: NftCollectionNftsSortField,
  sortDirection: NftCollectionNftsSortDirection
): Promise<NftCollectionNftsHttpResponse> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/assets/${contractAddress}?cursor=${pageParam}&sort_field=${sortField}&sort_direction=${sortDirection}`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )
  return res.json()
}

export async function getSingleNft(
  contractAddress: string,
  tokenId: string
): Promise<NftHttpResponse> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/assets/${contractAddress}/${tokenId}?show_attribute=true`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )
  return res.json()
}

export async function getWalletNfts(
  walletAddress: string,
  pageParam: string
): Promise<WalletNfts> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/account/own/${walletAddress}?erc_type=erc721&show_attribute=false&cursor=${pageParam}`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )
  return res.json()
}

export async function getNftWalletStatistics(
  walletAddress: string
): Promise<NftWalletStatistics> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/statistics/overview/${walletAddress}`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )
  return res.json()
}
