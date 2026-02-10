import { Stat } from '../../components/Stat'
import { useGameStore } from '../../../../store/gameStore'

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

export function HeaderStats({ onEconomy }: HeaderStatsProps) {
  const { money, currentDay, currentYear, formatMoney } = useGameStore()

  const formattedDate = formatDate(currentDay, currentYear)

  return (
    <div className="flex items-center gap-6">
      <button onClick={onEconomy} className="cursor-pointer">
        <Stat icon="💰" value={formatMoney(money)} />
      </button>
      <Stat icon="📅" value={formattedDate} />
      <Stat icon="⚡" value="14.5 P/s" />
      <Stat icon="🥖" value="1.2M Baked" />
    </div>
  )
}
