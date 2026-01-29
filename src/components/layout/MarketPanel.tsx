import {
  MarketTitle,
  MarketDemand,
  MarketCustomers,
  MarketPromotion,
} from './market'

export function MarketPanel() {
  return (
    <aside className="w-1/4 flex flex-col border-l border-bgLight dark:border-borderDark bg-white dark:bg-deepDark h-full overflow-hidden">
      <div className="p-6 pb-2">
        <MarketTitle />
        <div className="mt-4">
          <MarketDemand />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <MarketCustomers />
      </div>
      <div className="p-6 border-t border-bgLight dark:border-borderDark">
        <MarketPromotion />
      </div>
    </aside>
  )
}
