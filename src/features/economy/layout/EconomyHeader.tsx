import { WindowCloseButton } from '../../../components/ui/WindowCloseButton'

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
      <WindowCloseButton onClose={onClose} />
    </header>
  )
}
