import { Header } from './features/game/layout/Header'
import { OrdersPanel } from './features/game/layout/OrdersPanel'
import { BakeryPanel } from './features/game/layout/BakeryPanel'
import { MarketPanel } from './features/game/layout/MarketPanel'
import { WorkersPanel } from './features/game/layout/WorkersPanel'

export function GameScreen() {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark text-textLight dark:text-bgLight h-screen overflow-hidden flex flex-col font-sans">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <OrdersPanel />
        <BakeryPanel />
        <MarketPanel />
      </main>
      <WorkersPanel />
    </div>
  )
}
