import { ProgressBar } from '../../../components/ui/ProgressBar'

interface OrderCardProps {
  difficulty: string
  difficultyColor: string
  title: string
  price: number
  progress?: number
  maxProgress?: number
  isInactive?: boolean
  onPrioritize?: () => void
}

export function OrderCard({
  difficulty,
  difficultyColor,
  title,
  price,
  progress,
  maxProgress = 10,
  isInactive = false,
  onPrioritize,
}: OrderCardProps) {
  return (
    <div
      className={`dough-card rounded-xl bg-white dark:bg-cardDark p-4 flex flex-col gap-3 ${isInactive ? 'opacity-60' : ''}`}
    >
      <div className="flex justify-between items-start">
        <div>
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
          <button
            onClick={onPrioritize}
            className="flex items-center justify-center gap-2 w-full rounded-full h-9 bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
          >
            ⭐ Prioritize
          </button>
        </>
      ) : (
        <button className="w-full rounded-full h-9 bg-bgLight dark:bg-deepDark text-textSecondary font-bold text-sm cursor-not-allowed">
          Waiting for Dough...
        </button>
      )}
    </div>
  )
}
