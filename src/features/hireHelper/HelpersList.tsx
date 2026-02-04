import { Worker } from '../game/components/Worker'

export interface Helper {
  id: number
  emoji: string
  name: string
  hirePrice: number
  level?: number
  productivity?: number
}

interface HelpersListProps {
  helpers: Helper[]
  onHire: (id: number) => void
}

export function HelpersList({ helpers, onHire }: HelpersListProps) {
  return (
    <div className="flex-grow bg-deepDark p-6 overflow-y-auto">
      <div className="space-y-4">
        {helpers.map((helper) => (
          <div
            key={helper.id}
            className="flex items-center justify-between bg-cardDark/80 border border-borderDark/50 rounded-xl p-4 hover:bg-cardDark transition-colors"
          >
            <Worker
              emoji={helper.emoji}
              name={helper.name}
              upgradePrice={helper.hirePrice}
              onUpgrade={() => onHire(helper.id)}
              showUpgradeButton={false}
            />
            <div className="ml-4">
              <button
                onClick={() => onHire(helper.id)}
                className="bg-primary hover:brownDark text-white px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-lg"
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
