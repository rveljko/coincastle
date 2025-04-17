import GuideCardsListSkeleton from '@components/dashboard-components/guide-cards-list-skeleton'
import { guides } from '@data/guides'

export default function GuidesSectionSkeleton() {
  return (
    <section>
      <div className="bg-clickable/10 mb-2 h-10.5 w-22 animate-pulse rounded-sm"></div>
      <div className="bg-clickable/10 mb-4 h-5 w-44 animate-pulse rounded-sm"></div>
      <GuideCardsListSkeleton numberOfGuides={guides.length} />
    </section>
  )
}
