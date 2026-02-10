import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useGameStore } from '../../../store/gameStore'

// Format money values (e.g., 45000 -> $45K)
const formatMoney = (value: number): string => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`
  }
  return `$${value}`
}

// Get last X days of data for better readability
const getLastDaysData = (
  data: Array<{ day: number; money: number }>,
  days: number = 30,
) => {
  return data.slice(-days)
}

// Calculate Y-axis domain based on data range
const calculateYDomain = (data: Array<{ money: number }>) => {
  if (data.length === 0) return [0, 50000]

  const values = data.map((d) => d.money)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min

  // Add 10% margin on both sides for better visualization
  const margin = range * 0.1 || 1000 // Minimum margin of $1000
  const domainMin = Math.max(0, min - margin) // Don't go below 0
  const domainMax = max + margin

  return [domainMin, domainMax]
}

export function EconomyChart() {
  const {
    dailyMoneyHistory,
    money,
    formatMoney: storeFormatMoney,
  } = useGameStore()

  // Get last 30 days of data
  const chartData = getLastDaysData(dailyMoneyHistory, 30)

  // Calculate Y-axis domain for better visualization
  const yDomain = calculateYDomain(chartData)

  // If no data, show empty state
  if (chartData.length === 0) {
    return (
      <div className="bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark rounded-xl p-6">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-baseline gap-2">
            <p className="text-textLight dark:text-textDark tracking-tight text-[32px] font-bold leading-tight truncate">
              {storeFormatMoney(money)}
            </p>
          </div>
        </div>
        <div className="w-full h-[280px] flex items-center justify-center">
          <p className="text-textSecondary dark:text-textDarkSecondary text-sm">
            No economic data available yet
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark rounded-xl p-6">
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-baseline gap-2">
          <p className="text-textLight dark:text-textDark tracking-tight text-[32px] font-bold leading-tight truncate">
            {storeFormatMoney(money)}
          </p>
        </div>
      </div>

      {/* Chart */}
      {/* Range indicator */}
      {chartData.length > 1 && (
        <div className="mb-3 flex items-center justify-between text-xs text-textSecondary dark:text-textDarkSecondary">
          <span>
            Range: {formatMoney(yDomain[0] as number)} -{' '}
            {formatMoney(yDomain[1] as number)}
          </span>
          <span>Focused view • Adjusted scale</span>
        </div>
      )}

      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
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
    </div>
  )
}
