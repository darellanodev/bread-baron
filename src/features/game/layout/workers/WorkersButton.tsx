import { useGameStore } from '@/store/gameStore'

interface WorkersButtonProps {
  compact?: boolean
}

export function WorkersButton({ compact = false }: WorkersButtonProps) {
  const { increaseBakingProgress, isPaused } = useGameStore()

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => increaseBakingProgress(5)}
        disabled={isPaused}
        className={`w-full h-14 rounded-2xl bg-primary border-4 border-white dark:border-cardDark shadow-xl flex items-center justify-center gap-3 text-white transition-all active:scale-[0.98] ${
          isPaused
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer hover:bg-primary/90 active:shadow-inner'
        }`}
      >
        <span className="text-2xl">{isPaused ? '⏸️' : '👆'}</span>
        <span className="font-black text-base uppercase tracking-tight">
          {isPaused ? 'PAUSED' : 'KNEAD NOW!'}
        </span>
      </button>
    )
  }

  return (
    <div className="flex-none">
      <button type="button"
        onClick={() => increaseBakingProgress(5)}
        disabled={isPaused}
        className={`size-32 rounded-full bg-primary border-8 border-white dark:border-cardDark shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-105 active:scale-90 active:shadow-inner group ${
          isPaused
            ? 'cursor-not-allowed opacity-50 hover:scale-100 active:scale-100'
            : 'cursor-pointer'
        }`}
      >
        <span className="text-4xl mb-1 group-active:animate-bounce">
          {isPaused ? '⏸️' : '👆'}
        </span>
        <span className="font-black text-lg uppercase tracking-tighter">
          {isPaused ? 'PAUSED' : 'KNEAD NOW!'}
        </span>
      </button>
    </div>
  )
}
