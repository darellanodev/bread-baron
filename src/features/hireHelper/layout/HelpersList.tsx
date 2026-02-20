import { Worker } from '@/features/game/components/Worker'
import { useGameStore } from '@/store/gameStore'
import { MaxWorkersWarning } from '../components/MaxWorkersWarning'
import { ContractButtons } from '../components/ContractButtons'

export function HelpersList() {
  const { availableHelpers, hireWorker, money, workers, maxWorkers } =
    useGameStore()

  const hasReachedMaxWorkers = workers.length >= maxWorkers

  return (
    <div className="flex-grow bg-bgLight dark:bg-deepDark p-6 overflow-y-auto">
      {hasReachedMaxWorkers && (
        <MaxWorkersWarning current={workers.length} max={maxWorkers} />
      )}
      <div className="space-y-4">
        {availableHelpers.map((helper) => {
          const canAfford = money >= helper.hirePricePerMonth
          const canHire = canAfford && !hasReachedMaxWorkers
          return (
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
              <ContractButtons
                pricePerMonth={helper.hirePricePerMonth}
                canHire={canHire}
                onHire={(months) => hireWorker(helper.id, months)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
