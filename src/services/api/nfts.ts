import {
  NftCollectionInformationHttpResponse,
  NftCollectionNftsHttpResponse,
  NftCollectionsOverviewHttpResponse,
  NftCollectionStatisticsHttpResponse,
  NftHttpResponse,
  NftWalletNfts,
  NftWalletStatisticsHttpResponse,
} from '@utils/types'

const NFT_BASE_URL = 'https://deep-index.moralis.io/api/v2.2'

export async function getNftCollections(): Promise<
  NftCollectionsOverviewHttpResponse[]
> {
  const res = await fetch(
    `${NFT_BASE_URL}/market-data/nfts/hottest-collections`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
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
  const res = await fetch(`${NFT_BASE_URL}/nft/${contractAddress}/metadata`, {
    headers: {
      'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
    },
  })

  if (!res.ok)
    throw new Error(
      'Failed to fetch NFT collection information. Ensure the collection ID is correct and try again.'
    )

  return res.json()
}

export async function getNftCollectionStatistics(
  contractAddress: string
): Promise<NftCollectionStatisticsHttpResponse> {
  const res = await fetch(`${NFT_BASE_URL}/nft/${contractAddress}/price`, {
    headers: {
      'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
    },
  })

  if (!res.ok)
    throw new Error(
      'Failed to fetch NFT collection statistics. Ensure the collection ID is correct and try again.'
    )

  return res.json()
}

export async function getNftCollectionNfts(
  contractAddress: string,
  cursor: string,
  limit: number
): Promise<NftCollectionNftsHttpResponse> {
  const res = await fetch(
    `${NFT_BASE_URL}/nft/${contractAddress}?cursor=${cursor}&limit=${limit}&normalizeMetadata=true&include_prices=true`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
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
  const res = await fetch(`${NFT_BASE_URL}/nft/${contractAddress}/${tokenId}`, {
    headers: {
      'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
    },
  })

  if (!res.ok)
    throw new Error(
      'Failed to fetch the NFT. Ensure the NFT ID is correct and try again.'
    )

  return res.json()
}

export async function getNftWalletNfts(
  walletAddress: string,
  cursor: string,
  limit: number
): Promise<NftWalletNfts> {
  const res = await fetch(
    `${NFT_BASE_URL}/${walletAddress}/nft?chain=eth&format=decimal&cursor=${cursor}&limit=${limit}&normalizeMetadata=true&include_prices=true`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch wallet NFTs. Please check wallet address and try again.'
    )

  return res.json()
}

export async function getNftWalletStatisticsHttpResponse(
  walletAddress: string
): Promise<NftWalletStatisticsHttpResponse> {
  const res = await fetch(
    `${NFT_BASE_URL}/wallets/${walletAddress}/stats?chain=eth`,
    {
      headers: {
        'X-API-Key': import.meta.env.VITE_MORALIS_API_KEY,
      },
    }
  )

  if (!res.ok)
    throw new Error(
      'Failed to fetch wallet NFT statistics. Please check wallet address and try again.'
    )

  return res.json()
}
