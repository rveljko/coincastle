import BentoCard from '@components/landing-page-components/ui/bento-card'
import Button from '@components/ui/button'
import SparklesIcon from '@icons/sparkles-icon'
import { useState } from 'react'

const helpOfferings = [
  'Contact Via Form',
  'Contact Via Social Medias',
  'Guides',
  'FAQ',
]

export default function HelpCenterFeatureBentoCard() {
  const [helpOfferingIndex, setHelpOfferingIndex] = useState(0)

  return (
    <BentoCard>
      <BentoCard.Body>
        <div className="relative isolate overflow-hidden rounded-t-lg">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <div className="border-clickable/30 mx-0.25 flex flex-wrap items-center justify-between gap-2 border-b p-4">
            <h4 className="text-heading-5-font-size leading-heading-5-line-height truncate">
              Help Center
            </h4>
            <Button
              variant="tertiary"
              size="small"
              leftIcon={<SparklesIcon />}
              onClick={() =>
                setHelpOfferingIndex((prevIndex) =>
                  prevIndex >= helpOfferings.length - 1
                    ? (prevIndex = 0)
                    : prevIndex + 1
                )
              }
            >
              See More
            </Button>
          </div>
          <div className="px-4 py-6">
            <div className="text-clickable flex flex-col items-center justify-center gap-1">
              <p>We Offer:</p>
              <h5 className="text-heading-6-font-size leading-heading-6-line-height text-center font-normal">
                {helpOfferings[helpOfferingIndex]}
              </h5>
            </div>
          </div>
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Your Go-To Place for Support</BentoCard.Heading>
        <BentoCard.Paragraph>
          Access a comprehensive help center filled with FAQs, social media
          links, and resources to enhance your experience
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
