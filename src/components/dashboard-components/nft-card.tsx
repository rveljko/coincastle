import { NftOverview } from '@utils/types'
import { Link } from 'react-router-dom'

type NftCardProps = {
  nft: NftOverview
}

export default function NftCard({
  nft: { nftscan_uri, image_uri, contract_name, token_id },
}: NftCardProps) {
  return (
    <article className="border-section-outline group relative h-full overflow-hidden rounded-xl border-1">
      <div className="aspect-1/1 w-full overflow-hidden rounded-b-xl bg-neutral-700">
        <img
          className="size-full object-cover transition ease-in group-hover:transform-[scale(1.2)]"
          src={nftscan_uri || image_uri}
          alt={`${contract_name} #${token_id}`}
          title={`${contract_name} #${token_id}`}
        />
      </div>
      <div className="p-2">
        <Link to="">
          <span className="absolute inset-0"></span>
          <h3 className="text-paragraph-font-size leading-paragraph-line-height break-all">
            {contract_name}
            <br />
            <span className="text-clickable font-semibold">#{token_id}</span>
          </h3>
        </Link>
      </div>
    </article>
  )
}
