import { Button } from '@/components/ui/Button'
import { useGameStore } from '@/store/gameStore'

export function MarketPromotion() {
  const { customers, money, launchPromotion } = useGameStore()

  const hasCustomers = customers.length > 0
  const hasEnoughMoney = money >= 500
  const isDisabled = hasCustomers || !hasEnoughMoney

  const getDisabledMessage = () => {
    if (hasCustomers) {
      return 'Finish current orders first'
    }
    if (!hasEnoughMoney) {
      return 'Need $500 to launch'
    }
    return 'Generate 2-5 new customers'
  }

  return (
    <>
      <Button
        fullWidth
        disabled={isDisabled}
        onClick={launchPromotion}
        size="lg"
        icon="📢"
        className="font-extrabold"
      >
        Launch Promotion! ($500)
      </Button>
      <p className="text-center text-xs font-bold text-textSecondary mt-4">
        {getDisabledMessage()}
      </p>
    </>
  )
}
