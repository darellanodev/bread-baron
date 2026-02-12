import { Button } from '@/components/ui/Button'

interface IndustryFooterProps {
  onClose: () => void
}

export function IndustryFooter({ onClose }: IndustryFooterProps) {
  return (
    <div className="bg-bgLight dark:bg-cardDark p-6 border-t border-borderLight dark:border-borderDark flex justify-center">
      <Button
        onClick={onClose}
        size="md"
        className="bg-brownDark hover:bg-brownDarker text-white"
      >
        Back to Bakery
      </Button>
    </div>
  )
}
