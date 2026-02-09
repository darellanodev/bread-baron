import { Worker } from '../../game/components/Worker'
import { useGameStore } from '../../../store/gameStore'

export function HelpersList() {
  const { availableHelpers, hireWorker, money } = useGameStore()
  return (
    <div className="flex-grow bg-bgLight dark:bg-deepDark p-6 overflow-y-auto">
      <div className="space-y-4">
        {availableHelpers.map((helper) => (
          <div
            key={helper.id}
            className="flex items-center justify-between bg-bgLight dark:bg-cardDark border border-borderLight dark:border-borderDark rounded-xl p-4 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
          >
            <Worker
              emoji={helper.emoji}
              name={helper.name}
              upgradePrice={helper.hirePrice}
              onUpgrade={() => hireWorker(helper.id)}
              showUpgradeButton={false}
              showFrame={false}
            />
            <div className="ml-4">
              <button
                onClick={() => hireWorker(helper.id)}
                disabled={money < helper.hirePrice}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-lg ${
                  money >= helper.hirePrice
                    ? 'bg-primary hover:bg-primary/80 text-white'
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
              >
                Hire ${helper.hirePrice}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
