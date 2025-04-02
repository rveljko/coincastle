import { ChartInformationPeriod } from '@utils/types'
import { useSearchParams } from 'react-router-dom'

export default function useChartTimeFiltering() {
  const [searchParams, setSearchParams] = useSearchParams()
  const period = (searchParams.get('period') || '1') as ChartInformationPeriod

  function setPeriod(days: ChartInformationPeriod) {
    setSearchParams((prevParams) => {
      prevParams.set('period', days)
      return prevParams
    })
  }

  return {
    period,
    setPeriod,
  }
}
