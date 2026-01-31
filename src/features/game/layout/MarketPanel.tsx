import {
  MarketTitle,
  MarketCustomers,
  MarketDemand,
  MarketPromotion,
} from './market'

export function MarketPanel() {
  return (
    <aside className="w-1/4 bg-bgLight dark:bg-bgDark p-6 overflow-y-auto">
      <MarketTitle />
      <MarketCustomers />
      <MarketDemand />
      <MarketPromotion />
    </aside>
  )
}
