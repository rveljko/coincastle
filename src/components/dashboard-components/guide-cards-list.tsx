import GuideCard from '@components/dashboard-components/guide-card'
import { Guide } from '@utils/types'

type GuideCardsListProps = {
  guides: Guide[]
}

export default function GuideCardsList({ guides }: GuideCardsListProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(var(--guide-card-width),_100%),_1fr))] gap-4">
      {guides.map((guide) => (
        <li key={guide.id}>
          <GuideCard guide={guide} />
        </li>
      ))}
    </ul>
  )
}
