import NftCard from '@components/dashboard-components/nft-card'
import { NftOverview } from '@utils/types'
import { cn } from '@utils/utils'

type NftCardsCarouselProps = React.ComponentPropsWithoutRef<'ul'> & {
  nftCards: NftOverview[]
}

export default function NftCardsCarousel({
  nftCards,
  className,
  ...props
}: NftCardsCarouselProps) {
  return (
    <div className={cn('w-0 min-w-full overflow-x-auto', className)}>
      <ul className="mb-2 flex gap-4" {...props}>
        {nftCards.map((nftCard) => (
          <li key={`${nftCard.contract_address}/${nftCard.token_id}`}>
            <NftCard nft={nftCard} className="w-(--nft-card-width)" />
          </li>
        ))}
      </ul>
    </div>
  )
}
