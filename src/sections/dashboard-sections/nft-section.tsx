import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import useGetNftCollectionInformation from '@hooks/queries/use-get-nft-collection-information'
import useGetSingleNft from '@hooks/queries/use-get-single-nft'
import NftSectionSkeleton, {
  NftCollectionInformationSkeleton,
} from '@sections/dashboard-sections/nft-section-skeleton'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import { longDateFormatter } from '@utils/helpers/date-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import { Link } from 'react-router-dom'

type NftSectionProps = {
  contractAddress: string
  tokenId: string
  className?: string
}

export default function NftSection({
  contractAddress,
  tokenId,
  className,
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
    mint_timestamp,
    minter,
    own_timestamp,
    owner,
    attributes,
    image_uri,
    nftscan_uri,
  } = data.data

  return (
    <Section className={className}>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:flex-1">
          <NftCollectionInformation
            contractAddress={contractAddress}
            tokenId={tokenId}
          />
          <h3 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
            Details
          </h3>
          <InformationList className="mb-4">
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
                      <InformationList.Label>
                        {attribute_name}
                      </InformationList.Label>
                      <InformationList.Value>
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
          <div className="group aspect-1/1 w-full overflow-hidden rounded-3xl bg-neutral-700">
            <img
              className="size-full object-cover transition ease-in group-hover:transform-[scale(1.2)]"
              src={nftscan_uri || image_uri}
              alt=""
            />
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

  const { logo_url, name, description } = data.data

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
            {name}
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
