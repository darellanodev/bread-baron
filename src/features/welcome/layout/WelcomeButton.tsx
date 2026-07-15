import { Button } from '@/components/ui/Button'

interface WelcomeButtonProps {
  onNext?: () => void
  onContinue?: () => void
  hasSave?: boolean
}

export default function WelcomeButton({
  onNext,
  onContinue,
  hasSave = false,
}: WelcomeButtonProps) {
  if (hasSave) {
    return (
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => onContinue?.()}
          size="xl"
          iconPosition="end"
          icon={
            <svg
              className="size-8 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          }
          className="font-display text-2xl md:text-3xl shadow-[0_6px_0_#8b4513] hover:shadow-[0_4px_0_#8b4513] active:shadow-none active:translate-y-1"
        >
          Continue last session
        </Button>
        <Button
          onClick={() => onNext?.()}
          size="xl"
          variant="secondary"
          className="font-display text-2xl md:text-3xl"
        >
          New Game
        </Button>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <Button
        onClick={() => onNext?.()}
        size="xl"
        iconPosition="end"
        icon={
          <svg
            className="size-8 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        }
        className="font-display text-2xl md:text-3xl shadow-[0_6px_0_#8b4513] hover:shadow-[0_4px_0_#8b4513] active:shadow-none active:translate-y-1"
      >
        Next
      </Button>
    </div>
  )
}
