import { RoundedButton } from '../../../components/ui/RoundedButton'

interface HireHelperFooterProps {
  onClose: () => void
}

export function HireHelperFooter({ onClose }: HireHelperFooterProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex justify-center border-t border-borderLight dark:border-borderDark">
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
