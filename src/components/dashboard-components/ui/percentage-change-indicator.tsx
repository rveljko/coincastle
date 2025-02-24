import TrendingDownIcon from '@icons/trending-down-icon'
import TrendingUpIcon from '@icons/trending-up-icon'
import { percentageFormatter } from '@utils/helpers/percentage-formatters'

type PercentageChangeIndicator = {
  percentage: number
}

export default function PercentageChangeIndicator({
  percentage,
}: PercentageChangeIndicator) {
  const isNegative = percentageFormatter(percentage).charAt(0) === '-'

  return (
    <span
      className={`flex flex-row items-center gap-1 ${isNegative ? 'text-danger-500' : 'text-success-500'}`}
    >
      <span>
        {isNegative ? (
          <TrendingDownIcon className="size-4" />
        ) : (
          <TrendingUpIcon className="size-4" />
        )}
      </span>
      {percentageFormatter(percentage)}
    </span>
  )
}
