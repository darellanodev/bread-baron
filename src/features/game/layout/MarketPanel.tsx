import {
  MarketTitle,
  MarketCustomers,
  MarketPromotion,
} from '@/features/game/layout/market'

export function MarketPanel() {
  return (
    <aside className="lg:w-1/4 w-full bg-bgLight dark:bg-bgDark p-6 lg:overflow-y-auto">
      <MarketTitle />
      <MarketCustomers />
      <MarketPromotion />
    </aside>
  )
}
