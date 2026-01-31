interface OrderCardProps {
  difficulty: string
  difficultyColor?: string
  title: string
  price: number
  progress?: number
  maxProgress?: number
  isInactive?: boolean
  onPrioritize?: () => void
}

export function OrderCard({
  difficulty,
  difficultyColor = '',
  title,
  price,
  progress,
  maxProgress = 10,
  isInactive = false,
  onPrioritize,
}: OrderCardProps) {
  return (
    <div
      className={`p-4 rounded-xl bg-card-light dark:bg-card-dark ${isInactive ? 'opacity-40' : ''}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className={`font-bold ${difficultyColor}`}>{difficulty}</div>
        <div className="text-sm font-black flex items-center gap-2">
          <span>${price}</span>
          {onPrioritize && (
            <button
              onClick={onPrioritize}
              aria-label="Prioritize"
              className="text-xs px-2 py-1 rounded bg-yellow-300 dark:bg-yellow-500 font-bold"
            >
              P
            </button>
          )}
        </div>
      </div>
      <div className="text-lg font-bold">{title}</div>
      {progress !== undefined && maxProgress !== undefined && (
        <div className="mt-2 text-sm text-textSecondary">
          {progress}/{maxProgress}
        </div>
      )}
    </div>
  )
}
