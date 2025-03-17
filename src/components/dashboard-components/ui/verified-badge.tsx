import RosetteDiscountCheckIcon from '@icons/rosette-discount-check-icon'

type VerifiedBadgeProps = {
  isSmall?: boolean
}

export default function VerifiedBadge({ isSmall }: VerifiedBadgeProps) {
  return (
    <span title="Verified">
      <RosetteDiscountCheckIcon
        className={`text-brand-500 ${isSmall ? 'size-4' : ''}`}
      />
    </span>
  )
}
