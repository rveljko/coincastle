import GuideCardsList from '@components/dashboard-components/guide-cards-list'
import { guides } from '@data/guides'

export default function GuidesSection() {
  return (
    <section>
      <h1 className="mb-2">Guides</h1>
      <p className="mb-4">Your favorite place when you are confused</p>
      <GuideCardsList guides={guides} />
    </section>
  )
}
