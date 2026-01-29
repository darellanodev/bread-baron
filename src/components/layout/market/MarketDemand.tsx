export function MarketDemand() {
  return (
    <div className="flex flex-col gap-2">
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
  )
}
