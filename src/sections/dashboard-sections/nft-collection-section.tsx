import NftCardsList from '@components/dashboard-components/nft-cards-list'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import InformationList from '@components/dashboard-components/ui/information-list'
import useGetNftCollectionInformation from '@hooks/queries/use-get-nft-collection-information'
import useGetNftCollectionNfts from '@hooks/queries/use-get-nft-collection-nfts'
import Section from '@sections/dashboard-sections/section'
import { TITLE_PREFIX } from '@utils/constants'
import { ethereumPriceFormatter } from '@utils/helpers/currency-formatter'
import { ethereumAddressFormatter } from '@utils/helpers/ethereum-address-formatter'
import { numbersWithCommasFormatter } from '@utils/helpers/numbers-formatter'
import { Link } from 'react-router-dom'

type NftCollectionSectionProps = {
  contractAddress: string
}

export default function NftCollectionSection({
  contractAddress,
}: NftCollectionSectionProps) {
  const { data, isPending, error } =
    useGetNftCollectionInformation(contractAddress)

  if (isPending) return <div>loading...</div>

  if (error)
    return (
      <Section>
        <ErrorMessage />
      </Section>
    )

  const {
    contract_address,
    description,
    floor_price,
    items_total,
    logo_url,
    name,
    owner,
    owners_total,
  } = data.data

  return (
    <Section>
      <title>{`${TITLE_PREFIX}${name}`}</title>
      <div className="mb-4 w-full lg:max-w-[50%]">
        <header>
          <div className="mb-2 flex flex-wrap gap-2">
            <img
              className="size-32 rounded-md object-cover"
              src={logo_url}
              alt={name}
              title={name}
            />
            <div>
              <h1 className="mb-1 break-all">{name}</h1>
              <p>
                Created by{' '}
                <Link to="/" title={owner}>
                  {ethereumAddressFormatter(owner)}
                </Link>
              </p>
            </div>
          </div>
          <p
            style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}
            className="mb-4 line-clamp-2 text-ellipsis"
          >
            {description}
          </p>
        </header>
        <InformationList>
          <InformationList.Item>
            <InformationList.Label>Floor Price</InformationList.Label>
            <InformationList.Value>
              {ethereumPriceFormatter(floor_price)}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Owners</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(owners_total)}
            </InformationList.Value>
          </InformationList.Item>
          <InformationList.Item>
            <InformationList.Label>Items</InformationList.Label>
            <InformationList.Value>
              {numbersWithCommasFormatter(items_total)}
            </InformationList.Value>
          </InformationList.Item>
        </InformationList>
      </div>
      <NftCollectionNfts contractAddress={contract_address} />
    </Section>
  )
}

type NftCollectionNftsProps = {
  contractAddress: string
}

function NftCollectionNfts({ contractAddress }: NftCollectionNftsProps) {
  const { data, isPending, error } = useGetNftCollectionNfts(contractAddress)

  if (isPending) return <div>loading...</div>

  if (error) return <ErrorMessage />

  return <NftCardsList nftCards={data.data.content} />
}
