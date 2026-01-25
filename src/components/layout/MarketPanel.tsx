import { Customer } from '../Customer'

export function MarketPanel() {
  return (
    <aside className="w-1/4 flex flex-col border-l border-[#f4f3f0] dark:border-[#3a3121] bg-white dark:bg-[#1a150d] h-full overflow-hidden">
      <div className="p-6 pb-2">
        <h2 className="text-2xl font-extrabold flex items-center gap-2">
          <span className="text-[#eca013] text-2xl">🏪</span>
          The Market
        </h2>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex justify-between text-sm font-bold">
            <span>Demand Level</span>
            <span className="text-[#eca013]">HIGH</span>
          </div>
          <div className="h-2 w-full bg-[#f4f3f0] dark:bg-[#2a2418] rounded-full flex gap-1">
            <div className="h-full flex-1 bg-[#eca013] rounded-full"></div>
            <div className="h-full flex-1 bg-[#eca013] rounded-full"></div>
            <div className="h-full flex-1 bg-[#eca013] rounded-full"></div>
            <div className="h-full flex-1 bg-gray-200 dark:bg-[#1a150d] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="mb-6">
          <p className="text-xs font-bold text-[#897b61] uppercase tracking-widest mb-3">
            Customers in Queue (12)
          </p>
          <div className="flex flex-col gap-3">
            <Customer name="The Mayor" wants="5x Rustic Bread" />
            <Customer name="Construction Worker" wants="2x Croissants" />
            <Customer name="Village Baker" wants="10x Dough Bags" />
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-[#f4f3f0] dark:border-[#3a3121]">
        <button className="w-full h-14 bg-[#eca013] text-white font-extrabold text-lg rounded-xl shadow-[0_6px_0_#b47b00] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-2 group">
          <span className="text-2xl group-hover:rotate-12 transition-transform">
            📢
          </span>
          Launch Promotion!
        </button>
        <p className="text-center text-xs font-bold text-[#897b61] mt-4">
          Boost demand by 200% for 30s
        </p>
      </div>
    </aside>
  )
}
