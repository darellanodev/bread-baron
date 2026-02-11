import { OrdersPanel } from './layout/OrdersPanel'
import { BakeryPanel } from './layout/BakeryPanel'
import { MarketPanel } from './layout/MarketPanel'
import { WorkersPanel } from './layout/WorkersPanel'

interface GameScreenProps {
  onHireHelper: () => void
  onOpenIndustry: () => void
}

export function GameScreen({ onHireHelper, onOpenIndustry }: GameScreenProps) {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark text-textLight dark:text-bgLight h-[calc(100vh-64px)] overflow-hidden flex flex-col font-sans">
      <main className="flex flex-1 overflow-hidden">
        <OrdersPanel />
        <BakeryPanel onOpenIndustry={onOpenIndustry} />
        <MarketPanel />
      </main>
      <WorkersPanel onHireHelper={onHireHelper} />
    </div>
  )
}
