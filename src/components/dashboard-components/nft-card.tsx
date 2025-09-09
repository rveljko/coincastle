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
    token_address,
    token_id,
    name,
    list_price: { listed, price },
    normalized_metadata,
    floor_price,
  },
  className,
  ...props
}: NftCardProps) {
  const image = normalized_metadata?.image

  return (
    <article
      className={cn(
        'border-section-outline group relative h-full overflow-hidden rounded-xl border-1',
        className
      )}
      {...props}
    >
      <div className="aspect-1/1 w-full overflow-hidden rounded-b-xl bg-neutral-700">
        {image ? (
          <img
            className="size-full object-cover transition ease-in group-hover:transform-[scale(1.2)]"
            src={
              image.startsWith('http')
                ? image
                : `https://ipfs.io/ipfs/${image.split('//')[1]}`
            }
            alt={`${token_address} #${token_id}`}
            title={`${token_address} #${token_id}`}
            loading="lazy"
          />
        ) : (
          <NoNftImagePlaceholder />
        )}
      </div>
      <div className="p-2">
        <div className="mb-2">
          <Link to={`/dashboard/collection/${token_address}/${token_id}`}>
            <span className="absolute inset-0"></span>
            <h3 className="text-paragraph-font-size leading-paragraph-line-height break-all">
              {name}
              <br />
              <span className="text-clickable font-semibold">#{token_id}</span>
            </h3>
          </Link>
        </div>
        <p className="text-neutral-100">
          {floor_price &&
            ethereumPriceFormatter(
              listed ? price.toString() : floor_price.toString()
            )}
        </p>
      </div>
    </article>
  )
}
