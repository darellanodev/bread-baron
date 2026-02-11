import { useGameStore } from '../../store/gameStore'
import { INDUSTRY_LEVELS } from '../../store/actions/industryActions'

interface IndustryScreenProps {
  onClose: () => void
}

const STAGE_EMOJIS = ['🏠', '🏪', '🏢', '🏭', '🌍']

export function IndustryScreen({ onClose }: IndustryScreenProps) {
  const { ovenLevel, maxWorkers } = useGameStore()
  const currentLevelIndex = ovenLevel - 1

  return (
    <div className="bg-bgSecondary dark:bg-bgDark min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="bg-bgLight dark:bg-deepDark w-full max-w-4xl max-h-[calc(100vh-100px)] overflow-hidden rounded-xl shadow-2xl flex flex-col border border-borderLight dark:border-borderDark">
        {/* Header */}
        <div className="bg-bgLight dark:bg-cardDark p-6 flex items-center justify-between border-b border-borderLight dark:border-borderDark">
          <h1 className="text-primary dark:text-primary font-bold tracking-widest text-xl uppercase flex-grow text-center">
            🏭 Bakery Industry Evolution
          </h1>
          <button
            onClick={onClose}
            className="text-textSecondary hover:text-primary transition-colors text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-12">
          {/* Stages Line */}
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
                  <div
                    key={level.level}
                    className="flex flex-col items-center w-32"
                  >
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
                      {isCurrent && (
                        <div className="mt-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                          CURRENT
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-textLight dark:text-textDark">
              Current Status
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {ovenLevel}
                </div>
                <div className="text-sm text-textSecondary dark:text-textDarkSecondary">
                  Industry Level
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {maxWorkers}
                </div>
                <div className="text-sm text-textSecondary dark:text-textDarkSecondary">
                  Max Workers
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {STAGE_EMOJIS[currentLevelIndex]}
                </div>
                <div className="text-sm text-textSecondary dark:text-textDarkSecondary">
                  {INDUSTRY_LEVELS[currentLevelIndex].name}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="bg-bgLight dark:bg-cardDark p-6 border-t border-borderLight dark:border-borderDark flex justify-center">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-brownDark text-white font-bold rounded-xl hover:bg-brownDarker transition-colors"
          >
            Back to Bakery
          </button>
        </div>
      </div>
    </div>
  )
}
