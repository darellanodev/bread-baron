import { Stat } from '../../components/Stat'

interface HeaderStatsProps {
  onEconomy: () => void
}

export function HeaderStats({ onEconomy }: HeaderStatsProps) {
  return (
    <div className="flex items-center gap-6">
      <button onClick={onEconomy} className="cursor-pointer">
        <Stat icon="💰" value="$12,450" />
      </button>
      <Stat icon="⚡" value="14.5 P/s" />
      <Stat icon="🥖" value="1.2M Baked" />
    </div>
  )
}
