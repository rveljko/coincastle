import NoNftImagePlaceholder from '@components/dashboard-components/no-nft-image-placeholder'
import { ethereumPriceFormatter } from '@utils/helpers/currency-formatter'
import { NftOverview } from '@utils/types'
import { cn } from '@utils/utils'
import { Link } from 'react-router-dom'

type NftCardProps = React.ComponentPropsWithoutRef<'article'> & {
  nft: NftOverview
}

export default function NftCard({
  nft: {
    nftscan_uri,
    image_uri,
    contract_name,
    token_id,
    contract_address,
    latest_trade_price,
    mint_price,
  },
  className,
  ...props
}: NftCardProps) {
  return (
    <article
      className={cn(
        'border-section-outline group relative h-full overflow-hidden rounded-xl border-1',
        className
      )}
      {...props}
    >
      {nftscan_uri || image_uri?.startsWith('http') ? (
        <div className="aspect-1/1 w-full overflow-hidden rounded-b-xl bg-neutral-700">
          <img
            className="size-full object-cover transition ease-in group-hover:transform-[scale(1.2)]"
            src={nftscan_uri || image_uri}
            alt={`${contract_name} #${token_id}`}
            title={`${contract_name} #${token_id}`}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-1/1">
          <NoNftImagePlaceholder />
        </div>
      )}
      <div className="p-2">
        <div className="mb-2">
          <Link to={`/dashboard/collection/${contract_address}/${token_id}`}>
            <span className="absolute inset-0"></span>
            <h3 className="text-paragraph-font-size leading-paragraph-line-height break-all">
              {contract_name}
              <br />
              <span className="text-clickable font-semibold">#{token_id}</span>
            </h3>
          </Link>
        </div>
        <p className="text-neutral-100">
          {ethereumPriceFormatter(latest_trade_price ?? mint_price)}
        </p>
      </div>
    </article>
  )
}
