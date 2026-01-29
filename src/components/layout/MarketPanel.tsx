import {
  MarketTitle,
  MarketDemand,
  MarketCustomers,
  MarketPromotion,
} from './market'

export function MarketPanel() {
  return (
    <aside className="w-1/4 flex flex-col border-l border-[#f4f3f0] dark:border-[#3a3121] bg-white dark:bg-[#1a150d] h-full overflow-hidden">
      <div className="p-6 pb-2">
        <MarketTitle />
        <div className="mt-4">
          <MarketDemand />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <MarketCustomers />
      </div>
      <div className="p-6 border-t border-[#f4f3f0] dark:border-[#3a3121]">
        <MarketPromotion />
      </div>
    </aside>
  )
}
