import ChartCard from '@components/dashboard-components/chart-card'
import { Chart } from '@utils/types'
import { cn } from '@utils/utils'

type ChartCardsListProps = {
  charts: Chart[]
  className?: string
}

export default function ChartCardsList({
  charts,
  className,
}: ChartCardsListProps) {
  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {charts.map((chart) => (
        <li key={chart.id}>
          <ChartCard chart={chart} />
        </li>
      ))}
    </ul>
  )
}
