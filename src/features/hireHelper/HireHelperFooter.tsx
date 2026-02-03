interface HireHelperFooterProps {
  onClose: () => void
}

export function HireHelperFooter({ onClose }: HireHelperFooterProps) {
  return (
    <div className="bg-gray-300 dark:bg-gray-700 p-6 flex justify-center border-t border-gray-400 dark:border-gray-600">
      <button
        onClick={onClose}
        className="bg-black text-white px-12 py-2 rounded-xl text-lg font-bold tracking-widest uppercase hover:bg-gray-900 transition-colors shadow-md"
      >
        Close
      </button>
    </div>
  )
}
