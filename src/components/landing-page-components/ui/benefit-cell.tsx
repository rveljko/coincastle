import { Benefit } from '@utils/types'

type BenefitCellProps = {
  benefit: Benefit
}

export default function BenefitCell({
  benefit: { title, icon: Icon, description },
}: BenefitCellProps) {
  return (
    <article>
      <div className="mb-2 flex items-center gap-1">
        <span className="[&>svg]:text-neutral-100">
          <Icon />
        </span>
        <h3 className="text-heading-4-font-size leading-heading-4-line-height">
          {title}
        </h3>
      </div>
      <p className="max-w-82">{description}</p>
    </article>
  )
}
