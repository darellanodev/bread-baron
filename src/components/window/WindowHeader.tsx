import { WindowCloseButton } from './WindowCloseButton'

interface WindowHeaderProps {
  title: string
  onClose: () => void
}

export function WindowHeader({ title, onClose }: WindowHeaderProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex justify-center border-b border-borderLight dark:border-borderDark">
      <h1 className="text-primary dark:text-primary font-bold tracking-widest text-lg uppercase flex-grow text-center ml-8">
        {title}
      </h1>
      <WindowCloseButton onClose={onClose} />
    </div>
  )
}
