import { OrdersTitle, OrdersList } from '@/features/game/layout/orders'

export function OrdersPanel() {
  return (
    <aside className="lg:w-1/4 w-full flex flex-col border-r border-bgLight dark:border-borderDark bg-white dark:bg-deepDark lg:h-full lg:overflow-hidden">
      <div className="p-6 pb-2">
        <OrdersTitle />
      </div>
      <OrdersList />
    </aside>
  )
}
