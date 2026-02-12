import { WindowCloseButton } from '@/components/ui/WindowCloseButton'

interface HireHelperHeaderProps {
  onClose: () => void
}

export function HireHelperHeader({ onClose }: HireHelperHeaderProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex justify-center border-b border-borderLight dark:border-borderDark">
      <h1 className="text-primary dark:text-primary font-bold tracking-widest text-lg uppercase flex-grow text-center ml-8">
        Hire a New Helper
      </h1>
      <WindowCloseButton onClose={onClose} />
    </div>
  )
}
