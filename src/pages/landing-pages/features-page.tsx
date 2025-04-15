import AllFeaturesSection from '@sections/landing-page-sections/all-features-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function FeaturesPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Features`}</title>
      <AllFeaturesSection />
    </>
  )
}
