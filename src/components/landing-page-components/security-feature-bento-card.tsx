import BentoCard from '@components/landing-page-components/ui/bento-card'
import ShieldLockIcon from '@icons/shield-lock-icon'

export default function SecurityFeatureBentoCard() {
  return (
    <BentoCard>
      <BentoCard.Body>
        <div className="flex items-center justify-center">
          <ShieldLockIcon className="text-clickable size-auto flex-1/4 mask-linear-from-transparent mask-linear-to-black" />
          <ShieldLockIcon className="text-clickable size-auto flex-2/4 mask-linear-from-transparent mask-linear-to-black" />
          <ShieldLockIcon className="text-clickable size-auto flex-1/4 mask-linear-from-transparent mask-linear-to-black" />
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Your Security is Our Priority</BentoCard.Heading>
        <BentoCard.Paragraph>
          Enjoy peace of mind with robust security measures protecting your
          investments at all times.
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
