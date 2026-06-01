import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const formatMoney = (value: number): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value}`
}

interface EconomyChartInnerProps {
  chartData: Array<{ day: number; money: number }>
  yDomain: [number, number]
  storeFormatMoney: (value: number) => string
}

export function EconomyChartInner({
  chartData,
  yDomain,
  storeFormatMoney,
}: EconomyChartInnerProps) {
  return (
    <div className="w-full" style={{ height: 280 }}>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="currentColor"
            strokeOpacity={0.1}
            className="text-borderLight dark:text-borderDark"
          />
          <XAxis
            dataKey="day"
            stroke="currentColor"
            strokeOpacity={0.5}
            tick={{
              fill: 'currentColor',
              fontSize: 11,
              fontWeight: 'bold',
              className: 'text-textSecondary dark:text-textDarkSecondary',
            }}
            tickFormatter={(value) => `D${value}`}
          />
          <YAxis
            domain={yDomain}
            stroke="currentColor"
            strokeOpacity={0.5}
            tick={{
              fill: 'currentColor',
              fontSize: 11,
              fontWeight: 'bold',
              className: 'text-textSecondary dark:text-textDarkSecondary',
            }}
            tickFormatter={formatMoney}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tw-colors-bgLight)',
              border: '1px solid var(--tw-colors-borderLight)',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
            labelStyle={{
              color: 'var(--tw-colors-textLight)',
              fontWeight: 'bold',
              marginBottom: '4px',
            }}
            itemStyle={{
              color: 'var(--tw-colors-primary)',
              fontWeight: 'bold',
            }}
            formatter={(value: number | undefined) =>
              value !== undefined
                ? [storeFormatMoney(value), 'Money']
                : ['', 'Money']
            }
            labelFormatter={(label) => `Day ${label}`}
          />
          <Line
            type="monotone"
            dataKey="money"
            stroke="#eca013"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              fill: '#eca013',
              stroke: '#fff',
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
