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
import { longDateFormatter } from '@utils/helpers/date-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import isHttpError from '@utils/helpers/is-http-error'
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

  if (error || isHttpError(data.code))
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  const {
    mint_timestamp,
    minter,
    own_timestamp,
    owner,
    latest_trade_price,
    mint_price,
    attributes,
    content_type,
    content_uri,
    image_uri,
    nftscan_uri,
  } = data.data

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
              <InformationList.Label>Minted Date</InformationList.Label>
              <InformationList.Value>
                {longDateFormatter(mint_timestamp)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Minted By</InformationList.Label>
              <InformationList.Value>
                <Link to={`/dashboard/wallet/${minter}`}>
                  {ethereumAddressFormatter(minter)}
                </Link>
              </InformationList.Value>
            </InformationList.Item>
            {mint_price >= 0 ? (
              <InformationList.Item>
                <InformationList.Label>Mint Price</InformationList.Label>
                <InformationList.Value>
                  {ethereumPriceFormatter(mint_price)}
                </InformationList.Value>
              </InformationList.Item>
            ) : null}
            <InformationList.Item>
              <InformationList.Label>Оwned Since</InformationList.Label>
              <InformationList.Value>
                {longDateFormatter(own_timestamp)}
              </InformationList.Value>
            </InformationList.Item>
            <InformationList.Item>
              <InformationList.Label>Owned By</InformationList.Label>
              <InformationList.Value>
                <Link to={`/dashboard/wallet/${owner}`}>
                  {ethereumAddressFormatter(owner)}
                </Link>
              </InformationList.Value>
            </InformationList.Item>
            {latest_trade_price && (
              <InformationList.Item>
                <InformationList.Label>Latest Sale Price</InformationList.Label>
                <InformationList.Value>
                  {ethereumPriceFormatter(latest_trade_price)}
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
                {attributes.map(
                  ({ attribute_name, attribute_value, percentage }, index) => (
                    <InformationList.Item key={index}>
                      <InformationList.Label className="capitalize">
                        {attribute_name}
                      </InformationList.Label>
                      <InformationList.Value className="capitalize">
                        {attribute_value} {percentage}
                      </InformationList.Value>
                    </InformationList.Item>
                  )
                )}
              </InformationList>
            </>
          ) : null}
        </div>
        <div className="md:flex-1">
          {content_type === 'text/html' ? (
            <NftHtmlContent content_uri={content_uri} />
          ) : (
            <NftImage nftscan_uri={nftscan_uri} image_uri={image_uri} />
          )}
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

  if (error || isHttpError(data.code)) return <ErrorMessage />

  const { logo_url, name, opensea_verified, description } = data.data

  return (
    <header className="relative mb-4">
      <title>{`${TITLE_PREFIX}${name} #${tokenId}`}</title>
      <div className="mb-2 flex flex-wrap gap-2">
        <img
          className="size-16 rounded-md object-cover"
          src={logo_url}
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
              {name} {opensea_verified && <VerifiedBadge isSmall />}
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

type NftHtmlContentProps = {
  content_uri: string
}

function NftHtmlContent({ content_uri }: NftHtmlContentProps) {
  return (
    <div className="aspect-1/1 w-full overflow-hidden rounded-3xl bg-neutral-700">
      <iframe src={content_uri} className="size-full" />
    </div>
  )
}

type NftImageProps = {
  nftscan_uri: string
  image_uri: string
}

function NftImage({ image_uri, nftscan_uri }: NftImageProps) {
  if (!nftscan_uri && !image_uri?.startsWith('http'))
    return (
      <div className="aspect-1/1">
        <NoNftImagePlaceholder />
      </div>
    )

  return (
    <div className="group aspect-1/1 w-full overflow-hidden rounded-3xl bg-neutral-700">
      <img
        className="size-full object-cover transition ease-in group-hover:transform-[scale(1.2)]"
        src={nftscan_uri || image_uri}
        alt=""
      />
    </div>
  )
}
