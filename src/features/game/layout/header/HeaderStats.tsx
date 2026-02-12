import { Stat } from '@/features/game/components/Stat'
import { useGameStore } from '@/store/gameStore'

interface HeaderStatsProps {
  onEconomy: () => void
}

// Get current year from system
const getCurrentYear = (): number => new Date().getFullYear()

// Check if a year is leap year
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

// Format date with realistic months (always using short month names)
const formatDate = (day: number, year: number): string => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const actualYear = getCurrentYear() + year - 1

  // Adjust February for leap years
  if (isLeapYear(actualYear)) {
    daysInMonth[1] = 29
  }

  let remainingDay = day
  let monthIndex = 0

  // Find the corresponding month
  for (let i = 0; i < daysInMonth.length; i++) {
    if (remainingDay <= daysInMonth[i]) {
      monthIndex = i
      break
    }
    remainingDay -= daysInMonth[i]
  }

  const monthName = months[monthIndex]

  return `${remainingDay} ${monthName} ${actualYear}`
}

// Format large numbers (e.g., 1200000 -> 1.2M)
const formatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`
  }
  return num.toString()
}

export function HeaderStats({ onEconomy }: HeaderStatsProps) {
  const { money, currentDay, currentYear, formatMoney, totalProductsCreated } =
    useGameStore()

  const formattedDate = formatDate(currentDay, currentYear)

  return (
    <div className="flex items-center gap-6">
      <button onClick={onEconomy} className="cursor-pointer">
        <Stat icon="💰" value={formatMoney(money)} />
      </button>
      <Stat icon="📅" value={formattedDate} />
      <Stat icon="🥖" value={`${formatNumber(totalProductsCreated)} Baked`} />
    </div>
  )
}
