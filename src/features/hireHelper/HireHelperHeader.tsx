interface HireHelperHeaderProps {
  onClose: () => void
}

export function HireHelperHeader({ onClose }: HireHelperHeaderProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex justify-center border-b border-borderLight dark:border-borderDark">
      <h1 className="text-primary dark:text-primary font-bold tracking-widest text-lg uppercase flex-grow text-center ml-8">
        Hire a New Helper
      </h1>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        <span className="material-icons text-sm">X</span>
      </button>
    </div>
  )
}
