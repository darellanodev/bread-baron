import { OrderCard } from '../../components/OrderCard'
import { useGameStore } from '../../../../store/gameStore'

export function OrdersList() {
  const { orders } = useGameStore()

  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          difficulty={order.difficulty}
          difficultyColor={order.difficultyColor}
          title={order.title}
          price={order.price}
          progress={order.progress}
          maxProgress={order.maxProgress}
          isInactive={order.isInactive}
        />
      ))}
    </div>
  )
}
