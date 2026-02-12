import { Button } from '@/components/ui/Button'
import { useGameStore } from '@/store/gameStore'

interface HireHelperFooterProps {
  onClose: () => void
}

export function HireHelperFooter({ onClose }: HireHelperFooterProps) {
  const { availableHelpers, money, postJobOffer } = useGameStore()

  const hasAvailableHelpers = availableHelpers.length > 0
  const hasEnoughMoney = money >= 500
  const showJobOfferButton = !hasAvailableHelpers

  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex justify-center gap-4 border-t border-borderLight dark:border-borderDark">
      {showJobOfferButton && (
        <Button
          onClick={hasEnoughMoney ? postJobOffer : undefined}
          size="lg"
          disabled={!hasEnoughMoney}
          className="font-bold bg-green-600 hover:bg-green-700 text-white"
        >
          Post Job Offer ($500)
        </Button>
      )}
      <Button onClick={onClose} size="lg">
        Close
      </Button>
    </div>
  )
}
