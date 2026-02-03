interface HireHelperHeaderProps {
  onClose: () => void
}

export function HireHelperHeader({ onClose }: HireHelperHeaderProps) {
  return (
    <div className="bg-gray-100 dark:bg-[#222] px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-gray-600 dark:text-gray-300 font-bold tracking-widest text-lg uppercase flex-grow text-center ml-8">
        Hire a New Helper
      </h1>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-full bg-black dark:bg-gray-800 text-white flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        <span className="material-icons text-sm">close</span>
      </button>
    </div>
  )
}
