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
  NftCollectionsSortDirection,
  NftCollectionsSortField,
  NftCollectionStatisticsHttpResponse,
  NftHttpResponse,
  NftWalletNftsSortDirection,
  NftWalletNftsSortField,
  NftWalletStatistics,
  WalletNfts,
} from '@utils/types'

const CRYPTO_BASE_URL = 'https://api.coingecko.com/api/v3'

export async function getCryptoCurrencies(
  numberOfCoins: number
): Promise<CoinOverviewHttpResponse[]> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/markets?vs_currency=usd&per_page=${numberOfCoins}`,
    {
      headers: {
        'X-Cg-Demo-API-Key': import.meta.env.VITE_COINGECKO_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch all cryptocurrencies. Please check your connection and try again.'
    )

  return res.json()
}

export async function getCoinInformation(
  id: string
): Promise<CoinInformationHttpResponse> {
  const res = await fetch(`${CRYPTO_BASE_URL}/coins/${id}`, {
    headers: {
      'X-Cg-Demo-API-Key': import.meta.env.VITE_COINGECKO_API_KEY,
    },
  })

  if (!res.ok)
    throw new Error(
      'Failed to fetch coin information. Ensure the coin symbol or ID is correct and try again.'
    )

  return res.json()
}

export async function getCoinChartInformation(
  id: string,
  period: CoinChartInformationPeriod
): Promise<CoinChartInformationHttpResponse> {
  const res = await fetch(
    `${CRYPTO_BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${period}`,
    {
      headers: {
        'X-Cg-Demo-API-Key': import.meta.env.VITE_COINGECKO_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch coin chart information. Check the coin symbol or ID and time period, then try again.'
    )

  return res.json()
}

export async function getNftCollections(
  sortField: NftCollectionsSortField,
  sortDirection: NftCollectionsSortDirection
): Promise<NftCollectionsOverviewHttpResponse> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/collections/rankings?sort_field=${sortField}&sort_direction=${sortDirection}`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch NFT collections. Please check your connection and try again.'
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

  if (!res.ok)
    throw new Error(
      'Failed to fetch NFT collection information. Ensure the collection ID is correct and try again.'
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

  if (!res.ok)
    throw new Error(
      'Failed to fetch NFT collection statistics. Ensure the collection ID is correct and try again.'
    )

  return res.json()
}

export async function getNftCollectionNfts(
  contractAddress: string,
  pageParam: string,
  sortField: NftCollectionNftsSortField,
  sortDirection: NftCollectionNftsSortDirection,
  limit: number
): Promise<NftCollectionNftsHttpResponse> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/assets/${contractAddress}?cursor=${pageParam}&sort_field=${sortField}&sort_direction=${sortDirection}&limit=${limit}`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch NFTs in the collection. Ensure the collection ID is correct and try again.'
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

  if (!res.ok)
    throw new Error(
      'Failed to fetch the NFT. Ensure the NFT ID is correct and try again.'
    )

  return res.json()
}

export async function getWalletNfts(
  walletAddress: string,
  sortField: NftWalletNftsSortField,
  sortDirection: NftWalletNftsSortDirection,
  pageParam: string
): Promise<WalletNfts> {
  const res = await fetch(
    `https://restapi.nftscan.com/api/v2/account/own/${walletAddress}?erc_type=erc721&show_attribute=false&sort_field=${sortField}&sort_direction=${sortDirection}&cursor=${pageParam}`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch wallet NFTs. Please check wallet address and try again.'
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

  if (!res.ok)
    throw new Error(
      'Failed to fetch wallet NFT statistics. Please check wallet address and try again.'
    )

  return res.json()
}
