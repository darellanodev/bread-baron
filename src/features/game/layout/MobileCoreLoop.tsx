import { LevelDisplay } from '@/features/game/layout/bakery/LevelDisplay'
import { BakeryOven } from '@/features/game/layout/bakery/BakeryOven'
import { BakingStatus } from '@/features/game/layout/bakery/BakingStatus'
import { WorkersButton } from '@/features/game/layout/workers/WorkersButton'
import { useGameStore } from '@/store/gameStore'
import { INDUSTRY_LEVELS } from '@/store/actions/industryActions'

interface MobileCoreLoopProps {
  onOpenIndustry: () => void
}

export function MobileCoreLoop({ onOpenIndustry }: MobileCoreLoopProps) {
  const { ovenLevel, money } = useGameStore()
  const isMaxLevel = ovenLevel >= 5
  const nextLevel = isMaxLevel ? null : INDUSTRY_LEVELS[ovenLevel]
  const canAfford = nextLevel ? money >= nextLevel.upgradePrice : false

  return (
    <div className="flex-none bg-bgCream dark:bg-bgDark px-3 pt-3 pb-2 flex flex-col gap-2 border-b border-bgLight dark:border-borderDark">
      <div className="flex items-center justify-center gap-2">
        <LevelDisplay />
        <button
          type="button"
          onClick={onOpenIndustry}
          disabled={isMaxLevel || !canAfford}
          className={`flex-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-colors ${
            isMaxLevel || !canAfford
              ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/80 cursor-pointer'
          }`}
        >
          🏭 Upgrade
        </button>
      </div>
      <div className="flex items-center gap-3">
        <BakeryOven compact />
        <div className="flex-1 min-w-0">
          <BakingStatus compact />
        </div>
      </div>
      <WorkersButton compact />
    </div>
  )
}
