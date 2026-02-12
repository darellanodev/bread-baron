import { Button } from '@/components/ui'
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
        className={`font-extrabold text-lg rounded-xl shadow-[0_6px_0_#b47b00] active:shadow-none active:translate-y-[6px] transition-all ${
          isDisabled
            ? 'bg-gray-400 text-gray-200 cursor-not-allowed shadow-none'
            : 'bg-primary text-white hover:bg-primary/90'
        }`}
      >
        <>{'📢'} Launch Promotion! ($500)</>
      </Button>
      <p className="text-center text-xs font-bold text-textSecondary mt-4">
        {getDisabledMessage()}
      </p>
    </>
  )
}
