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
  const progressPercentage =
    progress && maxProgress ? (progress / maxProgress) * 100 : 0

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
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span>Progress</span>
              <span>
                {progress}/{maxProgress}
              </span>
            </div>
            <div className="h-3 rounded-full bg-inputLight dark:bg-deepDark overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={onPrioritize}
            className="flex items-center justify-center gap-2 w-full rounded-full h-9 bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
          >
            ⭐ Prioritize
          </button>
        </>
      ) : (
        <button className="w-full rounded-full h-9 bg-bgLight dark:bg-deepDark text-[#897b61] font-bold text-sm cursor-not-allowed">
          Waiting for Dough...
        </button>
      )}
    </div>
  )
}
