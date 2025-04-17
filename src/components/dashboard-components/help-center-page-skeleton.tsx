import Container from '@components/container'
import ContactUsSectionSkeleton from '@components/dashboard-components/contact-us-section-skeleton'
import FaqSectionSkeleton from '@components/dashboard-components/faq-section-skeleton'
import HelpCenterGuidesSectionSkeleton from '@components/dashboard-components/help-center-guides-section-skeleton'
import HelpCenterHeaderSkeleton from '@components/dashboard-components/help-center-header-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function HelpCenterPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Help Center`}</title>
      <Container className="flex max-w-(--small-container-width) flex-col gap-4 px-0 py-4">
        <HelpCenterHeaderSkeleton />
        <ContactUsSectionSkeleton />
        <HelpCenterGuidesSectionSkeleton />
        <FaqSectionSkeleton />
      </Container>
    </>
  )
}
