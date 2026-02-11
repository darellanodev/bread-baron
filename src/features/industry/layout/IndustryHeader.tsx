interface IndustryHeaderProps {
  onClose: () => void
}

export function IndustryHeader({ onClose }: IndustryHeaderProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex items-center justify-between border-b border-borderLight dark:border-borderDark">
      <h1 className="text-primary dark:text-primary font-bold tracking-widest text-xl uppercase flex-grow text-center">
        🏭 Bakery Industry Evolution
      </h1>
      <button
        onClick={onClose}
        className="text-textSecondary hover:text-primary transition-colors text-2xl font-bold"
      >
        ✕
      </button>
    </div>
  )
}
