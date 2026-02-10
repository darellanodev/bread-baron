import type { Order } from '../../../store/types'

interface CustomerProps {
  name: string
  orders: Order[]
  totalOrders: number
  isActive?: boolean
}

export function Customer({
  name,
  orders,
  totalOrders,
  isActive = false,
}: CustomerProps) {
  // Calculate completed orders as: total - remaining
  const completedOrders = totalOrders - orders.length
  const progressText =
    orders.length > 0
      ? `${completedOrders}/${totalOrders} orders completed`
      : 'All orders completed'

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl border border-dashed ${
        isActive
          ? 'bg-primary/10 border-primary dark:bg-primary/20 dark:border-primary'
          : 'bg-bgLight/50 border-borderLight dark:bg-cardDark/50 dark:border-borderDark'
      }`}
    >
      <div
        className={`size-10 rounded-full flex items-center justify-center text-2xl ${
          isActive ? 'bg-primary/30' : 'bg-primary/20'
        }`}
      >
        👤
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-textSecondary">{progressText}</p>
      </div>
    </div>
  )
}
