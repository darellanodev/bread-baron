import { Header } from './layout/Header'
import { OrdersPanel } from './layout/OrdersPanel'
import { BakeryPanel } from './layout/BakeryPanel'
import { MarketPanel } from './layout/MarketPanel'
import { WorkersPanel } from './layout/WorkersPanel'

interface GameScreenProps {
  onHireHelper: () => void
  onEconomy: () => void
}

export function GameScreen({ onHireHelper, onEconomy }: GameScreenProps) {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark text-textLight dark:text-bgLight h-screen overflow-hidden flex flex-col font-sans">
      <Header onEconomy={onEconomy} />
      <main className="flex flex-1 overflow-hidden">
        <OrdersPanel />
        <BakeryPanel />
        <MarketPanel />
      </main>
      <WorkersPanel onHireHelper={onHireHelper} />
    </div>
  )
}
