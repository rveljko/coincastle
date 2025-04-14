import Switcher from '@components/dashboard-components/ui/switcher'
import BentoCard from '@components/landing-page-components/ui/bento-card'
import ChartAreaLineIcon from '@icons/chart-area-line-icon'
import ChartLineIcon from '@icons/chart-line-icon'
import { ChartLabel } from '@utils/types'
import { useState } from 'react'
import { Area, AreaChart, Line, LineChart, ResponsiveContainer } from 'recharts'

type ChartData = {
  number: number
}

const data: ChartData[] = [
  { number: 1 },
  { number: 3 },
  { number: 5 },
  { number: 6 },
  { number: 4 },
  { number: 5 },
  { number: 7 },
  { number: 5 },
  { number: 6 },
  { number: 8 },
  { number: 9 },
  { number: 5 },
]

type ChartsFeatureBentoCardProps = {
  className?: string
}

export default function ChartsFeatureBentoCard({
  className,
}: ChartsFeatureBentoCardProps) {
  const [activeChart, setActiveChart] = useState<ChartLabel>('area')

  return (
    <BentoCard className={className}>
      <BentoCard.Body>
        <div className="relative isolate overflow-hidden rounded-t-lg">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <div className="border-clickable/30 mx-0.25 flex items-center justify-between border-b p-4">
            <h4 className="text-heading-5-font-size leading-heading-5-line-height">
              {activeChart === 'area' ? 'Area' : 'Line'} Chart
            </h4>
            <Switcher>
              <Switcher.Item
                isActive={activeChart === 'area'}
                onClick={() => setActiveChart('area')}
              >
                <ChartAreaLineIcon />
              </Switcher.Item>
              <Switcher.Item
                isActive={activeChart === 'line'}
                onClick={() => setActiveChart('line')}
              >
                <ChartLineIcon />
              </Switcher.Item>
            </Switcher>
          </div>
          <div className="aspect-[2.2/1] px-4 py-2">
            <Chart data={data} type={activeChart} />
          </div>
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Dynamic Charting Options</BentoCard.Heading>
        <BentoCard.Paragraph>
          Choose from various chart types to visualize your investments and make
          informed decisions
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}

type ChartProps = {
  data: ChartData[]
  type: ChartLabel
}

function Chart({ data, type }: ChartProps) {
  if (type === 'line')
    return (
      <ResponsiveContainer height="max-content" aspect={2.3 / 1}>
        <LineChart data={data}>
          <Line
            dataKey="number"
            type="linear"
            stroke="var(--color-brand-500)"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    )

  return (
    <ResponsiveContainer height="max-content" aspect={2.3 / 1}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(from var(--color-brand-500) h s l / 60%)"
            />
            <stop offset="95%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <Area
          dataKey="number"
          type="linear"
          stroke="var(--color-brand-500)"
          strokeWidth={4}
          fillOpacity={1}
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
