import { OrdersTitle, OrdersButton, OrdersList } from './orders'

export function OrdersPanel() {
  return (
    <aside className="w-1/4 flex flex-col border-r border-bgLight dark:border-borderDark bg-white dark:bg-deepDark h-full overflow-hidden">
      <div className="p-6 pb-2">
        <OrdersTitle />
        <OrdersButton />
      </div>
      <OrdersList />
    </aside>
  )
}
