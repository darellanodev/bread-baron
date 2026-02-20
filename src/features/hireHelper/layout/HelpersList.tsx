import { Worker } from '@/features/game/components/Worker'
import { useGameStore } from '@/store/gameStore'
import { Button } from '@/components/ui/Button'
import { MaxWorkersWarning } from '../components/MaxWorkersWarning'

export function HelpersList() {
  const { availableHelpers, hireWorker, money, workers, maxWorkers } =
    useGameStore()

  const contractOptions = [1, 2, 3]
  const hasReachedMaxWorkers = workers.length >= maxWorkers

  return (
    <div className="flex-grow bg-bgLight dark:bg-deepDark p-6 overflow-y-auto">
      {hasReachedMaxWorkers && (
        <MaxWorkersWarning current={workers.length} max={maxWorkers} />
      )}
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
                const canHire = canAfford && !hasReachedMaxWorkers
                return (
                  <div key={months} className="flex flex-col items-center">
                    <span className="text-xs text-textSecondary mb-1">
                      {months} month{months > 1 ? 's' : ''}
                    </span>
                    <Button
                      onClick={() => hireWorker(helper.id, months)}
                      disabled={!canHire}
                      size="sm"
                      width="sm"
                      className="shadow-lg"
                    >
                      ${totalPrice}
                    </Button>
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
