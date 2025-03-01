import { currencyFormatter } from '@utils/helpers/currency-formatter'
import { chartDateFormatter } from '@utils/helpers/date-formatter'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
} from 'recharts'

type ChartProps = {
  data: number[][]
}

export default function Chart({ data }: ChartProps) {
  const formattedData = data.map(([timestamp, price]) => ({
    timestamp,
    price,
  }))

  return (
    <ResponsiveContainer height="max-content" aspect={2 / 1}>
      <AreaChart data={formattedData}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(from var(--color-brand-500) h s l / 60%)"
            />
            <stop offset="95%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="timestamp"
          dy={8}
          tick={{ fill: 'var(--color-neutral-400)' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(timestamp: number) => chartDateFormatter(timestamp)}
          domain={['dataMin', 'dataMax']}
          type="number"
          interval="preserveStartEnd"
        />
        <Tooltip
          content={({
            active,
            payload,
            label,
          }: TooltipProps<number, string>) => {
            if (!active || !payload || !payload.length) return

            return (
              <div className="border-section-outline rounded-sm border-1 bg-(image:--modal-background) p-1">
                <p className="text-neutral-100">
                  {currencyFormatter(payload[0].value!)}
                </p>
                <p>{chartDateFormatter(label)}</p>
              </div>
            )
          }}
        />
        <Area
          dataKey="price"
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
