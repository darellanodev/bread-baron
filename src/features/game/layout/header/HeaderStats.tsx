import { Stat } from '../../components/Stat'
import { useGameStore } from '../../../../store/gameStore'

interface HeaderStatsProps {
  onEconomy: () => void
}

export function HeaderStats({ onEconomy }: HeaderStatsProps) {
  const { money, currentDay, currentYear, formatMoney } = useGameStore()

  return (
    <div className="flex items-center gap-6">
      <button onClick={onEconomy} className="cursor-pointer">
        <Stat icon="💰" value={formatMoney(money)} />
      </button>
      <Stat icon="📅" value={`Day ${currentDay}`} />
      <Stat icon="📆" value={`Year ${currentYear}`} />
      <Stat icon="⚡" value="14.5 P/s" />
      <Stat icon="🥖" value="1.2M Baked" />
    </div>
  )
}
