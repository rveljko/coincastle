import PreferenceCard from '@components/dashboard-components/preference-card'
import { useChart } from '@services/contexts/chart-context'
import { Chart } from '@utils/types'

type ChartCardProps = {
  chart: Chart
}

export default function ChartCard({
  chart: { name, label, imageUrl },
}: ChartCardProps) {
  const { newChart, setNewChart } = useChart()

  return (
    <button className="cursor-pointer" onClick={() => setNewChart(label)}>
      <PreferenceCard
        name={name}
        imageUrl={imageUrl}
        isActive={newChart === label}
      />
    </button>
  )
}
