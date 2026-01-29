export function MarketDemand() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm font-bold">
        <span>Demand Level</span>
        <span className="text-primary">HIGH</span>
      </div>
      <div className="h-2 w-full bg-bgLight dark:bg-cardDark rounded-full flex gap-1">
        <div className="h-full flex-1 bg-primary rounded-full"></div>
        <div className="h-full flex-1 bg-primary rounded-full"></div>
        <div className="h-full flex-1 bg-primary rounded-full"></div>
        <div className="h-full flex-1 bg-gray-200 dark:bg-deepDark rounded-full"></div>
      </div>
    </div>
  )
}
