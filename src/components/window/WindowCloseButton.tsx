interface WindowCloseButtonProps {
  onClose: () => void
}

export function WindowCloseButton({ onClose }: WindowCloseButtonProps) {
  return (
    <button type="button"
      onClick={onClose}
      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-80 transition-opacity"
    >
      <span className="material-icons text-sm">X</span>
    </button>
  )
}
