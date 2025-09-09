import NftCard from '@components/dashboard-components/nft-card'
import NftCardSkeleton from '@components/dashboard-components/nft-card-skeleton'
import { NftOverview } from '@utils/types'
import { cn } from '@utils/utils'

type NftCardsListProps = React.ComponentPropsWithoutRef<'ul'> & {
  nftCards: NftOverview[]
  isLoadingSkeletons?: boolean
}

export default function NftCardsList({
  nftCards,
  isLoadingSkeletons,
  className,
  ...props
}: NftCardsListProps) {
  return (
    <>
      {nftCards.length ? (
        <ul
          className={cn(
            'grid grid-cols-[repeat(auto-fit,_minmax(min(var(--nft-card-width),_100%),_1fr))] gap-4',
            className
          )}
          {...props}
        >
          {nftCards.map((nftCard) => (
            <li key={`${nftCard.token_address}/${nftCard.token_id}`}>
              <NftCard nft={nftCard} />
            </li>
          ))}
          {isLoadingSkeletons &&
            Array.from({ length: 20 }, (_, index) => index).map((index) => (
              <li key={index}>
                <NftCardSkeleton />
              </li>
            ))}
        </ul>
      ) : null}
    </>
  )
}
