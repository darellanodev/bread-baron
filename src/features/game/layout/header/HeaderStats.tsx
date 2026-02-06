import { Stat } from '../../components/Stat'
import { useGameStore } from '../../../../store/gameStore'

export function HeaderStats() {
  const { money, currentDay, formatMoney } = useGameStore()

  return (
    <div className="flex items-center gap-6">
      <Stat icon="💰" value={formatMoney(money)} />
      <Stat icon="📅" value={`Day ${currentDay}`} />
      <Stat icon="⚡" value="14.5 P/s" />
      <Stat icon="🥖" value="1.2M Baked" />
    </div>
  )
}
