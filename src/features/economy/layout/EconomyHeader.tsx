interface EconomyHeaderProps {
  onClose: () => void
}

export function EconomyHeader({ onClose }: EconomyHeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-solid border-borderLight dark:border-borderDark">
      <div className="flex items-center gap-3">
        <h2 className="text-textLight dark:text-textDark text-2xl font-bold leading-tight tracking-tight">
          Economy
        </h2>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        <span className="material-icons text-sm">X</span>
      </button>
    </header>
  )
}
