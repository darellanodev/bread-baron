interface IndustryFooterProps {
  onClose: () => void
}

export function IndustryFooter({ onClose }: IndustryFooterProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 border-t border-borderLight dark:border-borderDark flex justify-center">
      <button
        onClick={onClose}
        className="px-8 py-3 bg-brownDark text-white font-bold rounded-xl hover:bg-brownDarker transition-colors"
      >
        Back to Bakery
      </button>
    </div>
  )
}
