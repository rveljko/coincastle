import NoNftImagePlaceholder from '@components/dashboard-components/no-nft-image-placeholder'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import VerifiedBadge from '@components/dashboard-components/ui/verified-badge'
import useGetNftCollectionInformation from '@hooks/queries/use-get-nft-collection-information'
import useGetSingleNft from '@hooks/queries/use-get-single-nft'
import NftSectionSkeleton, {
  NftCollectionInformationSkeleton,
} from '@sections/dashboard-sections/nft-section-skeleton'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import { ethereumPriceFormatter } from '@utils/helpers/currency-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import { ethereumAddressValidator } from '@utils/helpers/ethereum-address-validator'
import { percentageFormatter } from '@utils/helpers/percentage-formatters'
import { NftHttpResponse } from '@utils/types'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type NftSectionProps = {
  contractAddress: string
  tokenId: string
}

export default function NftSection({
  contractAddress,
  tokenId,
}: NftSectionProps) {
  const { data, isPending, error } = useGetSingleNft(contractAddress, tokenId)

  if (isPending) return <NftSectionSkeleton />

  if (error)
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  const {
    owner_of,
    minter_address,
    normalized_metadata: { image, attributes },
    list_price: { listed, price },
    floor_price,
  } = data

  return (
    <Section>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-1">
          <NftCollectionInformation
            contractAddress={contractAddress}
            tokenId={tokenId}
          />
          <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
            Details
          </h3>
          <InformationList className={attributes.length ? 'mb-4' : ''}>
            <InformationList.Item>
              <InformationList.Label>Minted By</InformationList.Label>
              <InformationList.Value>
                {ethereumAddressValidator(minter_address) ? (
                  <Link to={`/dashboard/wallet/${minter_address}`}>
                    {ethereumAddressFormatter(minter_address)}
                  </Link>
                ) : (
                  <span>Unknown</span>
                )}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Mint Price</InformationList.Label>
              <InformationList.Value>
                {ethereumPriceFormatter(floor_price)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Owned By</InformationList.Label>
              <InformationList.Value>
                {ethereumAddressValidator(owner_of) ? (
                  <Link to={`/dashboard/wallet/${owner_of}`}>
                    {ethereumAddressFormatter(owner_of)}
                  </Link>
                ) : (
                  <span>Unknown</span>
                )}
              </InformationList.Value>
            </InformationList.Item>
            {listed && (
              <InformationList.Item>
                <InformationList.Label>Listed Price</InformationList.Label>
                <InformationList.Value>
                  {ethereumPriceFormatter(price.toString())}
                </InformationList.Value>
              </InformationList.Item>
            )}
          </InformationList>
          {attributes.length ? (
            <>
              <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
                Attributes
              </h3>
              <InformationList>
                {attributes.map(({ trait_type, value, percentage }, index) => (
                  <InformationList.Item key={index}>
                    <InformationList.Label className="capitalize">
                      {trait_type}
                    </InformationList.Label>
                    <InformationList.Value className="capitalize">
                      {value}{' '}
                      {percentage > 0 && percentageFormatter(percentage)}
                    </InformationList.Value>
                  </InformationList.Item>
                ))}
              </InformationList>
            </>
          ) : null}
        </div>
        <div className="md:flex-1">
          <div className="group aspect-1/1 w-full overflow-hidden rounded-3xl bg-neutral-700">
            <NftImage image={image} />
          </div>
        </div>
      </div>
    </Section>
  )
}

type NftCollectionInformationProps = {
  contractAddress: string
  tokenId: string
}

function NftCollectionInformation({
  contractAddress,
  tokenId,
}: NftCollectionInformationProps) {
  const { data, isPending, error } =
    useGetNftCollectionInformation(contractAddress)

  if (isPending) return <NftCollectionInformationSkeleton />

  if (error) return <ErrorMessage />

  const { collection_logo, name, verified_collection, description } = data

  return (
    <header className="relative mb-4">
      <title>{`${TITLE_PREFIX}${name} #${tokenId}`}</title>
      <div className="mb-2 flex flex-wrap gap-2">
        <img
          className="size-16 rounded-md object-cover"
          src={collection_logo}
          alt={name}
          title={name}
        />
        <div>
          <Link
            to={`/dashboard/collection/${contractAddress}`}
            className="mb-0.5"
          >
            <span className="absolute top-0 left-0 size-16 rounded-md"></span>
            <div className="flex flex-wrap items-center gap-0.5">
              {name} {verified_collection && <VerifiedBadge isSmall />}
            </div>
          </Link>
          <h1 className="break-all">#{tokenId}</h1>
        </div>
      </div>
      <p
        style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}
        className="line-clamp-2 text-ellipsis"
      >
        {description}
      </p>
    </header>
  )
}

type NftImageProps = {
  image: NftHttpResponse['normalized_metadata']['image']
}

function NftImage({ image }: NftImageProps) {
  const [isImageBroken, setIsImageBroken] = useState(false)

  if (isImageBroken || !image) return <NoNftImagePlaceholder />

  return (
    <img
      className="size-full object-cover transition ease-in group-hover:transform-[scale(1.2)]"
      src={
        image.startsWith('http')
          ? image
          : `https://ipfs.io/ipfs/${image.split('//')[1]}`
      }
      onError={() => setIsImageBroken(true)}
      alt=""
    />
  )
}
