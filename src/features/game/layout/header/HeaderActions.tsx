import { SettingsMenu, RoundedButton } from '@/components/ui'
import { useGameStore } from '@/store/gameStore'

export function HeaderActions() {
  const { isPaused, togglePause } = useGameStore()

  return (
    <div className="flex gap-2">
      <RoundedButton
        onClick={togglePause}
        className="min-w-[84px] h-10 bg-primary text-textLight active:scale-95 rounded-full flex items-center justify-center gap-2"
      >
        <span className="text-sm">{isPaused ? '▶️' : '⏸️'}</span>
        <span>{isPaused ? 'Resume game' : 'Pause game'}</span>
      </RoundedButton>
      <SettingsMenu />
    </div>
  )
}
