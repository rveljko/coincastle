import GuideCardSkeleton from '@components/dashboard-components/guide-card-skeleton'

type GuideCardsListSkeletonProps = {
  numberOfGuides: number
}

export default function GuideCardsListSkeleton({
  numberOfGuides,
}: GuideCardsListSkeletonProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--guide-card-width),_100%),_1fr))] gap-4">
      {Array.from({ length: numberOfGuides }, (_, index) => index).map(
        (index) => (
          <li key={index}>
            <GuideCardSkeleton />
          </li>
        )
      )}
    </ul>
  )
}
