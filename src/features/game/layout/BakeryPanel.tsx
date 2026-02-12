import {
  LevelDisplay,
  BakeryOven,
  BakingStatus,
} from '@/features/game/layout/bakery'
import { useGameStore } from '@/store/gameStore'
import { INDUSTRY_LEVELS } from '@/store/actions/industryActions'
import { Button } from '@/components/ui/Button'

interface BakeryPanelProps {
  onOpenIndustry: () => void
}

export function BakeryPanel({ onOpenIndustry }: BakeryPanelProps) {
  const { ovenLevel, money } = useGameStore()
  const isMaxLevel = ovenLevel >= 5
  const nextLevel = isMaxLevel ? null : INDUSTRY_LEVELS[ovenLevel]
  const canAfford = nextLevel ? money >= nextLevel.upgradePrice : false

  return (
    <section className="w-1/2 flex flex-col bg-bgCream dark:bg-bgDark p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center text-[30rem]">
        🍪
      </div>
      <div className="z-10 flex flex-col h-full">
        <LevelDisplay />
        <div className="flex justify-center mb-4">
          <Button
            onClick={onOpenIndustry}
            disabled={isMaxLevel || !canAfford}
            variant={isMaxLevel || !canAfford ? 'ghost' : 'primary'}
            size="sm"
            icon="🏭"
            className="rounded-full"
          >
            {isMaxLevel
              ? 'MAX LEVEL REACHED'
              : `Upgrade Industry ($${nextLevel!.upgradePrice.toLocaleString()})`}
          </Button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <BakeryOven />
          <BakingStatus />
        </div>
      </div>
    </section>
  )
}
