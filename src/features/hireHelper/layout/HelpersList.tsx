import { Worker } from '../../game/components/Worker'
import { useGameStore } from '../../../store/gameStore'

export function HelpersList() {
  const { availableHelpers, hireWorker, money } = useGameStore()

  const contractOptions = [1, 2, 3]

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
              productivity={helper.productivity}
              upgradePrice={helper.hirePricePerMonth}
              onUpgrade={() => hireWorker(helper.id, 1)}
              showUpgradeButton={false}
              showFrame={false}
            />
            <div className="flex gap-2">
              {contractOptions.map((months) => {
                const totalPrice = helper.hirePricePerMonth * months
                const canAfford = money >= totalPrice
                return (
                  <div key={months} className="flex flex-col items-center">
                    <span className="text-xs text-textSecondary mb-1">
                      {months} month{months > 1 ? 's' : ''}
                    </span>
                    <button
                      onClick={() => hireWorker(helper.id, months)}
                      disabled={!canAfford}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-lg ${
                        canAfford
                          ? 'bg-primary hover:bg-primary/80 text-white'
                          : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      }`}
                    >
                      ${totalPrice}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
