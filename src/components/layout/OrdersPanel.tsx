import { OrderCard } from '../OrderCard'

export function OrdersPanel() {
  return (
    <aside className="w-1/4 flex flex-col border-r border-[#f4f3f0] dark:border-[#3a3121] bg-white dark:bg-[#1a150d] h-full overflow-hidden">
      <div className="p-6 pb-2">
        <h2 className="text-2xl font-extrabold flex items-center gap-2">
          <span className="text-[#eca013] text-2xl">📋</span>
          Active Orders
        </h2>
        <div className="flex py-3">
          <div className="flex h-11 flex-1 items-center justify-center rounded-full bg-[#f4f3f0] dark:bg-[#2a2418] p-1 shadow-inner">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 bg-white dark:bg-[#3a3121] shadow-sm text-[#181511] dark:text-white text-sm font-bold transition-all">
              Manual
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-[#897b61] text-sm font-bold transition-all">
              Auto
            </label>
          </div>
        </div>
      </div>
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
    </aside>
  )
}
