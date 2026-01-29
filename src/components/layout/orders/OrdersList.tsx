import { OrderCard } from '../../OrderCard'

export function OrdersList() {
  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
      <OrderCard
        difficulty="Medium"
        difficultyColor="text-[#eca013]"
        title="Rustic Bread Batch"
        price={150}
        progress={7}
        maxProgress={10}
      />
      <OrderCard
        difficulty="Hard"
        difficultyColor="text-orange-600"
        title="Gourmet Croissants"
        price={500}
        progress={2}
        maxProgress={25}
      />
      <OrderCard
        difficulty="Easy"
        difficultyColor="text-green-500"
        title="Daily Baguettes"
        price={40}
        isInactive={true}
      />
    </div>
  )
}
