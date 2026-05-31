import { useGameStore } from '@/store/gameStore'
import { INDUSTRY_LEVELS } from '@/store/actions/industryActions'
import { Button } from '@/components/ui/Button'

const STAGE_EMOJIS = ['🏠', '🏪', '🏢', '🏭', '🌍']

const formatUpgradePrice = (price: number): string => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(0)}M`
  } else if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`
  }
  return `$${price}`
}

export function IndustryMap() {
  const { ovenLevel, money, upgradeOven } = useGameStore()
  const currentLevelIndex = ovenLevel - 1

  return (
    <div className="relative mb-16">
      {/* Connection Line */}
      <div className="absolute top-12 left-24 right-24 h-1 bg-borderLight dark:bg-borderDark rounded-full"></div>

      {/* Progress Line */}
      <div
        className="absolute top-12 left-24 h-1 bg-primary rounded-full transition-all duration-500"
        style={{ width: `${(currentLevelIndex / 4) * (100 - 12)}%` }}
      ></div>

      {/* Stages */}
      <div className="relative flex justify-between items-start px-16">
        {INDUSTRY_LEVELS.map((level, index) => {
          const isCompleted = index < currentLevelIndex
          const isCurrent = index === currentLevelIndex
          const isLocked = index > currentLevelIndex

          return (
            <div key={level.level} className="flex flex-col items-center w-32">
              {/* Stage Node */}
              <div
                className={`
                  relative w-24 h-24 rounded-full flex items-center justify-center text-4xl
                  transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-primary shadow-lg'
                      : isCurrent
                        ? 'bg-primary shadow-lg shadow-primary/50 ring-4 ring-primary/30 animate-pulse'
                        : 'bg-gray-300 dark:bg-gray-600 opacity-50'
                  }
                `}
              >
                {isLocked ? '🔒' : STAGE_EMOJIS[index]}
              </div>

              {/* Stage Info */}
              <div className="mt-4 text-center">
                <h3
                  className={`font-bold text-sm ${
                    isCurrent
                      ? 'text-primary'
                      : 'text-textLight dark:text-textDark'
                  }`}
                >
                  {level.name}
                </h3>
                <p className="text-xs text-textSecondary dark:text-textDarkSecondary mt-1">
                  Level {level.level}
                </p>
                <p className="text-xs text-textSecondary dark:text-textDarkSecondary mt-1">
                  Max workers: {level.maxWorkers}
                </p>
                {isCurrent && (
                  <div className="mt-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    CURRENT
                  </div>
                )}

                {/* Upgrade Button - Only show for current level */}
                {isCurrent && (
                  <div className="mt-3">
                    {index < INDUSTRY_LEVELS.length - 1 ? (
                      <Button
                        onClick={upgradeOven}
                        disabled={
                          money < INDUSTRY_LEVELS[index + 1].upgradePrice
                        }
                        size="sm"
                        className={
                          money >= INDUSTRY_LEVELS[index + 1].upgradePrice
                            ? 'bg-brownDark hover:bg-brownDarker text-white text-xs'
                            : 'text-xs'
                        }
                      >
                        Upgrade{' '}
                        {formatUpgradePrice(
                          INDUSTRY_LEVELS[index + 1].upgradePrice,
                        )}
                      </Button>
                    ) : (
                      <div className="px-3 py-1.5 text-xs font-bold text-gray-400 dark:text-gray-500">
                        MAX LEVEL
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
