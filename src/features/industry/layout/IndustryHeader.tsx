import { WindowCloseButton } from '../../../components/ui/WindowCloseButton'

interface IndustryHeaderProps {
  onClose: () => void
}

export function IndustryHeader({ onClose }: IndustryHeaderProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex items-center justify-between border-b border-borderLight dark:border-borderDark">
      <h1 className="text-primary dark:text-primary font-bold tracking-widest text-xl uppercase flex-grow text-center">
        🏭 Bakery Industry Evolution
      </h1>
      <WindowCloseButton onClose={onClose} />
    </div>
  )
}
