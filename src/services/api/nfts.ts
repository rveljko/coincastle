import {
  NftCollectionInformationHttpResponse,
  NftCollectionNftsHttpResponse,
  NftCollectionNftsSortDirection,
  NftCollectionNftsSortField,
  NftCollectionSearchHttpResponse,
  NftCollectionsOverviewHttpResponse,
  NftCollectionsSortDirection,
  NftCollectionsSortField,
  NftCollectionStatisticsHttpResponse,
  NftHttpResponse,
  NftWalletNfts,
  NftWalletNftsSortDirection,
  NftWalletNftsSortField,
  NftWalletStatistics,
} from '@utils/types'

const NFT_BASE_URL = 'https://restapi.nftscan.com/api/v2'

export async function getNftCollections(
  sortField: NftCollectionsSortField,
  sortDirection: NftCollectionsSortDirection,
  limit: number
): Promise<NftCollectionsOverviewHttpResponse> {
  const res = await fetch(
    `${NFT_BASE_URL}/collections/rankings?sort_field=${sortField}&sort_direction=${sortDirection}&limit=${limit}`,
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
    `${NFT_BASE_URL}/collections/${contractAddress}?show_attribute=true`,
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
    `${NFT_BASE_URL}/statistics/collection/${contractAddress}?show_hourly_statistics=false`,
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
    `${NFT_BASE_URL}/assets/${contractAddress}?cursor=${pageParam}&sort_field=${sortField}&sort_direction=${sortDirection}&limit=${limit}`,
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
    `${NFT_BASE_URL}/assets/${contractAddress}/${tokenId}?show_attribute=true`,
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

export async function getNftWalletNfts(
  walletAddress: string,
  sortField: NftWalletNftsSortField,
  sortDirection: NftWalletNftsSortDirection,
  pageParam: string
): Promise<NftWalletNfts> {
  const res = await fetch(
    `${NFT_BASE_URL}/account/own/${walletAddress}?erc_type=erc721&show_attribute=false&sort_field=${sortField}&sort_direction=${sortDirection}&cursor=${pageParam}`,
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
    `${NFT_BASE_URL}/statistics/overview/${walletAddress}`,
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

export async function getNftCollectionBySearch(
  collectionName: string
): Promise<NftCollectionSearchHttpResponse> {
  const res = await fetch(`${NFT_BASE_URL}/collections/filters`, {
    method: 'POST',
    headers: {
      'X-API-Key': import.meta.env.VITE_NFTSCAN_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: collectionName,
      name_fuzzy_search: true,
      sort_direction: 'asc',
      sort_field: 'create_block_number',
    }),
  })

  if (!res.ok)
    throw new Error(
      'Failed to fetch NFT Collections by search. Please check your query and connection, then try again.'
    )

  return res.json()
}
