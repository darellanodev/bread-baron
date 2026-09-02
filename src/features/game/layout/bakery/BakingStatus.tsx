import { ProgressBar } from '@/components/ui/ProgressBar'
import { useGameStore } from '@/store/gameStore'

interface BakingStatusProps {
  compact?: boolean
}

export function BakingStatus({ compact = false }: BakingStatusProps) {
  const { bakingProgress } = useGameStore()

  if (compact) {
    return (
      <div className="w-full flex flex-col gap-1">
        <span className="text-xs font-bold text-brownDark dark:text-primary truncate">
          Baking Sourdough… {bakingProgress}%
        </span>
        <ProgressBar
          value={bakingProgress}
          max={100}
          variant="gradient"
          showPercentage={false}
          showFraction={false}
        />
      </div>
    )
  }

  return (
    <div className="w-full max-w-md flex flex-col gap-3">
      <div className="flex justify-between items-end px-2">
        <span className="text-xl font-extrabold text-brownDark dark:text-primary">
          Baking Sourdough…
        </span>
        <span className="font-bold">{bakingProgress}%</span>
      </div>
      <ProgressBar
        value={bakingProgress}
        max={100}
        variant="gradient"
        showPercentage={false}
        showFraction={false}
      />
    </div>
  )
}
