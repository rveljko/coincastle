import { ChartLabel } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type ChartContextProviderProps = {
  children: React.ReactNode
}

type ChartContextType = {
  chart: ChartLabel
  newChart: ChartLabel
  setChart: React.Dispatch<React.SetStateAction<ChartLabel>>
  setNewChart: React.Dispatch<React.SetStateAction<ChartLabel>>
}

export const ChartContext = createContext<ChartContextType | null>(null)

function getInitialChart(): ChartLabel {
  const chart = localStorage.getItem('chart')
  return chart ? JSON.parse(chart) : 'area'
}

export default function ChartContextProvider({
  children,
}: ChartContextProviderProps) {
  const [chart, setChart] = useState(getInitialChart)
  const [newChart, setNewChart] = useState<ChartLabel>(chart)

  useEffect(() => {
    localStorage.setItem('chart', JSON.stringify(chart))
  }, [chart])

  return (
    <ChartContext.Provider value={{ chart, newChart, setChart, setNewChart }}>
      {children}
    </ChartContext.Provider>
  )
}

export const useChart = () => {
  const context = useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be within a ChartContextProvider')
  }

  return context
}
