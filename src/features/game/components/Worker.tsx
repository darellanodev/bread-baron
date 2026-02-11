interface WorkerProps {
  emoji: string
  name: string
  level?: number
  productivity?: number
  upgradePrice?: number
  onUpgrade?: () => void
  showUpgradeButton?: boolean
  showFrame?: boolean
  isWorking?: boolean
  daysRemaining?: number
}

export function Worker({
  emoji,
  name,
  level,
  productivity,
  upgradePrice,
  onUpgrade,
  showUpgradeButton = true,
  showFrame = true,
  isWorking = false,
  daysRemaining,
}: WorkerProps) {
  return (
    <div
      className={`flex-none w-64 p-3 flex gap-4 items-center transition-all duration-200 ${showFrame ? `dough-card bg-bgLight dark:bg-cardDark rounded-xl` : ''}`}
    >
      <div
        className={`size-14 rounded-full flex items-center justify-center shrink-0 text-3xl transition-colors ${isWorking ? 'bg-primary/40' : 'bg-primary/20'}`}
      >
        {emoji}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm text-textLight dark:text-textDark">
            {name}
          </h4>
          {level && (
            <span className="bg-primary text-textLight text-[10px] px-2 py-0.5 rounded-full font-black">
              LVL {level}
            </span>
          )}
        </div>
        {productivity && (
          <p className="text-xs text-textSecondary dark:text-textDarkSecondary">
            +{productivity} products/sec
          </p>
        )}
        {daysRemaining !== undefined && (
          <p
            className={`text-xs font-bold ${daysRemaining <= 5 ? 'text-red-500' : 'text-textSecondary dark:text-textDarkSecondary'}`}
          >
            {daysRemaining} days left
          </p>
        )}
        {showUpgradeButton && upgradePrice && (
          <button
            onClick={onUpgrade}
            className="mt-1 h-7 bg-white dark:bg-deepDark rounded-full text-[10px] font-bold text-textLight dark:text-textDark border border-primary/20 hover:bg-primary/10 transition-colors"
          >
            Upgrade (${upgradePrice})
          </button>
        )}
      </div>
    </div>
  )
}
