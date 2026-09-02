import { useState } from 'react'
import { useGameStore } from '@/store/gameStore'
import { OrdersList } from '@/features/game/layout/orders/OrdersList'
import { MarketCustomers } from '@/features/game/layout/market/MarketCustomers'
import { MarketPromotion } from '@/features/game/layout/market/MarketPromotion'
import { WorkersList } from '@/features/game/layout/workers/WorkersList'

interface MobileTabsProps {
  onHireHelper: () => void
}

export function MobileTabs({ onHireHelper }: MobileTabsProps) {
  const [activeTab, setActiveTab] = useState<'orders' | 'market' | 'staff'>('orders')
  const { customers, workers, maxWorkers } = useGameStore()

  const ordersCount = customers[0]?.orders.length ?? 0
  const customersCount = customers.length
  const workersLabel = `${workers.length}/${maxWorkers}`

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <div className="flex-1 min-h-0 overflow-y-auto p-4 pb-2">
        {activeTab === 'orders' && <OrdersList />}
        {activeTab === 'market' && (
          <div className="flex flex-col gap-4">
            <MarketCustomers />
            <MarketPromotion />
          </div>
        )}
        {activeTab === 'staff' && (
          <WorkersList onHireHelper={onHireHelper} />
        )}
      </div>
      <div className="flex-none flex border-t border-bgLight dark:border-borderDark bg-bgLight dark:bg-bgDark">
        <button
          type="button"
          onClick={() => setActiveTab('orders')}
          className={`flex-1 py-3 text-center font-bold text-sm transition-colors ${
            activeTab === 'orders'
              ? 'text-primary border-t-2 border-primary'
              : 'text-textSecondary dark:text-textDarkSecondary'
          }`}
        >
          🧾 Orders
          {ordersCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center size-5 rounded-full bg-primary text-white text-[10px] font-bold align-top">
              {ordersCount}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('market')}
          className={`flex-1 py-3 text-center font-bold text-sm transition-colors ${
            activeTab === 'market'
              ? 'text-primary border-t-2 border-primary'
              : 'text-textSecondary dark:text-textDarkSecondary'
          }`}
        >
          🏪 Market
          {customersCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center size-5 rounded-full bg-primary text-white text-[10px] font-bold align-top">
              {customersCount}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('staff')}
          className={`flex-1 py-3 text-center font-bold text-sm transition-colors ${
            activeTab === 'staff'
              ? 'text-primary border-t-2 border-primary'
              : 'text-textSecondary dark:text-textDarkSecondary'
          }`}
        >
          👥 Staff
          <span className="ml-1 text-[10px] font-normal opacity-70">
            {workersLabel}
          </span>
        </button>
      </div>
    </div>
  )
}
