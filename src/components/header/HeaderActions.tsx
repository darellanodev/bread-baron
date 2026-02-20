import { SettingsMenu } from './SettingsMenu'
import { Button } from '@/components/ui/Button'
import { useGameStore } from '@/store/gameStore'

export function HeaderActions() {
  const { isPaused, togglePause } = useGameStore()

  return (
    <div className="flex gap-2">
      <Button
        onClick={togglePause}
        size="sm"
        icon={isPaused ? '▶️' : '⏸️'}
        className="min-w-[84px] rounded-full"
      >
        {isPaused ? 'Resume game' : 'Pause game'}
      </Button>
      <SettingsMenu />
    </div>
  )
}
