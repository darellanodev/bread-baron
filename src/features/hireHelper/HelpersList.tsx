import { Worker } from '../game/components/Worker'

export interface Helper {
  id: number
  emoji: string
  name: string
  level: number
  productivity: number
  hirePrice: number
}

interface HelpersListProps {
  helpers: Helper[]
  onHire: (id: number) => void
}

export function HelpersList({ helpers, onHire }: HelpersListProps) {
  return (
    <div className="flex-grow bg-black p-6 overflow-y-auto">
      <div className="space-y-4">
        {helpers.map((helper) => (
          <div
            key={helper.id}
            className="flex items-center justify-between bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-colors"
          >
            <Worker
              emoji={helper.emoji}
              name={helper.name}
              level={helper.level}
              productivity={helper.productivity}
              upgradePrice={helper.hirePrice}
              onUpgrade={() => onHire(helper.id)}
            />
            <div className="ml-4">
              <button
                onClick={() => onHire(helper.id)}
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-lg"
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
