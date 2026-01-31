import { Stat } from '../../components/Stat'

export function HeaderStats() {
  return (
    <div className="flex items-center gap-6">
      <Stat icon="💰" value="$12,450" />
      <Stat icon="⚡" value="14.5 P/s" />
      <Stat icon="🥖" value="1.2M Baked" />
    </div>
  )
}
