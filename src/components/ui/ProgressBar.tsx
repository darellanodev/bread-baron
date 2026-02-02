interface ProgressBarProps {
  value: number
  max?: number
  showPercentage?: boolean
  showFraction?: boolean
  variant?: 'default' | 'gradient'
  className?: string
}

export function ProgressBar({
  value,
  max = 100,
  showPercentage = false,
  showFraction = false,
  variant = 'default',
  className = '',
}: ProgressBarProps) {
  const percentage = max > 0 ? (value / max) * 100 : 0

  const fillClasses =
    variant === 'gradient'
      ? 'bg-gradient-to-r from-primary to-orange-400 rounded-full shadow-[0_0_15px_rgba(236,160,19,0.5)]'
      : 'bg-primary'

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(showPercentage || showFraction) && (
        <div className="flex justify-between text-xs font-bold">
          {showFraction && <span>Progress</span>}
          <span>
            {showFraction && `${value}/${max}`}
            {showPercentage && `${Math.round(percentage)}%`}
          </span>
        </div>
      )}
      <div className="w-full h-3 bg-inputLight dark:bg-deepDark rounded-full overflow-hidden">
        <div
          className={`h-3 ${fillClasses} rounded-full transition-all duration-300`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  )
}
