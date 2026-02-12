import { useGameStore } from '@/store/gameStore'
import { INDUSTRY_LEVELS } from '@/store/actions/industryActions'

export function LevelDisplay() {
  const { ovenLevel } = useGameStore()
  const currentLevel = INDUSTRY_LEVELS[ovenLevel - 1]

  return (
    <div className="flex justify-center mb-6">
      <div className="bg-brownDark text-white px-6 py-2 rounded-full font-bold shadow-lg border-2 border-primary flex items-center gap-2">
        LEVEL {ovenLevel}: {currentLevel.name.toUpperCase()}
      </div>
    </div>
  )
}
