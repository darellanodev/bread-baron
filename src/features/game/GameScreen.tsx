import { OrdersPanel } from '@/features/game/layout/OrdersPanel'
import { BakeryPanel } from '@/features/game/layout/BakeryPanel'
import { MarketPanel } from '@/features/game/layout/MarketPanel'
import { WorkersPanel } from '@/features/game/layout/WorkersPanel'
import { MobileCoreLoop } from '@/features/game/layout/MobileCoreLoop'
import { MobileTabs } from '@/features/game/layout/MobileTabs'
import { useAutoSave } from '@/hooks/useAutoSave'
import { useWorkerProduction } from '@/hooks/useWorkerProduction'

interface GameScreenProps {
  onHireHelper: () => void
  onOpenIndustry: () => void
}

export function GameScreen({ onHireHelper, onOpenIndustry }: GameScreenProps) {
  useAutoSave()
  useWorkerProduction()
  return (
    <div className="bg-bgSecondary dark:bg-bgDark text-textLight dark:text-bgLight h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] overflow-hidden flex flex-col font-sans">
      <main className="flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden lg:hidden">
          <MobileCoreLoop onOpenIndustry={onOpenIndustry} />
          <MobileTabs onHireHelper={onHireHelper} />
        </div>
        <div className="hidden lg:flex lg:flex-row lg:flex-1 lg:min-h-0 lg:overflow-hidden">
          <OrdersPanel />
          <BakeryPanel onOpenIndustry={onOpenIndustry} />
          <MarketPanel />
        </div>
      </main>
      <div className="hidden lg:flex lg:flex-col lg:h-1/4 lg:min-h-[180px]">
        <WorkersPanel onHireHelper={onHireHelper} />
      </div>
    </div>
  )
}
