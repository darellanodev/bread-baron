import { OrdersTitle, OrdersButton, OrdersList } from './orders'

export function OrdersPanel() {
  return (
    <aside className="w-1/4 flex flex-col border-r border-[#f4f3f0] dark:border-[#3a3121] bg-white dark:bg-[#1a150d] h-full overflow-hidden">
      <div className="p-6 pb-2">
        <OrdersTitle />
        <OrdersButton />
      </div>
      <OrdersList />
    </aside>
  )
}
