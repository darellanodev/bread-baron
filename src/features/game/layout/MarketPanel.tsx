import {
  MarketTitle,
  MarketCustomers,
  MarketPromotion,
} from '@/features/game/layout/market'

export function MarketPanel() {
  return (
    <aside className="w-1/4 bg-bgLight dark:bg-bgDark p-6 overflow-y-auto">
      <MarketTitle />
      <MarketCustomers />
      <MarketPromotion />
    </aside>
  )
}
