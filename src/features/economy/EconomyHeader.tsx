interface EconomyHeaderProps {
  onClose: () => void
}

export function EconomyHeader({ onClose }: EconomyHeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-solid border-borderLight dark:border-borderDark">
      <div className="flex items-center gap-3">
        <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">
            account_balance_wallet
          </span>
        </div>
        <h2 className="text-textLight dark:text-textDark text-2xl font-bold leading-tight tracking-tight">
          Economy
        </h2>
      </div>
      <button
        onClick={onClose}
        className="flex items-center justify-center rounded-full size-10 bg-bgSecondary dark:bg-cardDark text-textSecondary dark:text-textDark hover:bg-red-500/20 hover:text-red-500 transition-colors"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </header>
  )
}
