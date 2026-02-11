import { RoundedButton } from '../../../components/ui/RoundedButton'
import { useGameStore } from '../../../store/gameStore'

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
        <RoundedButton
          onClick={hasEnoughMoney ? postJobOffer : undefined}
          size="lg"
          className={`font-bold ${
            hasEnoughMoney
              ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
              : 'bg-gray-400 text-gray-200 cursor-not-allowed'
          }`}
        >
          Post Job Offer ($500)
        </RoundedButton>
      )}
      <RoundedButton
        onClick={onClose}
        size="lg"
        className="bg-primary hover:bg-primary/80 text-white"
      >
        Close
      </RoundedButton>
    </div>
  )
}
