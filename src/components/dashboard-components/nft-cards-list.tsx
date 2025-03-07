import NftCard from '@components/dashboard-components/nft-card'
import { NftOverview } from '@utils/types'
import { cn } from '@utils/utils'

type NftCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  nftCards: NftOverview[]
}

export default function NftCardsList({
  nftCards,
  className,
  ...props
}: NftCardsListProps) {
  return (
    <ul
      className={cn(
        'grid grid-cols-[repeat(auto-fit,_minmax(min(calc(var(--spacing)_*_70.25),_100%),_1fr))] gap-4.5',
        className
      )}
      {...props}
    >
      {nftCards.map((nftCard) => (
        <li key={nftCard.token_id}>
          <NftCard nft={nftCard} />
        </li>
      ))}
    </ul>
  )
}
