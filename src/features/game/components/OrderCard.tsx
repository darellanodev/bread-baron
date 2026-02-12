import { ProgressBar } from '@/components/ui/ProgressBar'
import { Button } from '@/components/ui/Button'

interface OrderCardProps {
  customerName?: string
  difficulty: string
  difficultyColor: string
  title: string
  price: number
  progress?: number
  maxProgress?: number
  isInactive?: boolean
  isPrioritized?: boolean
  onPrioritize?: () => void
}

export function OrderCard({
  customerName,
  difficulty,
  difficultyColor,
  title,
  price,
  progress,
  maxProgress = 10,
  isInactive = false,
  isPrioritized = false,
  onPrioritize,
}: OrderCardProps) {
  return (
    <div
      className={`dough-card rounded-xl bg-white dark:bg-cardDark p-4 flex flex-col gap-3 ${isInactive ? 'opacity-60' : ''}`}
    >
      <div className="flex justify-between items-start">
        <div>
          {customerName && (
            <p className="text-xs font-bold text-textSecondary uppercase tracking-widest">
              From: {customerName}
            </p>
          )}
          <p
            className={`${difficultyColor} text-xs font-bold uppercase tracking-widest`}
          >
            Difficulty: {difficulty}
          </p>
          <h3 className="text-lg font-bold leading-tight">{title}</h3>
        </div>
        <span className="text-green-500 font-bold">${price}</span>
      </div>

      {!isInactive ? (
        <>
          <ProgressBar
            value={progress || 0}
            max={maxProgress}
            showFraction={true}
          />
          <Button
            onClick={onPrioritize}
            fullWidth
            size="sm"
            variant={isPrioritized ? 'primary' : 'secondary'}
            icon="⭐"
            className="rounded-full"
          >
            {isPrioritized ? 'Prioritized' : 'Prioritize'}
          </Button>
        </>
      ) : (
        <Button
          fullWidth
          size="sm"
          variant="ghost"
          disabled
          className="rounded-full"
        >
          Waiting for Dough...
        </Button>
      )}
    </div>
  )
}
