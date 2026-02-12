import { RoundedButton } from '@/components/ui/RoundedButton'

interface EconomyFooterProps {
  onClose: () => void
}

export function EconomyFooter({ onClose }: EconomyFooterProps) {
  return (
    <footer className="p-6 border-t border-solid border-borderLight dark:border-borderDark bg-bgSecondary dark:bg-cardDark">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Actions */}
        <div className="flex flex-1 gap-3 w-full md:w-auto">
          <RoundedButton
            className="flex-1 md:flex-none min-w-[160px] bg-primary text-textLight hover:scale-[1.02] active:scale-95 shadow-[0_4px_14px_0_rgba(236,160,19,0.39)]"
            size="md"
          >
            Request Loan
          </RoundedButton>
          <RoundedButton
            className="flex-1 md:flex-none min-w-[160px] bg-transparent border-2 border-borderLight dark:border-borderDark text-textLight dark:text-textDark hover:bg-white/5"
            size="md"
          >
            Pay Loan
          </RoundedButton>
        </div>
        {/* Close */}
        <button
          onClick={onClose}
          className="w-full md:w-auto min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-transparent text-textSecondary dark:text-textDarkSecondary text-sm font-bold hover:text-textLight dark:hover:text-textDark transition-colors"
        >
          <span className="truncate">Close</span>
        </button>
      </div>
    </footer>
  )
}
