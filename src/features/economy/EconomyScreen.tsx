import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { WindowHeader } from '@/components/ui/WindowHeader'
import { EconomyChart, EconomyFooter } from '@/features/economy/layout'

interface EconomyScreenProps {
  onClose: () => void
}

export function EconomyScreen({ onClose }: EconomyScreenProps) {
  return (
    <ScreenContainer maxWidth="max-w-[960px]">
      <WindowHeader title="Economy" onClose={onClose} />

      <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
        <EconomyChart />

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark">
            <p className="text-xs text-textSecondary dark:text-textDarkSecondary font-semibold uppercase">
              Active Debt
            </p>
            <p className="text-lg font-bold text-red-500">30.000$</p>
          </div>
        </div>
      </div>

      <EconomyFooter onClose={onClose} />
    </ScreenContainer>
  )
}
