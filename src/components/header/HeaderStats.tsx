import { Stat } from '@/features/game/components/Stat'
import { useGameStore } from '@/store/gameStore'

interface HeaderStatsProps {
  onEconomy: () => void
}

const getCurrentYear = (): number => new Date().getFullYear()

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

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

  if (isLeapYear(actualYear)) {
    daysInMonth[1] = 29
  }

  let remainingDay = day
  let monthIndex = 0

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
