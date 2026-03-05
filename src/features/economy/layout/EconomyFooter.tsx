import { Button } from '@/components/ui/Button'
import { useGameStore } from '@/store/gameStore'

interface EconomyFooterProps {
  onClose: () => void
}

export function EconomyFooter({ onClose }: EconomyFooterProps) {
  const requestLoan = useGameStore((state) => state.requestLoan)
  const payLoan = useGameStore((state) => state.payLoan)
  return (
    <footer className="p-6 border-t border-solid border-borderLight dark:border-borderDark bg-bgSecondary dark:bg-cardDark">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Actions */}
        <div className="flex flex-1 gap-3 w-full md:w-auto">
          <Button
            className="flex-1 md:flex-none min-w-[160px]"
            size="md"
            onClick={requestLoan}
          >
            Request Loan ($5K)
          </Button>
          <Button
            className="flex-1 md:flex-none min-w-[160px]"
            size="md"
            onClick={payLoan}
          >
            Pay Loan ($5K)
          </Button>
        </div>
        {/* Close */}
        <Button onClick={onClose} size="lg">
          Close
        </Button>
      </div>
    </footer>
  )
}
