import { WindowContainer, WindowHeader } from '@/components/window'
import { EconomyChart, EconomyFooter } from '@/features/economy/layout'
import { useGameStore } from '@/store/gameStore'
import { formatMoney } from '@/utils/formatters'
import { DEBT_INTEREST_RATE } from '@/constants/timeConstants'

interface EconomyScreenProps {
  onClose: () => void
}

export function EconomyScreen({ onClose }: EconomyScreenProps) {
  const activeDebt = useGameStore((state) => state.activeDebt)
  const dailyDebtCost = Math.round(activeDebt * DEBT_INTEREST_RATE)
  const interestPercentage = DEBT_INTEREST_RATE * 100
  return (
    <WindowContainer maxWidth="max-w-[960px]">
      <WindowHeader title="Economy" onClose={onClose} />

      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        <EconomyChart />

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark">
            <p className="text-xs text-textSecondary dark:text-textDarkSecondary font-semibold uppercase">
              Active Debt
            </p>
            <p className="text-lg font-bold text-red-500">
              {formatMoney(activeDebt)}
            </p>
            <p className="text-xs text-textSecondary dark:text-textDarkSecondary mt-1">
              Daily cost ({interestPercentage}%): {formatMoney(dailyDebtCost)}
            </p>
          </div>
        </div>
      </div>

      <EconomyFooter onClose={onClose} />
    </WindowContainer>
  )
}
