import { OrdersPanel } from '@/features/game/layout/OrdersPanel'
import { BakeryPanel } from '@/features/game/layout/BakeryPanel'
import { MarketPanel } from '@/features/game/layout/MarketPanel'
import { WorkersPanel } from '@/features/game/layout/WorkersPanel'
import { useAutoSave } from '@/hooks/useAutoSave'

interface GameScreenProps {
  onHireHelper: () => void
  onOpenIndustry: () => void
}

export function GameScreen({ onHireHelper, onOpenIndustry }: GameScreenProps) {
  useAutoSave()
  return (
    <div className="bg-bgSecondary dark:bg-bgDark text-textLight dark:text-bgLight lg:h-[calc(100vh-64px)] lg:overflow-hidden flex flex-col font-sans">
      <main className="flex flex-col lg:flex-row flex-1 lg:overflow-hidden overflow-y-auto">
        <OrdersPanel />
        <BakeryPanel onOpenIndustry={onOpenIndustry} />
        <MarketPanel />
      </main>
      <WorkersPanel onHireHelper={onHireHelper} />
    </div>
  )
}
