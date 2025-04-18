import AboutUsSection from '@sections/landing-page-sections/about-us-section'
import OurStorySection from '@sections/landing-page-sections/our-story-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function AboutUsPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}About Us`}</title>
      <AboutUsSection />
      <OurStorySection />
    </>
  )
}
