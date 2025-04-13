import BentoCard from '@components/landing-page-components/ui/bento-card'
import BoltIcon from '@icons/bolt-icon'

type OptimizationFeatureBentoCardProps = {
  className?: string
}

export default function OptimizationFeatureBentoCard({
  className,
}: OptimizationFeatureBentoCardProps) {
  return (
    <BentoCard className={className}>
      <BentoCard.Body>
        <div className="flex items-center justify-center">
          <BoltIcon className="text-clickable size-auto flex-1/4 mask-linear-from-transparent mask-linear-to-black" />
          <BoltIcon className="text-clickable size-auto flex-2/4 mask-linear-from-transparent mask-linear-to-black" />
          <BoltIcon className="text-clickable size-auto flex-1/4 mask-linear-from-transparent mask-linear-to-black" />
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Optimized for Performance</BentoCard.Heading>
        <BentoCard.Paragraph>
          Enjoy a seamless experience with our platform, designed to operate
          smoothly without any lags
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
