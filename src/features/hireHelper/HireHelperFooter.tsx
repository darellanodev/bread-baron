interface HireHelperFooterProps {
  onClose: () => void
}

export function HireHelperFooter({ onClose }: HireHelperFooterProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 flex justify-center border-t border-borderLight dark:border-borderDark">
      <button
        onClick={onClose}
        className="bg-primary hover:bg-primary/80 text-white px-12 py-2 rounded-xl text-lg font-bold tracking-widest uppercase transition-colors shadow-md"
      >
        Close
      </button>
    </div>
  )
}
